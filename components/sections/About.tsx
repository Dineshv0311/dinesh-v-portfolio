"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Database, Cloud, CheckCircle, Sparkles } from "lucide-react";

export const About: React.FC = () => {
  const [peeled, setPeeled] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4 py-24 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-mono font-bold tracking-tight uppercase text-white mb-8 border-b border-white/20 pb-2 text-center w-full">
          ABOUT
        </h2>

        {/* Big Editorial Quote in Georgia serif */}
        <div className="w-full text-center my-6">
          <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl leading-snug text-white/90 max-w-3xl mx-auto">
            &ldquo;I build resilient web platforms and AI systems that turn complex architecture into fast, clean, and high-converting products.&rdquo;
          </blockquote>
        </div>

        {/* Bio Paragraphs */}
        <div className="max-w-3xl w-full mt-10 space-y-6 text-sm sm:text-base text-white/70 font-sans leading-relaxed">
          <p>
            I&apos;m <strong className="text-white font-semibold">Dinesh V</strong>, a Computer Science undergraduate at <strong className="text-white font-semibold">VIT Chennai</strong> specializing in <strong className="text-white font-semibold">AI & Robotics</strong>.
          </p>
          <p>
            On the development side, I&apos;m an end-to-end full-stack and systems builder. I engineer complete web applications from interactive React/Next.js interfaces to robust Node.js/Python backends, secure PostgreSQL/Supabase databases, and production cloud infrastructure (Docker, AWS, Linux VPS, Nginx).
          </p>
          <p>
            I don&apos;t just follow tutorials — I ship real, commercial products. Whether you need an enterprise company assessment portal, a friction-free Web3 e-commerce payment checkout, or an automated LLM integration, I deliver clean, documented, and battle-tested code on strict deadlines.
          </p>
        </div>

        {/* Interactive PEEL OFF! / UNLOCK Button in Preetham style */}
        <div className="my-10 flex flex-col items-center">
          <button
            onClick={() => setPeeled(!peeled)}
            className="bg-red text-black font-mono font-bold text-lg sm:text-xl p-3 px-8 hover:bg-white transition-colors cursor-pointer uppercase tracking-wider"
          >
            {peeled ? "COLLAPSE SPECS [-]" : "PEEL OFF! [+]"}
          </button>
          <span className="text-[10px] font-mono text-white/40 mt-2 uppercase tracking-widest">
            {peeled ? "System specifications unlocked" : "Click to inspect engineering telemetry"}
          </span>
        </div>

        {/* Revealed System Specs when peeled */}
        {peeled && (
          <div className="w-full max-w-3xl p-6 bg-[#0a0a0a] border border-white/20 font-mono text-xs animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/40 uppercase">
              <span>ENGINEERING STACK // VERIFIED</span>
              <span className="text-red font-bold">● ACTIVE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-3 bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-red font-bold uppercase block">FRONTEND ARCHITECTURE</span>
                <p className="text-white/70">Next.js 14, React 18, TypeScript, Tailwind CSS, Three.js, Responsive UI/UX</p>
              </div>

              <div className="p-3 bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-red font-bold uppercase block">BACKEND & APIS</span>
                <p className="text-white/70">Node.js, Express, Python, Flask, FastAPI, RESTful Services, WebSockets</p>
              </div>

              <div className="p-3 bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-red font-bold uppercase block">CLOUD & DEVOPS</span>
                <p className="text-white/70">Docker, GitHub Actions CI/CD, AWS (EC2/S3/RDS), Linux VPS, Nginx, Netlify</p>
              </div>

              <div className="p-3 bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-red font-bold uppercase block">AI & DATABASES</span>
                <p className="text-white/70">Google Gemini API, OpenAI, LangChain, PostgreSQL, Supabase, MongoDB</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
              <span>CLEAN CODE GUARANTEE: ZERO TECHNICAL DEBT</span>
              <span className="text-white">CHENNAI, IN</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
