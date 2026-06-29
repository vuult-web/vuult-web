import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vuult Web" },
      { name: "description", content: "Tell us about your project. Custom websites, Shopify, hosting, email and iOS & Android apps from Vuult Web." },
      { property: "og:title", content: "Contact — Vuult Web" },
      { property: "og:description", content: "Tell us about your project. We reply within 1 business day." },
    ],
  }),
  component: ContactPage,
});

const services = ["Custom website", "Shopify store", "Hosting & domains", "Email hosting", "iOS app", "Android app", "Something else"];
const budgets = ["Under £1k", "£1k – £3k", "£3k – £7k", "£7k+", "Not sure yet"];

const CONTACT_EMAIL = "hello@vuultweb.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqevljlb";

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again or email us directly.");
      setStatus("error");
    }
  }


  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">§ Contact</p>
            <h1 className="font-display mt-6 text-balance text-6xl leading-[0.9] lg:text-8xl">
              Tell us about<br /><span className="text-signal">the project.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              The more you can share — what your business does, what you’re hoping for, when you need it — the better the first reply we can write you. We typically respond within one working day.
            </p>
            <div className="mt-10 space-y-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <p>
                <span className="text-foreground">Email</span> &nbsp;
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-signal">{CONTACT_EMAIL}</a>
              </p>
              <p><span className="text-foreground">Hours</span> &nbsp; Mon – Fri, 9–6 GMT</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {status === "sent" ? (
              <div className="border border-border bg-card p-10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Message sent</p>
                <h2 className="font-display mt-4 text-4xl">Thanks — we’ll be in touch.</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Your message is on its way to {CONTACT_EMAIL}. We typically reply within one working day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 inline-flex border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] hover:bg-secondary"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-px bg-border">
                <Field label="Name" name="name" required placeholder="Your name" />
                <Field label="Email" name="email" type="email" required placeholder="you@business.com" />
                <Field label="Business" name="business" placeholder="What's it called?" />

                <SelectField label="Service" name="service" options={services} />
                <SelectField label="Budget" name="budget" options={budgets} />

                <div className="bg-background p-6">
                  <label className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="message">
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="What are you trying to build? When do you need it? Any links to things you like?"
                    className="mt-3 w-full resize-none bg-transparent text-lg text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                  />
                </div>

                <div className="bg-background p-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center bg-signal px-8 py-5 font-mono text-xs uppercase tracking-[0.2em] text-signal-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send message →"}
                  </button>
                  {status === "error" && (
                    <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-destructive">
                      {errorMsg}
                    </p>
                  )}
                  <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    We reply within one working day
                  </p>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="bg-background p-6">
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}{required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent text-lg text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="bg-background p-6">
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-3 w-full bg-transparent text-lg text-foreground focus:outline-none"
      >
        <option value="" className="bg-background">Select one</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">{o}</option>
        ))}
      </select>
    </div>
  );
}
