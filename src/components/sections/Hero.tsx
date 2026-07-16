"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 mb-8"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Trusted by 150+ businesses across India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 text-balance"
          >
            We Build Digital Solutions That{" "}
            <span className="gradient-text">Grow Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto text-balance"
          >
            Premium websites, e-commerce stores, custom software, and mobile apps designed to attract more customers, increase sales, and save you time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all hover:shadow-button hover:-translate-y-0.5 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-medium hover:border-primary-600 dark:hover:border-primary-400 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
          >
            {["No hidden costs", "30-day warranty", "Free consultation"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}