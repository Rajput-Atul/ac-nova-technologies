# AC Nova Technologies - Premium Software Agency Website

A modern, premium website for AC Nova Technologies, a software agency specializing in web development, e-commerce, custom software, and mobile applications.

## Features

- **Modern Design**: Minimal, premium, professional design inspired by Apple, Stripe, and Vercel
- **Fully Responsive**: Optimized for mobile, tablet, desktop, and ultra-wide screens
- **Dark Mode Support**: Built-in theme switching with next-themes
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **SEO Optimized**: Next.js built-in metadata with OpenGraph and Twitter Cards
- **Contact Forms**: Validated forms with spam protection (honeypot)
- **Backend API**: Express.js server with email notifications
- **Performance**: Optimized for fast loading with image optimization
- **Security**: Security headers, sanitized inputs, environment variable protection

## Tech Stack

### Frontend
- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS v3
- Framer Motion
- Lucide React
- React Hook Form + Zod
- next-themes

### Backend
- Express.js
- TypeScript
- Zod
- Nodemailer
- Helmet
- express-rate-limit
- Winston (logging)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Gmail account (for email notifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ac-nova-technologies
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**

   Create `.env.local` in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

   Create `.env` in the backend directory:
   ```env
   PORT=3001
   NODE_ENV=production
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=hello@acnovatechnologies.com
   SMTP_PASS=your_app_password
   ADMIN_EMAIL=admin@acnovatechnologies.com
   FRONTEND_URL=https://acnovatechnologies.com
   ```

5. **Run the development servers**

   Terminal 1 (Frontend):
   ```bash
   npm run dev
   ```

   Terminal 2 (Backend):
   ```bash
   npm run backend
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ac-nova-technologies/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   ├── pricing/
│   │   ├── portfolio/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── privacy/
│   │   ├── terms/
│   │   ├── cookies/
│   │   ├── thank-you/
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── ThemeProvider.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── JsonLd.tsx
│   │   ├── ui/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBadges.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Industries.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── ContactCTA.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   ├── data/
│   │   ├── site-config.ts
│   │   └── services.ts
│   └── styles/
│       └── globals.css
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   │   ├── contact.ts
│   │   │   ├── quote.ts
│   │   │   └── newsletter.ts
│   │   ├── services/
│   │   └── utils/
│   ├── package.json
│   └── tsconfig.json
├── public/
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Pages

- **Homepage**: Hero, Trust Badges, Stats, Why Choose Us, Services, Industries, Process, Portfolio, Pricing, Testimonials, FAQ, Contact CTA
- **About**: Company info, values, team members
- **Services**: Detailed service listings
- **Pricing**: Transparent pricing plans
- **Portfolio**: Project showcase
- **Contact**: Contact form with validation
- **FAQ**: Frequently asked questions
- **Legal**: Privacy Policy, Terms & Conditions, Cookies Policy
- **Thank You**: Post-submission confirmation
- **404**: Custom not-found page

## Design System

### Colors
- Primary: Indigo (#4f46e5)
- Accent: Purple, Blue, Teal, Rose, Amber, Emerald
- Neutral: Full grayscale spectrum (#0a0a0a to #fafafa)

### Typography
- Font: Geist Sans
- Display: clamp(3rem, 8vw, 6rem)
- Body: 1rem, line-height 1.75

### Spacing
- Section padding: 80px vertical
- Max-width: 1280px
- Card gap: 24px

### Effects
- Glassmorphism cards
- Gradient text
- Smooth animations
- Hover effects

## Deployment

### Quick Start for Production

1. **Environment Variables**
   - Copy `.env.example` to your hosting provider settings
   - Set production values for all variables
   - Use app-specific passwords for Gmail (not account password)

2. **Vercel Deployment (Recommended)**
   ```bash
   npm i -g vercel
   vercel
   ```
   See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions

3. **Build & Test**
   ```bash
   npm run build
   npm run lint
   npm run start
   ```

4. **Post-Deployment**
   - Test all forms and functionality
   - Verify security headers with https://securityheaders.com
   - Check SEO with Google Search Console
   - Monitor performance with Lighthouse

### Full Deployment Guide
See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Pre-deployment checklist
- Environment variable setup
- Multiple platform instructions (Vercel, Netlify, VPS)
- Post-deployment testing
- Monitoring and maintenance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - All rights reserved © 2024 AC Nova Technologies