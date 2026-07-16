import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | AC Nova Technologies",
  description: "Thank you for contacting AC Nova Technologies. We appreciate your inquiry and will get back to you within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Thank <span className="gradient-text">You!</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We've received your message and will get back to you within 24 hours.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What happens next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Review</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Our team will review your requirements within a few hours.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Contact</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">We'll reach out to you within 24 hours to discuss your project.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Proposal</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Get a detailed proposal with timeline and pricing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all hover:shadow-button hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER || "9876543210"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}