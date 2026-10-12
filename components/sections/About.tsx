"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Mail,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Shield,
  Layers,
} from "lucide-react";
import { personalDetails, statsData } from "@/lib/data";

const StatCounter: React.FC<{ value: number; suffix: string }> = ({
  value,
  suffix,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800;
    const incrementTime = 25;
    const totalSteps = duration / incrementTime;
    const stepIncrement = value / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono font-black text-3xl sm:text-4xl text-white">
      {count}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Igloo Section Index Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase block mb-3">
            [ 01 // MANIFESTO ]
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white dark:text-white light:text-slate-900 leading-none">
            ENGINEERING <span className="text-aurora">DIGITAL PRECISION</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/50 max-w-2xl font-mono">
            Crafting high-converting web applications at the intersection of aesthetic luxury, bulletproof architecture, and instant cloud performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Igloo Crystalline Monolith Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="igloo-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] font-mono text-xs text-white/50">
                <span>IDENTITY // ARCHIVES</span>
                <span className="text-accent">[ VERIFIED ]</span>
              </div>

              {/* Monogram Visual Block */}
              <div className="my-8 flex flex-col items-center justify-center p-8 rounded-xl bg-white/[0.02] border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-accent/15 via-transparent to-transparent pointer-events-none" />
                <span className="font-mono text-7xl font-black tracking-tighter text-white drop-shadow-[0_0_35px_rgba(0,212,255,0.4)] select-none">
                  {personalDetails.monogram}
                </span>
                <span className="mt-3 text-[10px] font-mono tracking-[0.3em] uppercase text-white/60">
                  DINESH V // STUDIO
                </span>
              </div>

              {/* Metadata */}
              <div className="space-y-3 font-mono text-xs text-white/70">
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="text-white/40">LOCATION</span>
                  <span>CHENNAI, IN (UTC+5:30)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="text-white/40">INSTITUTION</span>
                  <span>VIT CHENNAI (AI & ROBOTICS)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="text-white/40">DISCIPLINE</span>
                  <span className="text-accent">FULL-STACK & CLOUD</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/40">STATUS</span>
                  <span className="text-emerald-400">READY FOR COMMISSIONS</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Studio Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="igloo-card rounded-2xl p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-snug">
                I DON&apos;T JUST WRITE CODE. I ARCHITECT{" "}
                <span className="text-aurora">HIGH-CONVERTING ASSETS</span>.
              </h3>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-white/70 font-normal leading-relaxed">
                <p>
                  I&apos;m <strong className="text-white font-semibold">Dinesh V</strong>, a Computer Science engineer at <strong className="text-white font-semibold">VIT Chennai</strong> specializing in AI & Robotics.
                </p>
                <p>
                  In a market flooded with generic tutorial projects, I build production-grade web systems — custom multi-tenant portals, friction-free e-commerce payment checkouts, and high-converting marketing landing pages.
                </p>
                <p>
                  Every line written adheres to strict TypeScript standards, automated CI/CD deployment pipelines, and zero-downtime cloud infrastructure.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/[0.08] font-mono text-xs">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-accent">▸</span>
                  <span>Decoupled Microservices</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-accent">▸</span>
                  <span>MetaMask & Digital Payments</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-accent">▸</span>
                  <span>AWS & Docker Containerization</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-accent">▸</span>
                  <span>Sub-Second Page Performance</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-black bg-white hover:bg-accent transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>START COMMISSION</span>
                </a>

                <a
                  href="https://github.com/Dineshv0311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-accent" />
                  <span>VIEW GITHUB ARCHIVES</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Stats Grid in Igloo Telemetry Style */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="igloo-card rounded-xl p-6 border border-white/[0.08] font-mono"
            >
              <div className="text-[10px] text-white/40 tracking-widest uppercase mb-2">
                [ METRIC // 0{idx + 1} ]
              </div>
              <div className="my-1">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-white/40 mt-1 line-clamp-1">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
