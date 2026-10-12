# Dinesh V — Portfolio Website

A world-class freelancer portfolio website for **Dinesh V**, Full-Stack Web Developer & AI Solutions Developer based in Chennai, India. Built with Next.js 14 App Router, TypeScript (strict mode), Tailwind CSS, Framer Motion, and Three.js.

## 🚀 Live Demo & Repository
- **GitHub**: [github.com/Dineshv0311](https://github.com/Dineshv0311)
- **LinkedIn**: [linkedin.com/in/dinesh-v-486367289](https://www.linkedin.com/in/dinesh-v-486367289)
- **Email**: [dineshv.public@gmail.com](mailto:dineshv.public@gmail.com)

---

## 🧱 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode throughout)
- **Styling**: Tailwind CSS + Framer Motion (animations & smooth scroll)
- **Visual / 3D**: Three.js (interactive 3D neural network constellation in hero)
- **Icons**: Lucide React + React Icons
- **Fonts**: Inter + JetBrains Mono
- **Deployment**: Vercel-ready config

---

## 📁 Project Structure
```
/app
  layout.tsx       # Root layout with fonts, metadata, and custom cursor
  page.tsx         # Master page combining all sections in order
  /api/contact     # API route handling inquiries
/components
  /ui
    HeroCanvas.tsx      # Three.js 3D constellation & line mesh
    Card3D.tsx          # 3D interactive tilt cards
    SectionHeading.tsx  # Animated section titles & glowing pill badges
    SkillIcon.tsx       # Safe icon mapper
  /sections
    Hero.tsx            # Typing animation, floating tech badges, dual CTAs
    About.tsx           # Story, avatar with glow ring, animated count-up stats
    Skills.tsx          # Arsenal breakdown with proficiency bars & filter tabs
    Projects.tsx        # 5 featured projects with 3D tilt, tags, demo links
    Services.tsx        # 6 services with starting prices & deliverables
    WhyHireMe.tsx       # 4 core freelancer feature blocks
    Testimonials.tsx    # Client ratings, quotes, and avatars
    Contact.tsx         # Interactive inquiry form + 1-click email copy & confetti
    Footer.tsx          # Monogram, social row, back-to-top button
  Navbar.tsx            # Sticky frosted glass, active link indicators, drawer menu
  ThemeToggle.tsx       # Dark mode default with light mode toggle
  CustomCursor.tsx      # Custom desktop cursor with trailing glow ring
/lib
  data.ts          # Central data source for all text, projects & services
  types.ts         # Strict TypeScript definitions
  utils.ts         # Utility helpers (clsx + tailwind-merge)
/styles
  globals.css      # Glassmorphism, neon shadows, custom scrollbar
```

---

## 🛠️ Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/Dineshv0311/portfolio.git
cd portfolio
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Theme & Customization
- To update projects, services, skills, or contact info, edit `/lib/data.ts`.
- Dark mode is enabled by default. Click the sun/moon button in the navbar to toggle themes.
