"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { personalDetails } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

const iglooNavItems = [
  { name: "MANIFESTO", href: "#about" },
  { name: "CAPABILITIES", href: "#skills" },
  { name: "VENTURES", href: "#projects" },
  { name: "COMMISSIONS", href: "#services" },
  { name: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#050508]/85 dark:bg-[#050508]/85 light:bg-[#F8F9FA]/90 backdrop-blur-xl border-b border-white/[0.08]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark in Igloo style */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Dinesh V Home"
          >
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/20 flex items-center justify-center font-mono font-bold text-xs tracking-wider text-white group-hover:border-accent transition-colors">
              DV
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-xs tracking-[0.2em] uppercase text-white dark:text-white light:text-slate-900">
                DINESH V.
              </span>
              <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase hidden sm:inline-block">
                STUDIO // 13.0827° N
              </span>
            </div>
          </a>

          {/* Center Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-pill border border-white/10">
            {iglooNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-1 rounded-full text-[11px] font-mono tracking-widest text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Status Badge & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>COMMISSIONS OPEN</span>
            </div>

            <ThemeToggle />

            <a
              href="#contact"
              className="relative px-4 py-2 rounded-full text-xs font-mono tracking-wider font-semibold uppercase text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-accent transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,212,255,0.15)] group"
            >
              <span>DISPATCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden fixed inset-x-0 top-[65px] bg-[#050508]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 z-40"
          >
            <div className="flex flex-col gap-4 font-mono">
              {iglooNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm tracking-widest text-white/80 hover:text-white border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full text-center text-xs tracking-widest font-semibold uppercase text-white bg-accent/20 border border-accent/40 flex items-center justify-center gap-2"
                >
                  <span>INITIATE COMMISSION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
