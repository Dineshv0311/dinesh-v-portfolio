"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles, Terminal, Code2, Cloud, Cpu } from "lucide-react";
import { FadeInView } from "../ui/MotionText";

export const About: React.FC = () => {
  const [specsOpen, setSpecsOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#07070A] text-white py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Subtle background aura glow */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-cobalt/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section Tag */}
        <FadeInView delay={0.1}>
          <div className="flex items-center gap-2 mb-4 text-xs font-sans tracking-widest text-cobalt uppercase">
            <span>// 01. PHILOSOPHY & ABOUT</span>
          </div>
        </FadeInView>

        {/* Large Editorial Headline */}
        <FadeInView delay={0.2} className="mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
            Engineering resilient digital products with zero compromise on speed or aesthetics.
          </h2>
        </FadeInView>

        {/* 2-Column Split: Story & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            <FadeInView delay={0.3}>
              <p>
                I&apos;m <strong className="text-white font-semibold">Dinesh V</strong>, a Computer Science undergraduate at <strong className="text-white font-semibold">VIT Chennai</strong> specializing in <strong className="text-white font-semibold">AI & Robotics</strong>.
              </p>
            </FadeInView>

            <FadeInView delay={0.4}>
              <p>
                I approach web development from a systems engineering mindset. Rather than assembling fragile templates, I build end-to-end web applications: high-performance Next.js interfaces, secure Node.js/Python backends, optimized PostgreSQL databases, and containerized Docker deployments on AWS and Linux VPS.
              </p>
            </FadeInView>

            <FadeInView delay={0.5}>
              <p>
                I&apos;ve shipped real, commercially viable products — from enterprise training assessment platforms to decentralized checkout systems and real-time WebSocket portals. Every line of code is clean, typed, documented, and built for client success.
              </p>
            </FadeInView>

            {/* Interactive Specs Toggle */}
            <FadeInView delay={0.6} className="pt-4">
              <button
                onClick={() => setSpecsOpen(!specsOpen)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-sans tracking-wider uppercase text-white transition-all cursor-pointer"
              >
                <span>{specsOpen ? "Hide Technical Telemetry [-]" : "Inspect Technical Telemetry [+]"}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 text-cobalt transition-transform ${specsOpen ? "rotate-90" : ""}`} />
              </button>
            </FadeInView>
          </div>

          {/* Right Column: Editorial Stat Cards inspired by Russian Agency Layout (Image 1) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <FadeInView delay={0.35} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cobalt/40 transition-colors">
              <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight block mb-1">
                5+
              </span>
              <span className="text-xs uppercase font-sans text-cobalt font-medium tracking-wider block mb-2">
                Production Platforms Shipped
              </span>
              <p className="text-xs text-white/60 font-sans leading-normal">
                Full-stack web apps deployed on live cloud infrastructure with real active users.
              </p>
            </FadeInView>

            <FadeInView delay={0.45} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cobalt/40 transition-colors">
              <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight block mb-1">
                2
              </span>
              <span className="text-xs uppercase font-sans text-cobalt font-medium tracking-wider block mb-2">
                Industry Internships
              </span>
              <p className="text-xs text-white/60 font-sans leading-normal">
                Proven team engineering experience delivering full-scale features on strict deadlines.
              </p>
            </FadeInView>

            <FadeInView delay={0.55} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cobalt/40 transition-colors">
              <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight block mb-1">
                &lt; 2h
              </span>
              <span className="text-xs uppercase font-sans text-cobalt font-medium tracking-wider block mb-2">
                Response SLA & Communication
              </span>
              <p className="text-xs text-white/60 font-sans leading-normal">
                Zero ghosting guarantee. Daily asynchronous progress demos and transparent updates.
              </p>
            </FadeInView>
          </div>
        </div>

        {/* Revealed Technical Telemetry */}
        {specsOpen && (
          <FadeInView delay={0.1} className="mt-12 p-8 rounded-2xl bg-white/[0.02] border border-white/10 animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6 text-xs text-white/50 uppercase tracking-widest">
              <span className="flex items-center gap-2 text-white font-medium">
                <Terminal className="w-4 h-4 text-cobalt" />
                VERIFIED ARCHITECTURE & TOOLS
              </span>
              <span className="text-cobalt font-medium">● ACTIVE PRODUCTION SPEC</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div>
                <span className="text-cobalt font-medium block uppercase tracking-wider mb-2">
                  01. FRONTEND
                </span>
                <p className="text-white/70 leading-relaxed font-sans">
                  Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Responsive Design, State Management
                </p>
              </div>

              <div>
                <span className="text-cobalt font-medium block uppercase tracking-wider mb-2">
                  02. BACKEND & APIS
                </span>
                <p className="text-white/70 leading-relaxed font-sans">
                  Node.js, Express, Python, Flask, FastAPI, RESTful Services, WebSockets (Sub-50ms)
                </p>
              </div>

              <div>
                <span className="text-cobalt font-medium block uppercase tracking-wider mb-2">
                  03. CLOUD & DEVOPS
                </span>
                <p className="text-white/70 leading-relaxed font-sans">
                  Docker Containerization, AWS (EC2, S3, RDS), GitHub Actions CI/CD, Linux VPS, Nginx, Netlify
                </p>
              </div>

              <div>
                <span className="text-cobalt font-medium block uppercase tracking-wider mb-2">
                  04. AI & STORAGE
                </span>
                <p className="text-white/70 leading-relaxed font-sans">
                  Google Gemini 1.5 Pro, OpenAI API, LangChain, PostgreSQL, Supabase, MongoDB
                </p>
              </div>
            </div>
          </FadeInView>
        )}
      </div>
    </section>
  );
};
