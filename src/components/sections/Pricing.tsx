"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { PricingPlan } from "@/types";

interface PricingProps {
  plans: PricingPlan[];
}

export function Pricing({ plans }: PricingProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            No hidden costs. Choose the perfect plan for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular
                  ? "border-primary-600 bg-white dark:bg-gray-800 shadow-card scale-105"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              } hover:shadow-card transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {plan.price}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contact?plan=${plan.name.toLowerCase()}`}
                className={`block w-full py-3 rounded-xl text-center font-medium transition-all ${
                  plan.popular
                    ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-button"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}