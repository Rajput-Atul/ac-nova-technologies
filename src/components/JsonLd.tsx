import { siteConfig } from "@/data/site-config";
import { services, pricingPlans, faqs } from "@/data/services";

export function JsonLd() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "description": siteConfig.description,
    "email": siteConfig.email,
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.address,
      "addressCountry": "IN",
    },
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": siteConfig.email,
      "telephone": siteConfig.phone,
    },
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.address,
      "addressCountry": "IN",
    },
    "openingHours": siteConfig.hours,
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
    ],
    "logo": `${siteConfig.url}/logo.png`,
    "image": `${siteConfig.url}/og-image.jpg`,
  };

  // Services Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development & Web Design",
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "url": siteConfig.url,
    },
    "areaServed": "IN",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
        },
        "price": service.price,
        "priceCurrency": "INR",
      })),
    },
  };

  // Pricing Plans Schema
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": pricingPlans.map((plan, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": plan.name,
        "description": plan.description,
        "offers": {
          "@type": "Offer",
          "price": plan.price.replace("₹", "").split(",").join(""),
          "priceCurrency": "INR",
        },
      },
    })),
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}