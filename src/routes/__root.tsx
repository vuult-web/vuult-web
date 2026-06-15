import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import logoAsset from "@/assets/vuult-logo-white.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Error 404</p>
        <h1 className="font-display mt-4 text-7xl text-foreground">Not found.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This page doesn’t exist — or never did.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-signal px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-signal-foreground transition-transform hover:-translate-y-0.5"
          >
            Back home →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Something broke</p>
        <h1 className="font-display mt-4 text-5xl text-foreground">Try again.</h1>
        <p className="mt-3 text-sm text-muted-foreground">A small gremlin. Not your fault.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground"
          >
            Retry
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground hover:bg-secondary"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vuult — Custom websites & apps for small business" },
      { name: "description", content: "Vuult builds bespoke websites, Shopify stores, hosting, email and iOS apps for small businesses — at honest, competitive prices." },
      { name: "author", content: "Vuult" },
      { property: "og:title", content: "Vuult — Custom websites & apps for small business" },
      { property: "og:description", content: "Vuult builds bespoke websites, Shopify stores, hosting, email and iOS apps for small businesses — at honest, competitive prices." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vuult — Custom websites & apps for small business" },
      { name: "twitter:description", content: "Vuult builds bespoke websites, Shopify stores, hosting, email and iOS apps for small businesses — at honest, competitive prices." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1aa0f8bc-7182-4496-bca6-ab90206eac0f/id-preview-4861c26c--3596010c-b799-4b33-8401-da0e903eada0.lovable.app-1781465481800.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1aa0f8bc-7182-4496-bca6-ab90206eac0f/id-preview-4861c26c--3596010c-b799-4b33-8401-da0e903eada0.lovable.app-1781465481800.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="Vuult home">
          <img src={logoAsset.url} alt="Vuult" className="h-5 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "font-mono text-xs uppercase tracking-[0.2em] text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden bg-signal px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-signal-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Start a project →
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logoAsset.url} alt="Vuult" className="h-6 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We build custom websites, Shopify stores and iOS apps for small businesses — without the agency markup.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-signal">About</Link></li>
              <li><Link to="/services" className="hover:text-signal">Services</Link></li>
              <li><Link to="/contact" className="hover:text-signal">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in touch</p>
            <a href="mailto:hello@vuultweb.com" className="mt-4 block font-display text-2xl hover:text-signal">hello@vuultweb.com</a>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Vuult. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.2em]">Designed & built in-house.</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
