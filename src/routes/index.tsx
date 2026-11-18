import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, BookOpen, Clock3, Globe2, HeartHandshake, MapPin, Navigation } from "lucide-react";

import { Button } from "@/components/ui/button";
import worshipGathering from "@/assets/worship-gathering.jpg";
import pastorsPortrait from "@/assets/pastors-vincent.jpg.asset.json";

const scriptures = [
  { reference: "Obadiah 1:17", theme: "Deliverance, holiness & restoration" },
  { reference: "Isaiah 42:22", theme: "Freedom for those in captivity" },
  { reference: "Matthew 28:19–20", theme: "Making disciples of all nations" },
  { reference: "Acts 1:8", theme: "Spirit-empowered witnesses" },
  { reference: "Hebrews 12:14", theme: "Pursuing holiness" },
  { reference: "Habakkuk 2:14", theme: "The glory of the Lord filling the earth" },
];

export const visitorDetails = {
  serviceTime: "Sundays, 7:00 a.m.–1:00 p.m.",
  location: "Blue Ribbon, between Kiganjo Corner and Makongeni Kamenu",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glorious Gospel Miracle Centre | Home of True Worship" },
      {
        name: "description",
        content:
          "Glorious Gospel Miracle Centre is rooted in the Word, established in holiness, and empowered by the Holy Spirit to proclaim the Gospel and see lives restored.",
      },
      { property: "og:title", content: "Glorious Gospel Miracle Centre" },
      {
        property: "og:description",
        content: "Rooted in the Word. Established in Holiness. Empowered by the Holy Spirit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="church-site">
      <header className="site-header">
        <Link className="brand-lockup" to="/" aria-label="Glorious Gospel Miracle Centre home">
          <span className="brand-monogram">G.G.M.C.</span>
          <span className="brand-caption">Home of True Worship</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#vision">Vision</a>
          <a href="#mission">Mission</a>
          <a href="#history">Our story</a>
          <a href="#pastors">Pastors</a>
          <a href="#visit">Visit</a>
          <a href="#scripture">Scripture</a>
        </nav>
      </header>

      <main>
        <section className="home-hero" aria-labelledby="welcome-heading">
          <img
            className="hero-photo"
            src={worshipGathering}
            alt="A congregation gathered in worship beneath a cross"
            width={1600}
            height={1056}
            fetchPriority="high"
          />
          <div className="hero-scrim" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Glorious Gospel Miracle Centre</p>
            <h1 id="welcome-heading">Rooted in the Word.<br />Sent to the nations.</h1>
            <p className="hero-intro">
              A home for true worship, where lives encounter the transforming power of Jesus
              Christ.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg" className="hero-button">
                <a href="#vision">
                  Discover our heart <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <a className="hero-text-link" href="#scripture">
                Explore our foundation
              </a>
            </div>
          </div>
          <a className="scroll-cue" href="#vision" aria-label="Scroll to our vision">
            <ArrowDown aria-hidden="true" />
          </a>
          <span className="hero-index" aria-hidden="true">01 / 04</span>
        </section>

        <section className="mandate-section" id="vision" aria-labelledby="mandate-heading">
          <div className="ambient-background" aria-hidden="true">
            <img src={worshipGathering} alt="" />
          </div>
          <div className="section-heading">
            <p className="eyebrow">Our heart &amp; calling</p>
            <h2 id="mandate-heading">A ministry with a mandate.</h2>
            <p>
              We exist to establish God’s Word, see lives restored, and carry the Gospel of Jesus
              Christ wherever He sends us.
            </p>
          </div>

          <div className="mandate-grid">
            <article className="mandate-card vision-card">
              <div className="card-topline">
                <span className="card-number">01</span>
                <span className="card-kicker">The vision</span>
              </div>
              <h3>For lives to be restored—and the Gospel to reach the nations.</h3>
              <p>
                To be a divinely established global ministry, rooted in God’s Word and established
                in holiness. A ministry through which His power is manifested, lives are delivered
                and restored, and the Gospel transforms individuals, communities, nations, and
                continents for His glory.
              </p>
              <Globe2 className="card-watermark" aria-hidden="true" />
            </article>

            <article className="mandate-card motto-card">
              <div className="motto-mark" aria-hidden="true">“</div>
              <p className="card-kicker">Our ministry motto</p>
              <h3>Rooted in the Word.<br />Established in Holiness.<br />Empowered by the Holy Spirit.<br />Sent to the Nations.</h3>
              <span className="motto-rule" />
            </article>

            <article className="mandate-card mission-card" id="mission">
              <div className="card-topline">
                <span className="card-number">02</span>
                <span className="card-kicker">The mission</span>
              </div>
              <h3>Proclaim truth. Cultivate worship. Demonstrate His power.</h3>
              <p>
                We preach the uncompromised Word of God and cultivate a life of prayer, true worship,
                and holiness. Through the Gospel and the power of the Holy Spirit, we proclaim
                liberty, minister deliverance and restoration, raise believers to spiritual
                maturity, and carry this mandate wherever God sends us.
              </p>
              <div className="mission-signature">
                <HeartHandshake aria-hidden="true" />
                <span>For individuals, families, communities &amp; nations</span>
              </div>
            </article>

            <article className="mandate-card declaration-card">
              <div className="card-topline">
                <span className="card-number">03</span>
                <span className="card-kicker">Our declaration</span>
              </div>
              <h3>An altar of true worship. An instrument of His power.</h3>
              <p>
                We are committed to proclaiming Jesus Christ faithfully, walking in holiness, and
                ministering in the power of the Holy Spirit. Our desire is to see every life
                encounter God’s truth, experience His transforming work, and fulfil His purpose.
              </p>
              <p className="declaration-close">All for the glory of Jesus Christ.</p>
            </article>
          </div>
        </section>

        <section className="history-section" id="history" aria-labelledby="history-heading">
          <div className="history-inner">
            <div className="history-copy">
              <p className="eyebrow">Our story</p>
              <h2 id="history-heading">Rooted in the Word. Called to restore lives.</h2>
              <p>
                Glorious Gospel Miracle Centre is a home for true worship, rooted in God’s Word and
                established in holiness. Its calling is to proclaim the Gospel, cultivate prayer and
                worship, and serve through the power of the Holy Spirit.
              </p>
              <p>
                The church’s vision reaches beyond its congregation: to see lives delivered and
                restored, communities transformed, and the Gospel carried to nations for the glory
                of Jesus Christ.
              </p>
            </div>
            <div className="history-foundation" aria-label="The church’s faith and calling">
              <article className="history-point">
                <span className="history-number">01</span>
                <div>
                  <h3>The foundation</h3>
                  <p>God’s Word, holiness, prayer, and true worship.</p>
                </div>
              </article>
              <article className="history-point">
                <span className="history-number">02</span>
                <div>
                  <h3>The calling</h3>
                  <p>Proclaim the Gospel and minister deliverance and restoration.</p>
                </div>
              </article>
              <article className="history-point">
                <span className="history-number">03</span>
                <div>
                  <h3>The hope</h3>
                  <p>Lives and nations transformed for the glory of Jesus Christ.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="pastors-section" id="pastors" aria-labelledby="pastors-heading">
          <div className="pastors-portrait-wrap">
            <img
              className="pastors-portrait"
              src={pastorsPortrait.url}
              alt="Rev. Vincent Lukalia and Pastor Mercy Vincent"
              width={1366}
              height={1024}
              loading="lazy"
            />
          </div>
          <div className="pastors-content">
            <p className="eyebrow">Our pastors</p>
            <h2 id="pastors-heading">Meet the pastors</h2>
            <p className="pastors-intro">
              Serving the Glorious Gospel Miracle Centre and its congregation.
            </p>
            <div className="pastor-names">
              <div>
                <span className="pastor-role">Host Pastor</span>
                <h3>Rev. Vincent Lukalia</h3>
                <p className="pastor-bio">
                  Serves Glorious Gospel Miracle Centre as its Host Pastor and ministers to the
                  congregation.
                </p>
              </div>
              <div>
                <span className="pastor-role">Pastor</span>
                <h3>Mercy Vincent</h3>
                <p className="pastor-bio">
                  Serves as a Pastor at Glorious Gospel Miracle Centre, serving the church and its
                  congregation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="visit-section" id="visit" aria-labelledby="visit-heading">
          <div className="visit-inner">
            <div className="visit-heading">
              <p className="eyebrow">Plan your visit</p>
              <h2 id="visit-heading">We’d love to welcome you.</h2>
            </div>
            <div className="visit-details">
              <article className="visit-detail">
                <Clock3 aria-hidden="true" />
                <div>
                  <h3>Sunday service</h3>
                  <p>{visitorDetails.serviceTime}</p>
                </div>
              </article>
              <article className="visit-detail">
                <MapPin aria-hidden="true" />
                <div>
                  <h3>Where to find us</h3>
                  <p>{visitorDetails.location}</p>
                </div>
              </article>
              <a
                className="directions-link"
                href="https://www.google.com/maps/dir/?api=1&destination=Blue%20Ribbon%2C%20between%20Kiganjo%20Corner%20and%20Makongeni%20Kamenu"
                target="_blank"
                rel="noreferrer"
              >
                <Navigation aria-hidden="true" />
                Get directions
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="scripture-section" id="scripture" aria-labelledby="scripture-heading">
          <div className="ambient-background" aria-hidden="true">
            <img src={worshipGathering} alt="" />
          </div>
          <div className="scripture-intro">
            <div className="scripture-icon"><BookOpen aria-hidden="true" /></div>
            <p className="eyebrow">Our scriptural foundation</p>
            <h2 id="scripture-heading">Built on the Word.</h2>
            <p>These scriptures shape our calling, our character, and the hope we carry.</p>
          </div>
          <ol className="scripture-list">
            {scriptures.map((scripture, index) => (
              <li key={scripture.reference}>
                <span className="scripture-number">0{index + 1}</span>
                <div>
                  <h3>{scripture.reference}</h3>
                  <p>{scripture.theme}</p>
                </div>
                <ArrowUpRight className="scripture-arrow" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>

        <section className="closing-section" aria-labelledby="closing-heading">
          <div className="ambient-background" aria-hidden="true">
            <img src={worshipGathering} alt="" />
          </div>
          <p className="eyebrow">Glorious Gospel Miracle Centre · G.G.M.C.</p>
          <h2 id="closing-heading">The earth will be filled with the knowledge of the glory of the Lord.</h2>
          <p className="closing-reference">Habakkuk 2:14</p>
          <Button asChild variant="outline" size="lg" className="closing-button">
            <a href="#welcome-heading">
              Back to the beginning <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </section>
      </main>

      <footer className="site-footer">
        <Link className="footer-brand" to="/">G.G.M.C.</Link>
        <p>Rooted in the Word. Established in Holiness.</p>
        <a href="#welcome-heading">Home <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </div>
  );
}