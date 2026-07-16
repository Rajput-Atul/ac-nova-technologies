import { FAQ } from "@/components/sections/FAQ";
import { faqs } from "@/data/services";
import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "FAQs - Web Development, Pricing & Support | AC Nova Technologies",
  description: "Common questions answered about website development, e-commerce, custom software, hosting, maintenance, and support. Learn about our process and timelines.",
  keywords: [
    "website development FAQ",
    "web design questions",
    "e-commerce FAQs",
    "software development questions",
    "hosting and support",
    "website maintenance FAQ",
  ],
  openGraph: {
    title: "FAQs - Web Development, Pricing & Support | AC Nova Technologies",
    description: "Common questions answered about website development, e-commerce, custom software, hosting, maintenance, and support. Learn about our process and timelines.",
    url: `${siteConfig.url}/faq`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AC Nova Technologies FAQ" }],
  },
  twitter: {
    title: "FAQs - Web Development, Pricing & Support | AC Nova Technologies",
    description: "Common questions answered about website development, e-commerce, custom software, hosting, maintenance, and support. Learn about our process and timelines.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently <span className="gradient-text">Asked Questions</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about working with us. Can't find an answer? Contact us directly.
          </p>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Can't find what you're looking for? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all hover:shadow-button hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}