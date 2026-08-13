import { useEffect } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { langFromPath } from "@/lib/i18n-routes";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import NotFound from "@/pages/NotFound";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  // Derived from the router pathname (never from `window`) so the server and
  // client render the same `lang` attribute and hydration stays clean.
  const lang = useRouterState({ select: (s) => langFromPath(s.location.pathname) });
  const { queryClient } = Route.useRouteContext();
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider initialLang={lang}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </LanguageProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const lang = useRouterState({ select: (s) => langFromPath(s.location.pathname) });
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider initialLang={lang}>
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