import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { CalendarDays, MapPin, Trash2 } from "lucide-react";
import type { Session } from "@supabase/supabase-js";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | Glorious Gospel Miracle Centre" },
      { name: "description", content: "Upcoming services, crusades, prayer meetings and gatherings at Glorious Gospel Miracle Centre, Kiganjo." },
      { property: "og:title", content: "Church Events | Glorious Gospel Miracle Centre" },
      { property: "og:description", content: "See what's happening at G.G.M.C. and join us." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: EventsPage,
});

type ChurchEvent = { id: string; title: string; description: string | null; starts_at: string; location: string | null };

function EventsPage() {
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [msg, setMsg] = useState("");

  const load = async () => {
    const { data } = await supabase.from("events").select("*").order("starts_at", { ascending: true });
    setEvents(data ?? []);
  };

  useEffect(() => {
    load();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return setIsAdmin(false);
    supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" }).then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  const auth = async (e: FormEvent<HTMLFormElement>, mode: "in" | "up") => {
    e.preventDefault();
    const f = new FormData(e.currentTarget.closest("form")!);
    const email = String(f.get("email")), password = String(f.get("password"));
    const { error } = mode === "in"
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/events` } });
    setMsg(error ? error.message : mode === "up" ? "Check your email to confirm your account." : "");
  };

  const post = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const { error } = await supabase.from("events").insert({
      title: String(f.get("title")),
      description: String(f.get("description") || "") || null,
      location: String(f.get("location") || "") || null,
      starts_at: new Date(String(f.get("starts_at"))).toISOString(),
      created_by: session?.user.id ?? null,
    });
    if (error) return setMsg(error.message);
    form.reset();
    setMsg("Event posted.");
    load();
  };

  const remove = async (id: string) => {
    await supabase.from("events").delete().eq("id", id);
    load();
  };

  const now = Date.now();
  const upcoming = events.filter((e) => new Date(e.starts_at).getTime() >= now - 864e5);

  return (
    <div className="church-site events-page">
      <header className="site-header events-header">
        <Link className="brand-lockup" to="/">
          <span className="brand-monogram">Glorious Gospel Miracle Centre</span>
          <span className="brand-caption">Home of True Worship</span>
        </Link>
        <nav className="main-nav"><Link to="/">Home</Link></nav>
      </header>
      <main className="events-main">
        <p className="eyebrow">What's happening</p>
        <h1 className="events-title">Church events</h1>
        <div className="events-list">
          {upcoming.length === 0 && <p className="events-empty">No upcoming events yet. Check back soon.</p>}
          {upcoming.map((ev) => (
            <article key={ev.id} className="event-card">
              <div className="event-date">
                <span>{new Date(ev.starts_at).toLocaleDateString("en-KE", { day: "numeric" })}</span>
                {new Date(ev.starts_at).toLocaleDateString("en-KE", { month: "short" })}
              </div>
              <div className="event-body">
                <h2>{ev.title}</h2>
                <p className="event-meta"><CalendarDays aria-hidden="true" />{new Date(ev.starts_at).toLocaleString("en-KE", { weekday: "long", hour: "numeric", minute: "2-digit" })}</p>
                {ev.location && <p className="event-meta"><MapPin aria-hidden="true" />{ev.location}</p>}
                {ev.description && <p>{ev.description}</p>}
              </div>
              {isAdmin && <button className="event-delete" onClick={() => remove(ev.id)} aria-label="Delete event"><Trash2 /></button>}
            </article>
          ))}
        </div>

        <section className="events-admin">
          {!session && (
            <form className="events-form" onSubmit={(e) => auth(e, "in")}>
              <h2>Church team sign in</h2>
              <p>Sign in to post events.</p>
              <Input name="email" type="email" placeholder="Email" required />
              <Input name="password" type="password" placeholder="Password" minLength={6} required />
              <div className="events-form-actions">
                <Button type="submit">Sign in</Button>
                <Button type="button" variant="outline" onClick={(e) => auth(e as unknown as FormEvent<HTMLFormElement>, "up")}>Create account</Button>
              </div>
            </form>
          )}
          {session && isAdmin && (
            <form className="events-form" onSubmit={post}>
              <h2>Post a new event</h2>
              <Input name="title" placeholder="Event title" required />
              <Input name="starts_at" type="datetime-local" required />
              <Input name="location" placeholder="Location (e.g. Blue Ribbon, Kiganjo)" />
              <Textarea name="description" placeholder="Details" rows={4} />
              <div className="events-form-actions">
                <Button type="submit">Post event</Button>
                <Button type="button" variant="outline" onClick={() => supabase.auth.signOut()}>Sign out</Button>
              </div>
            </form>
          )}
          {session && !isAdmin && (
            <div className="events-form">
              <p>You're signed in, but only church admins can post events.</p>
              <Button variant="outline" onClick={() => supabase.auth.signOut()}>Sign out</Button>
            </div>
          )}
          {msg && <p className="events-msg">{msg}</p>}
        </section>
      </main>
    </div>
  );
}
