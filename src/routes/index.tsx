import { createFileRoute, Link } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vuult Web — Custom websites & apps for small business" },
      { name: "description", content: "Bespoke web design, Shopify, hosting, email, and iOS apps — at honest prices. Vuult Web is the small-business studio." },
      { property: "og:title", content: "Vuult Web — Custom websites & apps for small business" },
      { property: "og:description", content: "Bespoke web design, Shopify, hosting, email, and iOS apps — at honest prices." },
    ],
  }),
  component: Index,
});

const services = [
  {
    no: "01",
    title: "Custom websites",
    body: "Hand-built marketing and brochure sites, coded from scratch around your brand — never a stretched theme. We obsess over load times, Core Web Vitals and clean semantic markup, so Google likes you and so do your customers. Bring us a Figma file or a napkin sketch; we handle the rest, from copy polish to launch.",
    points: ["Bespoke design & build", "SEO foundations baked in", "Editable CMS if you need one", "Analytics & consent set up"],
  },
  {
    no: "02",
    title: "Shopify stores",
    body: "Custom Shopify themes and full storefronts engineered for independent brands that are ready to sell properly. Product pages that convert, checkouts that don't leak, and a backend you can actually run yourself without ringing a developer every Tuesday. Migrations from Wix, Squarespace or WooCommerce welcome.",
    points: ["Custom theme development", "Product & collection design", "App & payment integrations", "Platform migrations"],
  },
  {
    no: "03",
    title: "Hosting & domains",
    body: "Reliable hosting on a fast global edge network — your site served from the closest data centre to each visitor. Free SSL, daily backups, staging environments and a proper status page. We'll register your domain or move an existing one over without downtime, and configure the DNS so you never have to look at it.",
    points: ["Global edge hosting", "Free SSL & daily backups", "Domain registration & transfer", "99.9% uptime, real support"],
  },
  {
    no: "04",
    title: "Email hosting",
    body: "Professional mailboxes on your own domain — you@yourbusiness.com instead of yourbusiness.gmail@gmail.com. Works with Apple Mail, Outlook, Gmail and any phone. Includes shared aliases (hello@, sales@, accounts@), calendar and contacts sync, and generous storage. One mailbox is free with any care plan.",
    points: ["Custom-domain mailboxes", "Calendar & contacts sync", "Shared aliases & forwarding", "1 mailbox free with care plans"],
  },
  {
    no: "05",
    title: "iOS & Android apps",
    body: "Native-feel apps for iPhone, iPad and Android — designed, built, submitted and maintained. We handle the Apple App Store and Google Play listings, screenshots, review process and updates, all under your developer account so you own everything. Push notifications, in-app purchases and analytics included as standard.",
    points: ["UI/UX design & prototyping", "Native iOS & Android builds", "App Store & Google Play submission", "Push notifications & analytics"],
  },
  {
    no: "06",
    title: "Ongoing care",
    body: "A small monthly retainer that keeps everything humming — content edits, plugin and framework updates, security patches, performance tuning and a proper monthly report. Also covers the inevitable 'can you just change this one thing' requests without a new invoice landing in your inbox each time.",
    points: ["Monthly content edits", "Security & framework updates", "Performance reports", "1 free mailbox included"],
  },
];

