import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - AC Nova Technologies | Premium Software Agency",
  description: "Learn about AC Nova Technologies. A team of passionate developers and designers creating digital solutions for businesses across India since 2023. Our mission: affordable excellence.",
  keywords: [
    "about AC Nova",
    "software company profile",
    "web development agency",
    "company mission",
    "team expertise",
    "why choose AC Nova",
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
