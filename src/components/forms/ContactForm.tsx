"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const servicesList = [
  "Website Development",
  "E-Commerce Development",
  "Custom Business Software",
  "Mobile Application",
  "Website Redesign",
  "Maintenance & Support",
];

const budgetRanges = [
  "Under ₹15,000",
  "₹15,000 - ₹35,000",
  "₹35,000 - ₹80,000",
  "₹80,000 - ₹2,00,000",
  "Above ₹2,00,000",
];

const contactApiEndpoint = "/api/contact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(contactApiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || "Not specified",
          service: data.service,
          budget: data.budget || "Not specified",
          message: data.message,
          // keep honeypot in case API checks it
          honeypot: data.honeypot,
        }),
      });

      const result = await response.json();

      if (result?.success) {
        setIsSuccess(true);
        reset();
      } else {
        setSubmitError(result?.message || "Something went wrong. Please try again.");
      }

    } catch (error) {
      console.error("ContactForm submit error:", error);
      setSubmitError("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We've received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="+91-98765-43210"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Service Interested In *
          </label>
          <select
            id="service"
            {...register("service")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
          >
            <option value="">Select a service</option>
            {servicesList.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            {...register("budget")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your project requirements, goals, and timeline..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
      </div>

      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm"
        >
          {submitError}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all hover:shadow-button hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}