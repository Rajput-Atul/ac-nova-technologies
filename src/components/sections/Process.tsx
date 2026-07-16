"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and requirements through detailed consultation.",
    duration: "1-2 days",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description: "We create a comprehensive project plan with timelines, milestones, and deliverables.",
    duration: "2-3 days",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Design",
    description: "We design modern, user-friendly interfaces that align with your brand identity.",
    duration: "3-5 days",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Development",
    description: "We build your solution using modern technologies and best practices.",
    duration: "1-3 weeks",
    icon: Code,
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous testing ensures everything works perfectly across all devices and browsers.",
    duration: "2-3 days",
    icon: TestTube,
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy your project and provide training and documentation for your team.",
    duration: "1 day",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A proven 6-step process that ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {step.description}
                </p>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                  {step.duration}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300 dark:border-gray-700" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}