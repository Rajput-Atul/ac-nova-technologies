"use client";

import { siteConfig } from "@/data/site-config";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = siteConfig.phone.replace(/\D/g, "");
  const message = encodeURIComponent(
    "Hi AC Nova Technologies! I'm interested in your services. Can you help me?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}