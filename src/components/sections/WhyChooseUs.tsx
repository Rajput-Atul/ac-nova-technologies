"use client";

import { motion } from "framer-motion";
import { Zap, Users, Target, Award, RefreshCw, Lock } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Most projects within 2-4 weeks",
  },
  {
    icon: Users,
    title: "Business-First Approach",
    description: "Solutions that solve real problems",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Every choice focused on growth",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Enterprise quality, small business prices",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support",
    description: "We don't disappear after launch",
  },
  {
    icon: Lock,
    title: "Full Ownership",
    description: "You own everything, no lock-in",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose AC Nova?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're not just another development agency. We're your long-term technology partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-card transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}