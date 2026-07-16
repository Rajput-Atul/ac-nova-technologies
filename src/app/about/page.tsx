import { Metadata } from "next";
import { TeamMembers } from "@/components/sections/TeamMembers";
import { AboutValues } from "@/components/sections/AboutValues";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About Us - Premium Software Agency | AC Nova Technologies",
  description: "AC Nova Technologies is a premium software agency in Mumbai helping businesses grow with modern websites, e-commerce, custom software, and mobile apps. Client-first, results-driven.",
  keywords: [
    "about AC Nova Technologies",
    "software agency Mumbai",
    "web development company India",
    "custom software company",
    "our team",
    "why choose us",
    "company profile",
  ],
  openGraph: {
    title: "About AC Nova Technologies - Premium Software Agency",
    description: "A premium software agency dedicated to helping businesses grow with modern technology. We transform ideas into powerful digital solutions.",
    url: `${siteConfig.url}/about`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About AC Nova Technologies" }],
  },
  twitter: {
    title: "About AC Nova Technologies - Premium Software Agency",
    description: "A premium software agency dedicated to helping businesses grow with modern technology. We transform ideas into powerful digital solutions.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            We Are <span className="gradient-text">AC Nova Technologies</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A premium software agency dedicated to helping businesses grow with modern technology. We transform ideas into powerful digital solutions.
          </p>
        </div>
      </section>

      <AboutValues />

      <TeamMembers />

      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Work With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join our family of satisfied clients. Let's build something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-xl font-medium hover:bg-gray-100 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}