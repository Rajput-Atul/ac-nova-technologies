"use client";

import { siteConfig } from "@/data/site-config";
import { Twitter, Instagram, Linkedin, Facebook, Github, ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialIcons: Record<string, React.FC<{ className?: string }>> = {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Github,
};

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
  ],
  services: [
    { label: "Website Development", href: "/services#websites" },
    { label: "E-Commerce", href: "/services#ecommerce" },
    { label: "Custom Software", href: "/services#software" },
    { label: "Mobile Apps", href: "/services#mobile" },
  ],
  resources: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  industries: [
    { label: "Restaurants", href: "/industries#restaurants" },
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Education", href: "/industries#education" },
    { label: "Real Estate", href: "/industries#realestate" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="AC Nova Technologies"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                AC Nova
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-sm">
              Premium software agency helping businesses grow with modern technology. 
              We build websites, e-commerce stores, custom software, and mobile apps.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>📍</span>
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
              <span>📞</span>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-primary-600 transition-colors">
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
              <span>✉️</span>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-600 transition-colors">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              {siteConfig.socialLinks.map((social) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                    aria-label={social.platform}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}