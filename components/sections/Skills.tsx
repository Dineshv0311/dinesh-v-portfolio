"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code2, Server, Cpu, Database, Wrench } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { SkillIcon } from "../ui/SkillIcon";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Code2,
  Backend: Server,
  "AI & ML": Cpu,
  "DevOps & Cloud": Terminal,
  Databases: Database,
  "Tools & Workflow": Wrench,
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const displayedCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06] bg-igloo-grid">
      <div className="max-w-7xl mx-auto">
        {/* Igloo Section Index Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase block mb-3">
            [ 02 // CAPABILITIES ]
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-none">
            TECHNICAL <span className="text-aurora">ARSENAL</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/50 max-w-2xl font-mono">
            A comprehensive matrix of modern frameworks, cloud architecture, and database backends tuned for speed, security, and zero downtime.
          </p>
        </div>

        {/* Minimalist Tabs in Igloo pill style */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeTab === cat
                  ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-white/60 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedCategories.map((categoryGroup, catIdx) => {
              const CatIcon = categoryIcons[categoryGroup.category] || Code2;

              return (
                <motion.div
                  key={categoryGroup.category}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: catIdx * 0.06 }}
                  className="igloo-card rounded-2xl p-6 relative group flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white/[0.05] text-accent border border-white/10">
                          <CatIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                            [ STACK 0{catIdx + 1} ]
                          </span>
                          <h3 className="font-mono font-bold text-base uppercase text-white tracking-wider">
                            {categoryGroup.category}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-white/40">
                        {categoryGroup.skills.length} TOOLS
                      </span>
                    </div>

                    <p className="text-xs text-white/50 mt-3 mb-6 line-clamp-2 font-mono">
                      {categoryGroup.description}
                    </p>

                    {/* Skill Items */}
                    <div className="space-y-4">
                      {categoryGroup.skills.map((skill, sIdx) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="flex items-center gap-2 text-white/90">
                              <SkillIcon name={skill.iconName} className="w-3.5 h-3.5 text-accent" />
                              <span>{skill.name}</span>
                              {skill.featured && (
                                <span className="px-1.5 py-0.2 text-[8px] rounded bg-accent/20 text-accent font-semibold tracking-wider">
                                  CORE
                                </span>
                              )}
                            </span>
                            <span className="text-white/40">{skill.level}%</span>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full h-1 rounded-full bg-white/[0.06] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.1 + sIdx * 0.04,
                                ease: "easeOut",
                              }}
                              className={`h-full rounded-full ${
                                skill.featured
                                  ? "bg-gradient-to-r from-accent to-[#7c3aed]"
                                  : "bg-white/40"
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-white/40">
                    <span>STATUS: PRODUCTION PROVEN</span>
                    <span className="text-accent">● VERIFIED</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
