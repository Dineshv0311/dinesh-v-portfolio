"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  Cloud,
  Palette,
  Cpu,
  Wrench,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { servicesData } from "@/lib/data";
import { Card3D } from "../ui/Card3D";

const serviceIconMap: Record<string, React.ElementType> = {
  Globe,
  Bot,
  Cloud,
  Palette,
  Cpu,
  Wrench,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06] bg-igloo-grid">
      <div className="max-w-7xl mx-auto">
        {/* Igloo Section Index Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase block mb-3">
            [ 04 // COMMISSIONS ]
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-none">
            AVAILABLE <span className="text-aurora">DISCIPLINES</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/50 max-w-2xl font-mono">
            Fixed transparent pricing, rapid turnaround milestones, and end-to-end delivery tailored to your brand&apos;s commercial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = serviceIconMap[service.iconName] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <Card3D intensity={10} className="h-full">
                  <div
                    className={`igloo-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full group relative ${
                      service.popular ? "border-accent/40" : ""
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-accent text-black text-[9px] font-mono font-bold tracking-widest uppercase shadow-md">
                        FEATURED COMMISSION
                      </div>
                    )}

                    <div>
                      {/* Top icon and index */}
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-accent">
                          <IconComponent className="w-5 h-5" />
                        </div>

                        <div className="text-right font-mono">
                          <span className="text-[10px] text-white/40 uppercase block tracking-wider">
                            STARTING FROM
                          </span>
                          <span className="text-2xl font-black text-white">
                            ${service.startingPrice}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <span className="mt-5 text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                        [ TIER 0{idx + 1} ]
                      </span>
                      <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                        {service.description}
                      </p>

                      {/* Delivery badge */}
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-white/50">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        <span>ESTIMATED DELIVERY: {service.deliveryTime}</span>
                      </div>

                      {/* Features list */}
                      <div className="mt-5 space-y-2 pt-4 border-t border-white/[0.08]">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-white/70"
                          >
                            <span className="text-accent mt-0.5 text-xs font-mono">▸</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 pt-4 border-t border-white/[0.08]">
                      <a
                        href="#contact"
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-mono tracking-wider uppercase font-semibold text-white bg-white/[0.05] hover:bg-white hover:text-black border border-white/15 hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>DISPATCH INQUIRY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
