DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;
REVOKE ALL ON public.leads FROM anon, authenticated;
CREATE POLICY "Deny all access to anon and authenticated" ON public.leads AS RESTRICTIVE FOR ALL TO anon, authenticated USING (false) WITH CHECK (false);