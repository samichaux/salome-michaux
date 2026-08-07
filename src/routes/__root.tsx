import { useEffect } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import NotFound from "@/pages/NotFound";
import appCss from "../styles.css?url";

const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c04d6e6-5a5e-4320-90b9-965d4682377b/id-preview-096407d5--79c80cf6-5085-4421-a452-6d9712a54261.lovable.app-1771279405104.png";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Salomé Michaux",
  url: "https://salomemichaux.eu",
  jobTitle: "Développeuse No-Code",
  description:
    "Développeuse no-code spécialisée en création de SaaS, web apps et systèmes d'automatisation à Bruxelles.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bruxelles",
    addressCountry: "BE",
  },
  email: "info@salomemichaux.eu",
  telephone: "+32483350333",
  sameAs: ["https://www.linkedin.com/in/salomemichaux/"],
  knowsAbout: ["No-Code", "SaaS", "Web Apps", "Automatisation", "Product Management", "Agents IA"],
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Salomé Michaux — Développeuse No-Code & Automatisation | Bruxelles" },
      {
        name: "description",
        content:
          "Développeuse no-code spécialisée en création de SaaS, web apps et systèmes d'automatisation. Du concept au lancement, sans une ligne de code. Basée à Bruxelles.",
      },
      { name: "author", content: "Salomé Michaux" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://salomemichaux.eu/" },
      { property: "og:title", content: "Salomé Michaux — Développeuse No-Code & Automatisation" },
      {
        property: "og:description",
        content:
          "Développeuse no-code spécialisée en création de SaaS, web apps et systèmes d'automatisation. Du concept au lancement, sans une ligne de code.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "fr_BE" },
      { property: "og:site_name", content: "Salomé Michaux" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Salomé Michaux — Développeuse No-Code & Automatisation" },
      {
        name: "twitter:description",
        content:
          "Développeuse no-code spécialisée en création de SaaS, web apps et systèmes d'automatisation. Du concept au lancement, sans une ligne de code.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://salomemichaux.eu/" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON_LD }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Outlet />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-2 text-2xl font-bold text-foreground">This page didn't load</h1>
        <p className="mb-6 text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-lg bg-primary px-4 py-2 text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-lg border border-border bg-card px-4 py-2 text-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}