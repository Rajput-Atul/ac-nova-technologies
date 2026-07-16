import { Portfolio } from "@/components/sections/Portfolio";
import { projects } from "@/data/services";
import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Project Portfolio - Successful Web & Software Projects | AC Nova Technologies",
  description: "View our award-winning portfolio of web development, e-commerce, and software projects. Real results from real clients in healthcare, retail, hospitality, and more.",
  keywords: [
    "web development portfolio",
    "successful projects",
    "e-commerce case studies",
    "software development examples",
    "restaurant website examples",
    "healthcare software solutions",
    "project showcase",
  ],
  openGraph: {
    title: "Project Portfolio - Successful Web & Software Projects | AC Nova Technologies",
    description: "View our award-winning portfolio of web development, e-commerce, and software projects. Real results from real clients in healthcare, retail, hospitality, and more.",
    url: `${siteConfig.url}/portfolio`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AC Nova Technologies Portfolio" }],
  },
  twitter: {
    title: "Project Portfolio - Successful Web & Software Projects | AC Nova Technologies",
    description: "View our award-winning portfolio of web development, e-commerce, and software projects. Real results from real clients in healthcare, retail, hospitality, and more.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real projects, real results. Discover how we've transformed businesses across India with technology.
          </p>
        </div>
      </section>

      <Portfolio projects={projects} />
    </main>
  );
}