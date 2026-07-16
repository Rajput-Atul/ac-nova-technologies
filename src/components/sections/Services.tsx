"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Service } from "@/types";

interface ServicesProps {
  services: Service[];
}

const colorMap: Record<string, string> = {
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
  amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  rose: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400",
  teal: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
};

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Globe: require("lucide-react").Globe,
  ShoppingCart: require("lucide-react").ShoppingCart,
  Settings: require("lucide-react").Settings,
  Smartphone: require("lucide-react").Smartphone,
  RefreshCw: require("lucide-react").RefreshCw,
  Wrench: require("lucide-react").Wrench,
};

export function Services({ services }: ServicesProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Complete digital solutions tailored to your business needs. From websites to custom software, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || require("lucide-react").Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-card transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorMap[service.color] || colorMap.purple}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-3">
                  {service.price}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}