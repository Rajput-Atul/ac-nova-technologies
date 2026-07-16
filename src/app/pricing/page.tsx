import { Pricing } from "@/components/sections/Pricing";
import { pricingPlans } from "@/data/services";
import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Transparent Pricing Plans | Website & Software Development | AC Nova Technologies",
  description: "Affordable website development pricing starting from ₹14,999. Compare our Starter, Business, and Enterprise plans. Flexible payment options available.",
  keywords: [
    "website development pricing",
    "web design cost",
    "e-commerce pricing",
    "software development cost",
    "affordable web design India",
    "website plans",
    "digital solution pricing",
  ],
  openGraph: {
    title: "Transparent Pricing Plans | Website & Software Development | AC Nova Technologies",
    description: "Affordable website development pricing starting from ₹14,999. Compare our Starter, Business, and Enterprise plans. Flexible payment options available.",
    url: `${siteConfig.url}/pricing`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AC Nova Technologies Pricing Plans" }],
  },
  twitter: {
    title: "Transparent Pricing Plans | Website & Software Development | AC Nova Technologies",
    description: "Affordable website development pricing starting from ₹14,999. Compare our Starter, Business, and Enterprise plans. Flexible payment options available.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your business and budget.
          </p>
        </div>
      </section>

      <Pricing plans={pricingPlans} />
    </main>
  );
}