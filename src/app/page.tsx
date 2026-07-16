import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import dynamic from "next/dynamic";
import { stats, services, industries, projects, pricingPlans, testimonials, faqs } from "@/data/services";

// Dynamic imports for below-fold sections to improve initial load time
const Stats = dynamic(() => import("@/components/sections/Stats").then((mod) => mod.Stats), {
  loading: () => <div className="h-64 bg-gray-50 dark:bg-gray-800/50 animate-pulse" />,
});
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs").then((mod) => mod.WhyChooseUs), {
  loading: () => <div className="h-96 bg-white dark:bg-gray-900 animate-pulse" />,
});
const Services = dynamic(() => import("@/components/sections/Services").then((mod) => mod.Services), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-800/50 animate-pulse" />,
});
const Industries = dynamic(() => import("@/components/sections/Industries").then((mod) => mod.Industries), {
  loading: () => <div className="h-96 bg-white dark:bg-gray-900 animate-pulse" />,
});
const Process = dynamic(() => import("@/components/sections/Process").then((mod) => mod.Process), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-800/50 animate-pulse" />,
});
const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then((mod) => mod.Portfolio), {
  loading: () => <div className="h-96 bg-white dark:bg-gray-900 animate-pulse" />,
});
const Pricing = dynamic(() => import("@/components/sections/Pricing").then((mod) => mod.Pricing), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-800/50 animate-pulse" />,
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials), {
  loading: () => <div className="h-96 bg-white dark:bg-gray-900 animate-pulse" />,
});
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((mod) => mod.FAQ), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-800/50 animate-pulse" />,
});
const ContactCTA = dynamic(() => import("@/components/sections/ContactCTA").then((mod) => mod.ContactCTA), {
  loading: () => <div className="h-64 bg-gradient-to-br from-primary-600 to-accent-purple animate-pulse" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBadges />
      <Stats stats={stats} />
      <WhyChooseUs />
      <Services services={services} />
      <Industries industries={industries} />
      <Process />
      <Portfolio projects={projects} />
      <Pricing plans={pricingPlans} />
      <Testimonials testimonials={testimonials} />
      <FAQ faqs={faqs} />
      <ContactCTA />
    </main>
  );
}