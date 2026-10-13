import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-red selection:text-black font-mono">
      {/* Brutalist Matrix / Terminal Navbar */}
      <Navbar />

      {/* Hero with Digital Rain Canvas & Binary Glitch Portrait */}
      <Hero />

      {/* Brutalist About Section with Georgia Quote & Peel Off Specs */}
      <About />

      {/* Interactive Cyberpunk Projects Showcase with Live Telemetry */}
      <Projects />

      {/* Monumental GET IN TOUCH Terminal & Footer */}
      <Footer />
    </main>
  );
}
