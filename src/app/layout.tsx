import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site-config";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AC Nova Technologies | Premium Software Agency",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "AC Nova Technologies is a premium software agency helping small businesses, startups, and growing companies in India with websites, e-commerce, custom software, and mobile apps that drive real growth.",
  keywords: [
    "software agency India",
    "web development",
    "e-commerce development",
    "custom software",
    "mobile app development",
    "business automation",
    "website design",
    "React development",
    "Next.js development",
    "small business websites",
    "startup development",
    "digital transformation",
    "IT services India",
    "software company Mumbai",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} | Premium Software Agency`,
    description:
      "Premium websites, e-commerce stores, custom software, and mobile apps designed to attract more customers, increase sales, and save you time.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Software Agency`,
    description:
      "Premium websites, e-commerce stores, custom software, and mobile apps designed to attract more customers, increase sales, and save you time.",
    images: ["/og-image.jpg"],
    creator: "@acnovatech",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
  // App links removed - not required for website metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YOUR_GA_ID');
            `,
          }}
        ></script>
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#4f46e5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <JsonLd />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}