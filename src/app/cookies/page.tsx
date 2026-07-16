import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | AC Nova Technologies",
  description: "Learn about how AC Nova Technologies uses cookies and similar technologies to improve your browsing experience.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Cookies <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: July 2024
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              We use cookies to improve your experience on our website, understand how you use our site, and personalize content and advertisements. We may also use cookies to analyze traffic and user behavior.
            </p>

            <h2>Types of Cookies We Use</h2>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
              <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with our website.</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience and some functionality may no longer work.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              We may allow third-party service providers to place cookies on your device for analytics and advertising purposes. These third parties have their own privacy policies and we encourage you to review them.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time. We encourage you to review this policy periodically to stay informed about our use of cookies.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at{" "}
              <a href="mailto:atulchauhan223222@gmail.com" className="text-primary-600 hover:underline">
                atulchauhan223222@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}