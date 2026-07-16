"use client";

import { motion } from "framer-motion";
import { Star, Clock, Headphones, Shield, Receipt } from "lucide-react";

const badges = [
  {
    icon: Star,
    label: "5-Star Rated",
    description: "By satisfied clients",
  },
  {
    icon: Clock,
    label: "On-Time Delivery",
    description: "95% projects on schedule",
  },
  {
    icon: Headphones,
    label: "24/7 Support",
    description: "Always here to help",
  },
  {
    icon: Shield,
    label: "Secure & Reliable",
    description: "Enterprise-grade security",
  },
  {
    icon: Receipt,
    label: "Transparent Pricing",
    description: "No hidden costs, ever",
  },
];

export function TrustBadges() {
  return (
    <section className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {badge.label}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}