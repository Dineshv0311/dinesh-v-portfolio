"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Terminal,
  Layers,
  ChevronDown,
  Compass,
} from "lucide-react";
import { personalDetails } from "@/lib/data";
import { IglooShardCanvas } from "../ui/IglooShardCanvas";

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "FULL-STACK WEB ARCHITECT",
    "ENTERPRISE PLATFORM BUILDER",
    "E-COMMERCE & FINTECH SPECIALIST",
    "CLOUD DEVOPS & INFRASTRUCTURE",
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 75);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col items-center justify-between pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-igloo-grid"
    >
      {/* 3D Crystalline Iceberg Monolith Canvas in center */}
      <IglooShardCanvas />

      {/* Atmospheric radial aurora glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-accent/10 via-[#7c3aed]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Top telemetry tag */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-pill text-[11px] font-mono tracking-widest uppercase text-white/70 shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
        <span>STUDIO TELEMETRY // CHENNAI, IN</span>
        <span className="text-white/30">•</span>
        <span className="text-accent font-semibold">ONLINE</span>
      </motion.div>

      {/* Hero Headline & Core Mission */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center my-auto py-12">
        {/* Dynamic Typing Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-8 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-accent uppercase font-semibold flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10">
            <span>[ {displayedText} ]</span>
            <span className="inline-block w-1.5 h-4 bg-accent animate-pulse" />
          </span>
        </motion.div>

        {/* Master Headline in Igloo Inc high-contrast editorial style */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-white dark:text-white light:text-slate-950 max-w-4xl"
        >
          I Build Websites That{" "}
          <span className="text-aurora block sm:inline">Win Clients.</span>
        </motion.h1>

        {/* Subtext Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-sm sm:text-base md:text-lg text-white/60 dark:text-white/60 light:text-slate-600 max-w-2xl font-normal leading-relaxed tracking-normal"
        >
          Architecting production-ready company websites, high-converting digital
          platforms, and secure e-commerce portals. Zero technical debt,
          instant speeds, and uncompromising execution.
        </motion.p>

        {/* Action CTAs in Igloo Pill Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-mono tracking-[0.15em] font-bold uppercase text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <Layers className="w-4 h-4 text-accent" />
            <span>EXPLORE VENTURES</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-mono tracking-[0.15em] font-bold uppercase text-black bg-white hover:bg-accent border border-white hover:border-accent transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)] group"
          >
            <span>COMMISSION WORK</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Telemetry Bar in Igloo Inc signature footer grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full max-w-6xl mx-auto pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-[10px] sm:text-xs font-mono tracking-widest text-white/40 uppercase"
      >
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-accent" />
          <span>COORDINATES: 13.0827° N, 80.2707° E</span>
        </div>
        <div>
          <span>FOCUS: FULL-STACK // CLOUD // COMMERCE</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>CLIENT SATISFACTION: 100%</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to manifesto"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 text-white/30 hover:text-white transition-colors hidden md:block"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
