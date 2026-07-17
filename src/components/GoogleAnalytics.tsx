"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Inner component that uses useSearchParams – must be wrapped in <Suspense>.
 */
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route change
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const searchParamsString = searchParams?.toString() ?? "";
    const url = pathname + (searchParamsString ? `?${searchParamsString}` : "");

    window.gtag("config", GA_ID as string, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}

/**
 * Google Analytics 4 component using next/script for optimal loading.
 *
 * - Only renders in production when NEXT_PUBLIC_GA_ID is set.
 * - Tracks page views automatically on client-side route changes.
 * - Uses next/script (afterInteractive) — the recommended approach for GA.
 * - Wraps useSearchParams in a Suspense boundary to avoid prerender bailout.
 */
export function GoogleAnalytics() {
  // Do not inject anything in development or when GA ID is missing
  if (process.env.NODE_ENV !== "production" || !GA_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics – Global site tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Track page views on navigation – wrapped in Suspense for useSearchParams */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}

// Extend the Window interface to avoid TS errors on gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string,
      config?: Record<string, string | number | boolean | undefined>
    ) => void;
    dataLayer: unknown[];
  }
}