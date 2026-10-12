"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  Activity,
  ShoppingCart,
  Building2,
  MessageSquare,
  Sparkles,
  Layers,
} from "lucide-react";
import { projectsData } from "@/lib/data";
import { ProjectItem } from "@/lib/types";
import { Card3D } from "../ui/Card3D";

// Igloo Monolithic Venture Banner Visual
const ProjectVisual: React.FC<{ project: ProjectItem; index: number }> = ({
  project,
  index,
}) => {
  const getBannerDetails = (id: string) => {
    switch (id) {
      case "edubot-platform":
        return {
          gradient: "from-[#0369a1]/25 via-[#0284c7]/10 to-transparent",
          Icon: Building2,
          iconColor: "text-sky-400",
          codeNum: "01",
        };
      case "cryptotransfer-ecommerce":
        return {
          gradient: "from-[#059669]/25 via-[#10b981]/10 to-transparent",
          Icon: ShoppingCart,
          iconColor: "text-emerald-400",
          codeNum: "02",
        };
      case "livesync-chat":
        return {
          gradient: "from-[#7c3aed]/25 via-[#9333ea]/10 to-transparent",
          Icon: MessageSquare,
          iconColor: "text-purple-400",
          codeNum: "03",
        };
      default:
        return {
          gradient: "from-accent/20 to-transparent",
          Icon: Sparkles,
          iconColor: "text-accent",
          codeNum: `0${index + 1}`,
        };
    }
  };

  const { gradient, Icon, iconColor, codeNum } = getBannerDetails(project.id);

  return (
    <div
      className={`relative h-48 sm:h-52 w-full overflow-hidden rounded-xl bg-gradient-to-br ${gradient} border border-white/10 flex flex-col justify-between p-4 group-hover:scale-[1.02] transition-transform duration-500`}
    >
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between z-10 font-mono text-[10px]">
        <div className="flex items-center gap-2 text-white/50">
          <span className="text-accent">[ VENTURE {codeNum} ]</span>
          <span className="text-white/20">//</span>
          <span className="tracking-widest">{project.id}.app</span>
        </div>

        {project.metrics && (
          <div className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-emerald-400 flex items-center gap-1 shadow-sm">
            <Activity className="w-3 h-3 text-emerald-400" />
            <span className="truncate max-w-[170px]">{project.metrics}</span>
          </div>
        )}
      </div>

      {/* Central icon and venture title */}
      <div className="relative my-auto flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/15 flex items-center justify-center shadow-lg group-hover:border-accent/60 transition-colors">
          <Icon className={`w-6 h-6 ${iconColor} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        <span className="mt-2 text-base font-mono font-bold text-white uppercase tracking-wider">
          {project.title}
        </span>
        <span className="text-xs font-mono text-white/60 line-clamp-1 max-w-[280px]">
          {project.tagline}
        </span>
      </div>

      {/* Bottom Category Badge */}
      <div className="flex items-center justify-between text-[11px] font-mono z-10">
        <span className="px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white/80 border border-white/10">
          {project.categories[0]}
        </span>
        <span className="px-2.5 py-0.5 rounded-md bg-white/[0.08] text-accent font-semibold border border-white/10">
          DEPLOYED
        </span>
      </div>

      {/* Subtle grid line overlay */}
      <div className="absolute inset-0 bg-igloo-grid opacity-30 pointer-events-none" />
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterTabs = [
    "All",
    "Company Websites",
    "E-Commerce & Payments",
    "Full-Stack SaaS",
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.categories.some(
            (c) => c.toLowerCase() === selectedFilter.toLowerCase()
          )
        );

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Igloo Section Index Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase block mb-3">
            [ 03 // VENTURES ]
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-none">
            FLAGSHIP <span className="text-aurora">CLIENT WORK</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/50 max-w-2xl font-mono">
            Handcrafted company portals, frictionless e-commerce checkouts, and real-time customer systems engineered to win clients and scale smoothly.
          </p>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                selectedFilter === tab
                  ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-white/60 border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3-Column Venture Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card3D intensity={10} className="h-full">
                  <div className="igloo-card rounded-2xl p-5 flex flex-col justify-between h-full group">
                    <div>
                      {/* Visual Banner */}
                      <ProjectVisual project={project} index={idx} />

                      {/* Content */}
                      <div className="mt-5">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-mono text-lg font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        <p className="mt-2 text-xs sm:text-sm text-white/60 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Highlights list */}
                        <div className="mt-4 space-y-1.5 pt-3 border-t border-white/[0.08] text-[11px] text-white/50 font-mono">
                          {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-1.5">
                              <span className="text-accent mt-0.5">▸</span>
                              <span className="line-clamp-1">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] text-white/80 border border-white/[0.08]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono font-medium text-white flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>SOURCE CODE</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 rounded-lg bg-white hover:bg-accent text-black text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                        >
                          <span>EXPLORE</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
