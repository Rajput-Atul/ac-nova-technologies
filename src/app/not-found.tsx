import { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Home, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "404 - Page Not Found | AC Nova Technologies",
  description: "The page you're looking for doesn't exist. Let us help you find what you need.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-20 h-20 text-amber-500 mx-auto mb-6" />
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">404</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Oops! The page you're looking for seems to have wandered off. Let's get you back on track.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Here's what you can do:
            </h3>
            <div className="space-y-4 text-left">
              <Link
                href="/"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Home className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Go to Homepage</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Start fresh from our homepage</p>
                </div>
              </Link>
              
              <Link
                href="/services"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Contact Us</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Get in touch - we're here to help</p>
                </div>
              </Link>

              <Link
                href="/portfolio"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">View Our Work</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Check out our portfolio</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all hover:shadow-button hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <a
              href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}