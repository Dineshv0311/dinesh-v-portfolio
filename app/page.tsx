import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07070A] text-white selection:bg-cobalt selection:text-white font-sans antialiased">
      {/* Modernist Editorial Navbar with Corner Avatar */}
      <Navbar />

      {/* Classy Hero with Grainy Cobalt Aura Background & Typographic Motion */}
      <Hero />

      {/* About & Engineering Philosophy */}
      <About />

      {/* Selected Commercial Case Studies */}
      <Projects />

      {/* Minimalist Contact & Telemetry */}
      <Footer />
    </main>
  );
}
