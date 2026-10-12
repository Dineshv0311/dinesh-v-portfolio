import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { WhyHireMe } from "@/components/sections/WhyHireMe";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050508] dark:bg-[#050508] light:bg-[#F8F9FA] text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300">
      {/* Top Navbar in Igloo style */}
      <Navbar />

      {/* Hero Section with 3D Monolithic Shard */}
      <Hero />

      {/* Studio Manifesto / About Section */}
      <About />

      {/* Capabilities & Tech Arsenal */}
      <Skills />

      {/* Flagship Ventures / Client Projects */}
      <Projects />

      {/* Available Commission Disciplines & Tiers */}
      <Services />

      {/* Core Advantages */}
      <WhyHireMe />

      {/* Client Lookbook & Endorsements */}
      <Testimonials />

      {/* Direct Commission Dispatch Terminal */}
      <Contact />

      {/* Monumental Footer with Live Telemetry Clock */}
      <Footer />
    </main>
  );
}
