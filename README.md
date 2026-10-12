# Dinesh V — Studio Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dineshv0311/dinesh-v-portfolio)

A world-class freelancer portfolio website for **Dinesh V**, Full-Stack Web Architect & AI Developer based in Chennai, India. Built with Next.js 14 App Router, TypeScript (strict mode), Tailwind CSS, Framer Motion, and Three.js — designed with inspiration from [igloo.inc](https://www.igloo.inc/).

---

## 🌐 Live Repository & Contact
- **GitHub Repository**: [github.com/Dineshv0311/dinesh-v-portfolio](https://github.com/Dineshv0311/dinesh-v-portfolio)
- **LinkedIn**: [linkedin.com/in/dinesh-v-486367289](https://www.linkedin.com/in/dinesh-v-486367289)
- **Email**: [dineshv.public@gmail.com](mailto:dineshv.public@gmail.com)

---

## 🧱 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode throughout)
- **Visual & 3D**: Three.js (interactive 3D Monolithic Iceberg Shard with dynamic lights & mouse parallax)
- **Styling**: Tailwind CSS + Framer Motion (smooth scroll, telemetry badges, glassmorphism)
- **Icons**: Lucide React + React Icons (FontAwesome6, SimpleIcons, RemixIcons, TablerIcons)
- **Deployment**: Vercel-optimized (`vercel.json` included)

---

## 🏆 Featured Client Ventures
1. **EduBot Cloud-Native Platform** — Multi-tenant company assessment & SaaS portal on AWS (EC2/S3/RDS/Docker)
2. **CryptoTransfer Digital Checkout** — Web3 e-commerce & digital payment transaction dApp (MetaMask/Solidity)
3. **LiveSync Customer Portal** — Real-time WebSocket messaging & client support system (JWT/Node.js)

---

## 📁 Project Architecture
```
/app
  layout.tsx       # Root layout, Inter & JetBrains Mono, SEO metadata, custom cursor
  page.tsx         # Single-page app with all Igloo-inspired telemetry sections
  /api/contact     # Serverless contact inquiry endpoint
/components
  /ui
    IglooShardCanvas.tsx # Three.js 3D Monolithic Crystalline Iceberg Shard
    Card3D.tsx           # 3D interactive perspective tilt cards
    SectionHeading.tsx   # Reusable telemetry section headers
    SkillIcon.tsx        # Safe dynamic icon mapper
  /sections
    Hero.tsx             # 3D Shard, editorial headline, typing telemetry, coordinates
    About.tsx            # Studio Manifesto, credentials, count-up stats
    Skills.tsx           # Technical Arsenal, category filter pills, progress indicators
    Projects.tsx         # 3 flagship commercial ventures with 3D tilt & live repo links
    Services.tsx         # Available commission disciplines, starting rates, timelines
    WhyHireMe.tsx        # 4 Execution pillars (Delivery, Clean Code, Communication, Guarantee)
    Testimonials.tsx     # Client lookbook & verified reviews
    Contact.tsx          # Direct commission dispatch terminal with confetti trigger
    Footer.tsx           # Monumental watermark, live Chennai local time clock
  Navbar.tsx             # Monogram mark, status indicator, centered capsule navigation
  ThemeToggle.tsx        # Dark mode default with smooth Sun/Moon switch
  CustomCursor.tsx       # Desktop custom dot cursor with trailing glow follower
/lib
  data.ts          # Centralized portfolio data
  types.ts         # Strict TypeScript definitions
  utils.ts         # Utility helpers
/styles
  globals.css      # Obsidian backdrop, arctic gradients, custom scrollbar
```

---

## 🚀 Running Locally

```bash
# Clone repository
git clone https://github.com/Dineshv0311/dinesh-v-portfolio.git
cd dinesh-v-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Recommended Deployment (Vercel)

Click the deploy button above or run:

```bash
npx vercel
```
Or import `https://github.com/Dineshv0311/dinesh-v-portfolio` in [vercel.com/new](https://vercel.com/new).
