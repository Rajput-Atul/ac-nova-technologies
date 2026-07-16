import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | AC Nova Technologies",
  description: "Terms and conditions for using AC Nova Technologies services. Read our service terms, payment policies, and client agreements.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: July 2024
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>1. Services</h2>
            <p>
              AC Nova Technologies provides web development, e-commerce development, custom software development, and related digital services as described on our website.
            </p>

            <h2>2. Payment Terms</h2>
            <p>
              Payment terms vary by project. Typically, we require a 50% advance payment before starting work, with the remaining 50% due upon project completion. Custom payment plans may be available upon request.
            </p>

            <h2>3. Project Timeline</h2>
            <p>
              Project timelines are estimates and may vary based on project complexity, client feedback responsiveness, and scope changes. We strive to deliver all projects within the agreed timeframe.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              Upon full payment, clients receive full ownership of the developed website/software, excluding any third-party libraries or frameworks used. We retain the right to showcase completed work in our portfolio.
            </p>

            <h2>5. Warranty</h2>
            <p>
              We provide a 30-day bug-fix warranty after project launch. This covers bugs and issues that are reported within 30 days of launch. Feature requests and new requirements are not covered under warranty.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              AC Nova Technologies is not liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
            </p>

            <h2>7. Cancellation Policy</h2>
            <p>
              Either party may terminate the agreement with written notice. In case of client-initiated cancellation, payment for work completed up to the cancellation date will be due.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              For any questions regarding these terms, please contact us at{" "}
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