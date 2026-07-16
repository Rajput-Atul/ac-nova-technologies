import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AC Nova Technologies",
  description: "Learn how AC Nova Technologies collects, uses, and protects your personal data. Our commitment to your privacy and data security.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: July 2024
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as your name, email address, phone number, and any other information you choose to provide when contacting us through our website.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, provide the services you request, and send you relevant updates about our services. We do not sell or share your personal information with third parties.
            </p>

            <h2>3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>4. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can set your browser to refuse all or some browser cookies, but this may affect certain functionality.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. Contact us at{" "}
              <a href="mailto:atulchauhan223222@gmail.com" className="text-primary-600 hover:underline">
                atulchauhan223222@gmail.com
              </a>
              for any privacy-related requests.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
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