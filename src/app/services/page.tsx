import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { services } from "@/data/services";
import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Software Development & Web Design Services | AC Nova Technologies",
  description: "Professional website development, e-commerce solutions, custom software, and mobile app development. Starting from ₹14,999. Get your free consultation today.",
  keywords: [
    "web development services",
    "e-commerce development",
    "custom software development",
    "mobile app development",
    "website design",
    "business automation",
    "digital transformation",
    "IT services India",
  ],
  openGraph: {
    title: "Software Development & Web Design Services | AC Nova Technologies",
    description: "Professional website development, e-commerce solutions, custom software, and mobile app development. Starting from ₹14,999. Get your free consultation today.",
    url: `${siteConfig.url}/services`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AC Nova Technologies Services" }],
  },
  twitter: {
    title: "Software Development & Web Design Services | AC Nova Technologies",
    description: "Professional website development, e-commerce solutions, custom software, and mobile app development. Starting from ₹14,999. Get your free consultation today.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Everything Your Business <span className="gradient-text">Needs</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From stunning websites to powerful business software, we provide complete digital solutions tailored to your unique business requirements.
          </p>
        </div>
      </section>

      <Services services={services} />
      <WhyChooseUs />
      <ContactCTA />
    </main>
  );
}