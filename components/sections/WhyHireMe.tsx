"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Code2, MessageSquare, RotateCcw, ShieldCheck } from "lucide-react";
import { whyHireMeData } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Code2,
  MessageSquare,
  RotateCcw,
};

export const WhyHireMe: React.FC = () => {
  return (
    <section id="why-me" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Igloo Section Index Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase block mb-3">
            [ 05 // EXECUTION PILLARS ]
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-none">
            CORE <span className="text-aurora">ADVANTAGES</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/50 max-w-2xl font-mono">
            Direct collaboration with an engineer who treats your product with founder-level accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyHireMeData.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="igloo-card rounded-2xl p-6 relative group font-mono flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] tracking-widest text-white/40 uppercase">
                      [ PILLAR 0{idx + 1} ]
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-accent">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="inline-block px-2 py-0.5 rounded bg-accent/15 text-accent text-[9px] font-bold uppercase tracking-wider mb-2">
                    {item.highlight}
                  </span>

                  <h3 className="text-base font-bold uppercase tracking-wider text-white mt-1">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs text-white/60 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[10px] text-white/30 uppercase tracking-widest">
                  ASSURANCE: 100% GUARANTEED
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
