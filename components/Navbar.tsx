"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between font-mono">
          {/* Logo / Monogram in Brutalist style */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Dinesh V Home"
          >
            <div className="w-8 h-8 bg-red text-black flex items-center justify-center font-bold text-sm tracking-wider group-hover:bg-white transition-colors">
              DV
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs tracking-[0.2em] uppercase text-white group-hover:text-red transition-colors">
                DINESH V.
              </span>
              <span className="text-[9px] tracking-widest text-white/50 uppercase hidden sm:inline-block">
                SYS // DEV
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-white/70">
            <a
              href="#about"
              className="hover:text-white hover:bg-white/10 px-3 py-1 transition-colors"
            >
              [ ABOUT ]
            </a>
            <a
              href="#projects"
              className="hover:text-white hover:bg-white/10 px-3 py-1 transition-colors"
            >
              [ PROJECTS ]
            </a>
            <a
              href="#contact"
              className="hover:text-white hover:bg-white/10 px-3 py-1 transition-colors"
            >
              [ CONTACT ]
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-red text-black font-bold text-xs uppercase tracking-wider px-4 py-2 hover:bg-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white/10 text-white hover:bg-red hover:text-black transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[56px] bg-black border-b border-white/20 p-6 font-mono z-40">
          <div className="flex flex-col gap-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest text-white hover:text-red py-2 border-b border-white/10 flex items-center justify-between"
            >
              <span>ABOUT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest text-white hover:text-red py-2 border-b border-white/10 flex items-center justify-between"
            >
              <span>PROJECTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest text-white hover:text-red py-2 border-b border-white/10 flex items-center justify-between"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-red text-black text-center font-bold text-xs uppercase tracking-wider py-3 mt-2 hover:bg-white transition-colors"
            >
              GET IN TOUCH ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
