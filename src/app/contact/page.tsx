import { ContactForm } from "@/components/forms/ContactForm";
import { Metadata } from "next";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact Us - Free Consultation | AC Nova Technologies",
  description: "Get in touch with our expert team for a free consultation. Fast response within 24 hours. Based in Mumbai, serving clients across India. Call +91 93245 96187 or WhatsApp.",
  keywords: [
    "contact web developer",
    "free consultation",
    "software company India",
    "AC Nova contact",
    "website consultation",
    "custom software inquiry",
  ],
  openGraph: {
    title: "Contact Us - Free Consultation | AC Nova Technologies",
    description: "Get in touch with our expert team for a free consultation. Fast response within 24 hours. Based in Mumbai, serving clients across India. Call +91 93245 96187 or WhatsApp.",
    url: `${siteConfig.url}/contact`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact AC Nova Technologies" }],
  },
  twitter: {
    title: "Contact Us - Free Consultation | AC Nova Technologies",
    description: "Get in touch with our expert team for a free consultation. Fast response within 24 hours. Based in Mumbai, serving clients across India. Call +91 93245 96187 or WhatsApp.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help you grow.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="space-y-6">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 transition-colors">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 transition-colors">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-green-600 transition-colors">
                        Chat with us directly
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Address
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {siteConfig.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}