"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, Activity, Sparkles, Layers } from "lucide-react";
import { projectsData } from "@/lib/data";
import { ProjectItem } from "@/lib/types";
import { FadeInView } from "../ui/MotionText";

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    { label: "All Projects", value: "ALL" },
    { label: "Cloud & SaaS", value: "CLOUD" },
    { label: "AI & Automation", value: "AI" },
    { label: "Web3 & Payments", value: "WEB3" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "CLOUD")
      return (
        project.categories.includes("Company Websites") ||
        project.categories.includes("Full-Stack SaaS") ||
        project.categories.includes("Cloud & Systems")
      );
    if (activeCategory === "AI")
      return project.categories.includes("AI & Automation");
    if (activeCategory === "WEB3")
      return project.categories.includes("E-Commerce & Payments");
    return true;
  });

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-[#07070A] text-white py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient aura */}
      <div className="absolute left-1/4 bottom-1/4 w-[600px] h-[600px] bg-cobalt/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
          <div>
            <FadeInView delay={0.1}>
              <div className="flex items-center gap-2 mb-3 text-xs font-sans tracking-widest text-cobalt uppercase">
                <span>// 02. SELECTED WORK</span>
              </div>
            </FadeInView>
            <FadeInView delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Featured Case Studies
              </h2>
            </FadeInView>
          </div>

          {/* Minimalist Filter Pills */}
          <FadeInView delay={0.3} className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`text-xs px-4 py-2 rounded-full font-medium tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-white text-black shadow-sm"
                    : "bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </FadeInView>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const formattedIndex = String(idx + 1).padStart(2, "0");

            return (
              <FadeInView
                key={project.id}
                delay={0.15 * (idx % 2 + 1)}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-cobalt/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle cobalt aura on card corner */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cobalt/15 rounded-full blur-[60px] group-hover:bg-cobalt/30 transition-all duration-500 pointer-events-none" />

                {/* Top Metadata Line */}
                <div>
                  <div className="flex items-center justify-between text-xs text-white/40 mb-6 pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-cobalt font-semibold">
                      [{formattedIndex}]
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] text-white/80 uppercase tracking-wider">
                      {project.categories[0]}
                    </span>
                  </div>

                  {/* Project Title & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cobalt-200 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cobalt font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/70 font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights / Metrics */}
                  {project.metrics && (
                    <div className="mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5 text-xs text-white/80 font-sans">
                      <span className="w-2 h-2 rounded-full bg-cobalt" />
                      <span className="text-white/40">VERIFIED SPEC:</span>
                      <span className="font-medium text-white">{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-sans px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-white text-black hover:bg-cobalt hover:text-white font-medium text-xs tracking-wide transition-all duration-300"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/10 font-medium text-xs tracking-wide transition-all duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
};
