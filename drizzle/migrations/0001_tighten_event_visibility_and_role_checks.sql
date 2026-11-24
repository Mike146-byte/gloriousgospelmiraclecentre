CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT COALESCE(auth.uid() = _user_id, false)
    AND EXISTS (
      SELECT 1
      FROM public.user_roles
      WHERE user_id = auth.uid()
        AND role = _role
    );
$$;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
DROP POLICY "Anyone views events" ON public.events;
CREATE POLICY "Visitors view current events" ON public.events
FOR SELECT TO anon, authenticated
USING (starts_at >= now() - interval '1 day');
CREATE POLICY "Admins view all events" ON public.events
FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));