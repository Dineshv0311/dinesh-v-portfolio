"use client";

import React from "react";
import Image from "next/image";
import { MatrixRainCanvas } from "../ui/MatrixRainCanvas";
import { ScrambleText } from "../ui/ScrambleText";
import { ArrowUpRight, Terminal } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#0D0208] text-white flex items-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-mono"
    >
      {/* Background Matrix Digital Rain in Red / White Monochrome */}
      <MatrixRainCanvas className="absolute inset-0 w-full h-full opacity-70" />

      {/* Main Container: Asymmetric 2-Column Layout (Image Offset to the Right, NOT Centered) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto">
        {/* Left Column: Bold Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Status Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-white/20 text-[11px] tracking-widest uppercase text-white/90">
            <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
            <span className="text-red font-bold">VIT CHENNAI</span>
            <span className="text-white/30">//</span>
            <span>AI & SYSTEMS ENGINEER</span>
            <span className="text-white/30">•</span>
            <span className="text-red font-bold">OPEN TO WORK</span>
          </div>

          {/* Big Scramble Glitch Name */}
          <div className="w-full">
            <ScrambleText
              text="DINESH V"
              duration={1.2}
              className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tighter uppercase leading-none text-white selection:bg-red selection:text-black drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            />
          </div>

          {/* Subtitle / Specialization */}
          <div className="space-y-2 max-w-xl">
            <p className="text-sm sm:text-base font-bold tracking-[0.2em] text-red uppercase">
              FULLSTACK ARCHITECT // SYSTEMS & AI SOLUTIONS
            </p>
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
              Engineering high-converting commercial web platforms, scalable cloud microservices, and custom AI tools. Clean code, fast delivery, zero technical debt.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
            <a
              href="#projects"
              className="bg-red text-black font-bold px-6 py-3.5 uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center gap-2 cursor-pointer shadow-[4px_4px_0px_0px_#FFFFFF]"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="border border-white/30 bg-black/40 text-white font-bold px-6 py-3.5 uppercase tracking-wider hover:border-red hover:text-red transition-all cursor-pointer"
            >
              [ GET IN TOUCH ]
            </a>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-6 text-[10px] text-white/40 uppercase tracking-widest">
            <div>
              <span className="text-white/60">LOCATION: </span>
              <span className="text-white font-bold">CHENNAI, INDIA</span>
            </div>
            <div>
              <span className="text-white/60">DISCIPLINE: </span>
              <span className="text-red font-bold">FULL-STACK & AI</span>
            </div>
            <div>
              <span className="text-white/60">LATENCY: </span>
              <span className="text-white font-bold">&lt;50MS</span>
            </div>
          </div>
        </div>

        {/* Right Column: Portrait in High-Contrast Brutalist Cyber Frame (NOT Centered) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-sm sm:max-w-md border-2 border-white/20 bg-black p-3 shadow-[8px_8px_0px_0px_#FF0000] group">
            {/* Top Frame Telemetry */}
            <div className="flex items-center justify-between text-[10px] text-white/50 pb-2 border-b border-white/10 mb-2">
              <span className="flex items-center gap-1.5 font-bold text-red">
                <Terminal className="w-3 h-3" />
                DV_PORTRAIT.RAW
              </span>
              <span className="text-white/70">● ACTIVE_FEED</span>
            </div>

            {/* Portrait Image Container */}
            <div className="relative w-full aspect-[4/5] sm:aspect-square overflow-hidden bg-[#0D0208] border border-white/10">
              <Image
                src="/images/myself.jpg"
                alt="Dinesh V - Full-Stack & AI Solutions Developer"
                fill
                priority
                className="object-cover object-top filter contrast-125 brightness-95 grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Corner Bracket Accents in Red */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-red pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-red pointer-events-none" />

              {/* Bottom Subtle Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Frame Telemetry */}
            <div className="flex items-center justify-between text-[9px] text-white/40 pt-2 border-t border-white/10 mt-2 uppercase">
              <span>SYS_ID: DV-2026</span>
              <span className="text-red font-bold">CHENNAI // GMT +5:30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Seamless Fade To Black for Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />
    </section>
  );
};