const principles = [
  { k: "Fair", v: "Transparent quotes. No surprise invoices. Ever." },
  { k: "Fast", v: "Most projects ship within 7 days, not 7 months." },
  { k: "Owned", v: "You own the code, the content, and the domain. Always." },
  { k: "Human", v: "You talk to the person building it. No account-manager telephone game." },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden />
        <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-20 lg:px-10 lg:pt-32 lg:pb-28">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-signal" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Studio for small business / Est. independent
            </p>
          </div>
          <h1 className="font-display mt-10 text-balance text-[14vw] leading-[0.85] sm:text-[12vw] lg:text-[10.5rem]">
            Big-brand<br />
            <span className="text-muted-foreground">websites,</span><br />
            small-shop<br />
            <span className="text-signal">prices.</span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <p className="md:col-span-6 md:col-start-1 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Vuult Web is a tiny studio designing custom websites, Shopify stores and iOS & Android apps for independent businesses. No templates, no agency markup — just a website that actually looks like you.
            </p>
            <div className="md:col-span-5 md:col-start-8 flex flex-wrap items-end gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-signal px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-signal-foreground transition-transform hover:-translate-y-0.5"
              >
                Start a project →
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border border-border px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground hover:bg-secondary"
              >
                What we do
              </Link>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-t border-border bg-card">
          <div className="overflow-hidden py-5">
            <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-3xl">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center gap-12">
                  {["Websites", "Shopify", "Hosting", "Email", "iOS Apps", "Android Apps", "Domains", "Maintenance"].map((w) => (
                    <span key={w + i} className="flex items-center gap-12">
                      <span>{w}</span>
                      <span className="text-signal">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">§ 01 — Capabilities</p>
              <h2 className="font-display mt-4 text-5xl lg:text-6xl">Everything you need.<br /><span className="text-muted-foreground">Nothing you don’t.</span></h2>
            </div>
            <Link to="/services" className="font-mono text-xs uppercase tracking-[0.2em] text-signal hover:underline">
              See full services →
            </Link>
          </div>

          <Accordion.Root type="single" collapsible className="mt-16 border-t border-border">
            {services.map((s) => (
              <Accordion.Item key={s.no} value={s.no} className="border-b border-border">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-6 px-2 py-8 text-left transition-colors hover:bg-card data-[state=open]:bg-card">
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-base text-muted-foreground">{s.no}</span>
                      <h3 className="font-display text-3xl group-hover:text-signal group-data-[state=open]:text-signal lg:text-4xl">
                        {s.title}
                      </h3>
                    </div>
                    <Plus className="h-5 w-5 shrink-0 text-signal transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden bg-card data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="grid gap-6 px-2 pb-10 md:grid-cols-12">
                    <div className="md:col-span-2" />
                    <div className="md:col-span-10 max-w-3xl">
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                      <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">§ 02 — How we work</p>
              <h2 className="font-display mt-4 text-5xl lg:text-6xl">Four rules.<br />No exceptions.</h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                We started Vuult Web because small businesses were being quoted £15k for a brochure site. That’s daft. We do the same quality work for a fraction of the cost, and we tell you the price before we start.
              </p>
            </div>
            <ul className="md:col-span-7 md:col-start-6 grid gap-px bg-border sm:grid-cols-2">
              {principles.map((p) => (
                <li key={p.k} className="bg-background p-8">
                  <p className="font-display text-2xl text-signal">{p.k}.</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FREE DESIGN */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">§ 03 — No-risk offer</p>
              <h2 className="font-display mt-4 text-5xl lg:text-6xl">
                Free design.<br /><span className="text-signal">Pay if you like it.</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Tell us about your business and we'll design your website — properly, with placeholder copy and a real working prototype — before you pay a penny. If you love it, we launch it. If you don't, you walk away. No deposit, no contract, no awkward chase-up.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {["No deposit up front", "Real working prototype", "Zero obligation to buy", "Only pay once you love it"].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center bg-signal px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-signal-foreground transition-transform hover:-translate-y-0.5"
              >
                Claim your free design →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-bone text-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">§ 04 — Next move</p>
          <h2 className="font-display mt-6 text-balance text-6xl leading-[0.9] lg:text-8xl">
            Got a business?<br />Let’s give it a website<br />it deserves.
          </h2>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center bg-ink px-8 py-5 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-all hover:-translate-y-0.5 hover:bg-signal hover:text-signal-foreground"
            >
              Tell us about it →
            </Link>
            <a href="mailto:hello@vuultweb.com" className="font-mono text-xs uppercase tracking-[0.2em] underline-offset-4 hover:underline">
              or hello@vuultweb.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
