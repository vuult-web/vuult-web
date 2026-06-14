import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vuult" },
      { name: "description", content: "Custom websites, Shopify, hosting, custom-domain email and iOS apps. Transparent pricing from Vuult." },
      { property: "og:title", content: "Services — Vuult" },
      { property: "og:description", content: "Custom websites, Shopify, hosting, custom-domain email and iOS apps. Transparent pricing from Vuult." },
    ],
  }),
  component: ServicesPage,
});

const detailed = [
  {
    no: "01",
    title: "Custom websites",
    from: "from £950",
    body: "Bespoke marketing sites and brochure sites, hand-coded for speed and SEO. Designed around your brand — no theme that 4,000 other businesses already use.",
    bullets: ["Bespoke design", "Lightning-fast load times", "SEO foundations", "CMS if you need it"],
  },
  {
    no: "02",
    title: "Shopify stores",
    from: "from £1,400",
    body: "Custom Shopify themes and full storefront builds. Product pages that sell, checkouts that convert, and a backend you can actually run yourself.",
    bullets: ["Custom theme dev", "Product & collection design", "App integrations", "Migration from other platforms"],
  },
  {
    no: "03",
    title: "Hosting & domains",
    from: "from £9/mo",
    body: "Fast global hosting with automatic SSL, daily backups and a real human on support. Bring your own domain or we’ll register one for you.",
    bullets: ["Global edge hosting", "Free SSL & backups", "Custom domain setup", "99.9% uptime"],
  },
  {
    no: "04",
    title: "Email hosting",
    from: "from £4/mailbox/mo",
    body: "Professional inboxes on your own domain. Works with Gmail, Outlook, Apple Mail — anywhere. Calendars, contacts and shared aliases included.",
    bullets: ["you@yourbusiness.com", "Calendar & contacts", "Shared aliases", "Spam & virus filtering"],
  },
  {
    no: "05",
    title: "iOS apps",
    from: "Quoted per project",
    body: "Native-feel apps designed and built for iPhone and iPad. We design, develop, submit and maintain — your app, your App Store listing.",
    bullets: ["UI/UX design", "Native iOS build", "App Store submission", "Push notifications & analytics"],
  },
  {
    no: "06",
    title: "Care & maintenance",
    from: "from £45/mo",
    body: "Small monthly retainer for content edits, plugin updates, performance checks and the occasional ‘can you just…’.",
    bullets: ["Monthly edits", "Security updates", "Performance reports", "Priority response"],
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">§ Services</p>
          <h1 className="font-display mt-6 text-balance text-6xl leading-[0.9] lg:text-9xl">
            What we<br /><span className="text-signal">do.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Six things, done properly. Pick one or stack them — we do the whole digital toolkit so you only ever deal with one supplier.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
          <ul className="divide-y divide-border border-y border-border">
            {detailed.map((s) => (
              <li key={s.no} className="group grid gap-8 py-12 md:grid-cols-12 md:py-16">
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-muted-foreground">{s.no}</span>
                </div>
                <div className="md:col-span-5">
                  <h2 className="font-display text-4xl leading-none transition-colors group-hover:text-signal lg:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-signal">{s.from}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-1 h-1.5 w-1.5 bg-signal" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-display text-balance text-5xl leading-[0.95] lg:text-7xl">
                Not sure what you need?<br /><span className="text-muted-foreground">Tell us the goal.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end">
              <Link
                to="/contact"
                className="inline-flex items-center bg-signal px-8 py-5 font-mono text-xs uppercase tracking-[0.2em] text-signal-foreground transition-transform hover:-translate-y-0.5"
              >
                Start a conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
