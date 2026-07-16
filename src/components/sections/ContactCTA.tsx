"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-purple relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto"
          >
            Get a free consultation and detailed proposal within 24 hours
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-white text-primary-600 rounded-xl font-medium hover:bg-gray-100 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white"
          >
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 hover:text-primary-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Or call us directly: {siteConfig.phone}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}