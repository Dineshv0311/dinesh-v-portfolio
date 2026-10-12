"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { testimonialsData } from "@/lib/data";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06] bg-igloo-grid">
      <div className="max-w-7xl mx-auto">
        {/* Igloo Section Index Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase block mb-3">
            [ 06 // ENDORSEMENTS ]
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-none">
            CLIENT <span className="text-aurora">TESTIMONIALS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/50 max-w-2xl font-mono">
            Direct feedback from startup founders, technical leads, and operations directors who partnered with the studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="igloo-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-white/40 uppercase">
                    [ REVIEW 0{idx + 1} ]
                  </span>
                </div>

                <p className="text-sm text-white/80 italic font-sans leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-white/50 font-mono">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>

                <div className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
                  VERIFIED
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
