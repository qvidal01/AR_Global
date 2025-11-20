# AR Global Roofing - Premium Website

A modern, premium website for AR Global Roofing built with Next.js 16, TypeScript, Tailwind CSS v4, and Shadcn/ui.

## Project Overview

This project represents a complete website redesign and repositioning for AR Global Roofing, transforming from a commodity roofing contractor to a premium craftsman service for high-net-worth homeowners in North Texas.

## Tech Stack

- **Framework:** Next.js 16.0.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/ui (custom implementation)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion
- **CMS:** Sanity.io (to be configured)
- **Hosting:** Vercel

## Design System

### Color Palette
- **Charcoal:** Primary dark color (#2B3338)
- **Ivory:** Primary light color (#F8F6F3)
- **Forest:** Accent color (#2C5F4D)
- **Bronze:** Secondary accent (#8B6F47)
- **Sage:** Tertiary accent (#B7C9B3)

### Typography
- **Serif (Headlines):** Cormorant Garamond
- **Sans (Body):** Inter
- **Display (Alternative):** Libre Baskerville

## Getting Started

### Development

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

\`\`\`bash
npm run build
\`\`\`

### Start Production Server

\`\`\`bash
npm start
\`\`\`

## Project Structure

\`\`\`
ar-global-roofing/
├── app/
│   ├── (site)/          # Main site pages with Header/Footer
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── contact/
│   │   ├── process/
│   │   ├── investment-guide/
│   │   ├── reviews/
│   │   ├── resources/
│   │   ├── locations/
│   │   └── page.tsx     # Homepage
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles & design system
├── src/
│   ├── components/
│   │   ├── ui/          # Shadcn components
│   │   └── layout/      # Header, Footer
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   └── hooks/           # Custom React hooks
└── public/              # Static assets
\`\`\`

## Completed Features

### Phase 1: Foundation ✅
- [x] Next.js project setup with TypeScript and Tailwind CSS v4
- [x] Custom design system implementation
- [x] Shadcn/ui component library setup
- [x] Base UI components (Button, Card, Input, Label, Textarea)
- [x] Header and Footer layout components
- [x] Responsive navigation system
- [x] Homepage with all major sections

### Homepage Sections ✅
- [x] Hero section with CTA
- [x] Problem-Solution statement
- [x] Services overview grid
- [x] Social proof section with testimonials
- [x] Final CTA section

## Upcoming Features

### Phase 2: Core Pages
- [ ] About page
- [ ] Contact page with form functionality
- [ ] 404 error page

### Phase 3: Service Pages
- [ ] Service template component
- [ ] Individual service pages

### Phase 4: Portfolio & Case Studies
- [ ] Portfolio index page
- [ ] Case study template
- [ ] Dynamic routing

### Phase 5: Additional Pages
- [ ] Investment Guide page
- [ ] Process timeline page
- [ ] Location pages

### Phase 6: CMS & Content
- [ ] Sanity CMS integration
- [ ] Blog setup
- [ ] Resources section

### Phase 7: Optimization & Launch
- [ ] SEO optimization (schema markup, meta tags, sitemap)
- [ ] Analytics setup (Google Analytics 4, Microsoft Clarity)
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Deployment to Vercel

## Performance Targets

- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Core Web Vitals: All green
- Mobile PageSpeed: 85+

## Strategic Positioning

**Core Brand Promise:** "The Last Roof Your Home Will Ever Need"

**Target Market:** North Texas estate homeowners (properties $500K+)

**Key Differentiators:**
- Peace of mind over price
- Consultative expertise over transactional service
- Generational quality over quick fixes
- White-glove experience over standard contractor approach

## License

Private - © 2025 AR Global Roofing
