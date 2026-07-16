"use client";

import { motion } from "framer-motion";
import { Users, Target, Handshake, Award } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Client-First",
    description: "Your success is our success. We prioritize your business needs above everything else.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every line of code we write is focused on delivering measurable business outcomes.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We don't just deliver projects; we build long-term relationships with our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in quality, security, and performance.",
  },
];

export function AboutValues() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These core values guide everything we do at AC Nova Technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}