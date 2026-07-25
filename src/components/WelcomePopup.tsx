import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "vuult_welcome_seen_v1";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzevdgo";

export function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY)) return;
    const t = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  function close() {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.append("_source", "welcome-popup");
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
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div
        className="relative w-full max-w-lg border border-border bg-card p-8 shadow-2xl animate-in zoom-in-95 duration-200 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-4 top-4 p-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "sent" ? (
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Got it</p>
            <h2 className="font-display mt-4 text-4xl leading-none">Thanks — talk soon.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We'll be in touch within one working day to chat about your project.
            </p>
            <button
              onClick={close}
              className="mt-8 inline-flex w-full items-center justify-center bg-signal px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-signal-foreground transition-transform hover:-translate-y-0.5"
            >
              Close →
            </button>
          </div>
        ) : (
          <>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Try before you buy</p>
            <h2 className="font-display mt-4 text-balance text-4xl leading-[0.95] md:text-5xl">
              See the design first.<br />
              <span className="text-signal">Pay only if you love it.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We'll design your site — real layout, real feel — before you spend a penny.
              If it's not for you, walk away. No fee, no pressure.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-3">
              <label htmlFor="popup-email" className="sr-only">Email</label>
              <input
                id="popup-email"
                name="email"
                type="email"
                required
                placeholder="you@business.com"
                className="w-full border border-border bg-background px-4 py-4 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-signal focus:outline-none"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Briefly — what do you want built? (optional)"
                className="w-full resize-none border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-signal focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center bg-signal px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-signal-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Get in touch →"}
              </button>
              {status === "error" && (
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-destructive">
                  {errorMsg}
                </p>
              )}
              <button
                type="button"
                onClick={close}
                className="w-full pt-1 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
              >
                No thanks
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
