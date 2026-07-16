"use client";

import { motion } from "framer-motion";
import { Coffee, Heart, GraduationCap, ShoppingBag, Building, Plane, Briefcase, Scissors } from "lucide-react";
import { Industry } from "@/types";

interface IndustriesProps {
  industries: Industry[];
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Coffee: require("lucide-react").Coffee,
  Heart: require("lucide-react").Heart,
  GraduationCap: require("lucide-react").GraduationCap,
  ShoppingBag: require("lucide-react").ShoppingBag,
  Building: require("lucide-react").Building,
  Plane: require("lucide-react").Plane,
  Briefcase: require("lucide-react").Briefcase,
  Scissors: require("lucide-react").Scissors,
};

const colorMap: Record<string, string> = {
  amber: "border-amber-500 hover:border-amber-500",
  red: "border-red-500 hover:border-red-500",
  blue: "border-blue-500 hover:border-blue-500",
  emerald: "border-emerald-500 hover:border-emerald-500",
  purple: "border-purple-500 hover:border-purple-500",
  teal: "border-teal-500 hover:border-teal-500",
  indigo: "border-indigo-500 hover:border-indigo-500",
  rose: "border-rose-500 hover:border-rose-500",
};

export function Industries({ industries }: IndustriesProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We specialize in building digital solutions for businesses across diverse industries. Our expertise ensures we understand your unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon] || require("lucide-react").Coffee;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border-2 border-transparent bg-white dark:bg-gray-800 hover:shadow-card transition-all ${colorMap[industry.color] || colorMap.amber}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${industry.color}-100 dark:bg-${industry.color}-900/30 text-${industry.color}-600 dark:text-${industry.color}-400`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}