import { useEffect, useState } from "react";

const COOKIE_KEY = "vuult_cookies_ack_v1";
const WELCOME_KEY = "vuult_welcome_seen_v1";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let interval: number | undefined;
    const check = () => {
      if (window.localStorage.getItem(COOKIE_KEY)) return false;
      if (!window.localStorage.getItem(WELCOME_KEY)) return true; // wait
      setOpen(true);
      return false;
    };
    const shouldWait = check();
    if (shouldWait) {
      interval = window.setInterval(() => {
        if (!check()) window.clearInterval(interval);
      }, 500);
    }
    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, []);

  function accept() {
    try {
      window.localStorage.setItem(COOKIE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  function decline() {
    try {
      window.localStorage.setItem(COOKIE_KEY, "declined");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-border bg-card/95 backdrop-blur animate-in slide-in-from-bottom duration-300"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="text-sm leading-relaxed text-muted-foreground md:max-w-2xl">
          We use cookies to keep the site running smoothly and to understand how it's used.
          No creepy tracking — just the basics.
        </p>
        <div className="flex flex-shrink-0 gap-2">
          <button
            type="button"
            onClick={decline}
            className="border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="bg-signal px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-foreground transition-transform hover:-translate-y-0.5"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
