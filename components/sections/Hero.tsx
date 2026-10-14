"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { MotionText, FadeInView } from "../ui/MotionText";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#07070A]"
    >
      {/* High-Resolution Grainy Cobalt Aura Background from Uploaded Assets */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/aesthetic/clean_aura_wide.jpg"
          alt="Cobalt Aura Background"
          fill
          priority
          className="object-cover object-center opacity-45 mix-blend-screen filter contrast-125"
        />
        {/* Subtle vignette fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-transparent to-[#07070A]/80" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto flex flex-col items-start pt-6">
        {/* Editorial Collection Tag matching Pinterest reference */}
        <FadeInView delay={0.1}>
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse" />
            <span className="text-[11px] font-sans tracking-widest text-white/80 uppercase">
              2026 Collection / Portfolio
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[11px] text-white/60 font-sans">
              Chennai, India
            </span>
          </div>
        </FadeInView>

        {/* Video-Inspired Smooth Typographic Entrance */}
        <div className="space-y-1 sm:space-y-2 mb-6">
          <MotionText delay={0.2} className="block">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
              I Build Web Platforms
            </h1>
          </MotionText>
          <br className="hidden sm:inline" />
          <MotionText delay={0.35} className="block">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white/90 leading-[1.05]">
              That Win Clients<span className="text-cobalt">.</span>
            </h1>
          </MotionText>
        </div>

        {/* Editorial Story Subtext */}
        <FadeInView delay={0.5} className="max-w-2xl mb-10">
          <p className="text-base sm:text-lg md:text-xl text-white/70 font-sans font-normal leading-relaxed">
            From architectural concept to production deployment — clean code, fast delivery, and scalable systems built for ambitious businesses.
          </p>
        </FadeInView>

        {/* Classy Action CTAs & Collaborative Pills from Reference Video */}
        <FadeInView delay={0.65} className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black hover:bg-cobalt hover:text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-md group"
          >
            <span>View Selected Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/15 font-medium text-sm tracking-wide transition-all duration-300"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 text-white/70" />
          </a>

          {/* Interactive Collaborator Tag (Inspired by Video 'Robert' / 'Sarah' tags) */}
          <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cobalt/20 border border-cobalt/40 text-xs text-white">
            <div className="w-2 h-2 rounded-full bg-cobalt" />
            <span className="font-medium">Dinesh V.</span>
            <span className="text-white/40">//</span>
            <span className="text-white/80">Available for Freelance</span>
          </div>
        </FadeInView>
      </div>

      {/* Bottom Metadata Divider Line matching Image 4 (Public Analog) */}
      <FadeInView delay={0.8} className="relative z-10 max-w-6xl mx-auto w-full pt-6 border-t border-white/[0.08]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans text-white/50 tracking-wide uppercase">
          <div>
            <span className="block text-white/30 text-[10px] mb-0.5">DISCIPLINE</span>
            <span className="text-white/80 font-medium">Full-Stack & Systems</span>
          </div>
          <div>
            <span className="block text-white/30 text-[10px] mb-0.5">EDUCATION</span>
            <span className="text-white/80 font-medium">VIT Chennai (AI & Robotics)</span>
          </div>
          <div>
            <span className="block text-white/30 text-[10px] mb-0.5">LOCATION</span>
            <span className="text-white/80 font-medium">Chennai, India • GMT +5:30</span>
          </div>
          <div>
            <span className="block text-white/30 text-[10px] mb-0.5">STATUS</span>
            <span className="text-cobalt-300 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse" />
              Taking Commissions
            </span>
          </div>
        </div>
      </FadeInView>
    </section>
  );
};
