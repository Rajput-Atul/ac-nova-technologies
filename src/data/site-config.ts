import { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "AC Nova Technologies",
  description: "Premium software agency helping businesses grow with modern technology.",
  url: "https://acnovatech.com",
  phone: "+91 93245 96187",
  email: "atulchauhan223222@gmail.com",
  address: "Mumbai, Maharashtra, India",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  social: {
    facebook: "https://facebook.com/acnovatech",
    instagram: "https://instagram.com/acnovatech",
    linkedin: "https://www.linkedin.com/in/atul-chauhan-716991221/",
    twitter: "https://twitter.com/acnovatech",
    github: "https://github.com/Rajput-Atul",
  } as const satisfies Record<string, string>,
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  socialLinks: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/atul-chauhan-716991221/", icon: "Linkedin" },
    { platform: "GitHub", url: "https://github.com/Rajput-Atul", icon: "Github" },
    { platform: "Facebook", url: "https://facebook.com/acnovatech", icon: "Facebook" },
    { platform: "Instagram", url: "https://instagram.com/acnovatech", icon: "Instagram" },
    { platform: "Twitter", url: "https://twitter.com/acnovatech", icon: "Twitter" },
  ] as SocialLink[],
};