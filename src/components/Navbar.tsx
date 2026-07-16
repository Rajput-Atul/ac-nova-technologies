"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="AC Nova Technologies"
                width={350}
                height={200}
                className="w-[350px] h-[200px]"
                priority
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                AC Nova
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <a
                href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-medium hover:bg-primary-700 transition-all hover:shadow-button hover:-translate-y-0.5"
              >
                Get Free Quote
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-20 md:hidden"
          >
            <nav className="px-4 py-6">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-4 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800"
                  >
                    {item.label}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 space-y-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 bg-primary-600 text-white text-center rounded-xl font-medium"
                >
                  Get Free Quote
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 bg-green-600 text-white text-center rounded-xl font-medium"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}