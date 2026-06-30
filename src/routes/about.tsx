import { createFileRoute, Link } from "@tanstack/react-router";
import { CountUp } from "@/components/CountUp";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vuult Web" },
      { name: "description", content: "Vuult Web is a small, independent studio building custom websites and apps for small businesses — without the agency markup." },
      { property: "og:title", content: "About — Vuult Web" },
      { property: "og:description", content: "An independent studio for small business. Custom work, fair prices." },
    ],
  }),
  component: AboutPage,
});

const stats: Array<{ k: React.ReactNode; v: string }> = [
  { k: <CountUp end={100} suffix="%" />, v: "Custom builds. Zero templates." },
  { k: <CountUp end={7} suffix=" days" />, v: "Typical website turnaround." },
  { k: "1", v: "Person you actually talk to." },
];


function AboutPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">§ About</p>
          <h1 className="font-display mt-6 text-balance text-6xl leading-[0.9] lg:text-9xl">
            A studio<br />for the<br /><span className="text-signal">small ones.</span>
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Why we exist</p>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="text-foreground">
                Most small businesses get two options when they need a website: a £100 template that looks like everyone else’s, or a £15,000 quote from an agency that treats them like a side-project.
              </p>
              <p>
                We sit in the gap. Vuult Web builds custom, hand-coded websites, Shopify stores and iOS & Android apps — the same quality you’d get from a large agency — at prices that actually make sense for an independent business.
              </p>
              <p>
                One small team. Direct contact with the people doing the work. No farmed-out development, no surprise invoices, no jargon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
          <ul className="grid gap-px bg-border sm:grid-cols-3">
            {stats.map((s) => (
              <li key={s.k} className="bg-background p-10">
                <p className="font-display text-6xl text-signal">{s.k}</p>
                <p className="mt-4 text-sm text-muted-foreground">{s.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bone text-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <h2 className="font-display text-balance text-5xl leading-[0.95] lg:text-7xl">
            Ready when you are.
          </h2>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center bg-ink px-8 py-5 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-transform hover:-translate-y-0.5"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
