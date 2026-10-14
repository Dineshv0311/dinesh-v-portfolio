"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
          ? "bg-[#07070A]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Corner: Small photo avatar + Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Dinesh V Portfolio"
          >
            {/* Small corner photo avatar */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 ring-1 ring-white/10 group-hover:border-cobalt transition-colors duration-300 flex-shrink-0">
              <Image
                src="/images/myself.jpg"
                alt="Dinesh V Avatar"
                fill
                priority
                className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-sm tracking-tight text-white group-hover:text-cobalt-300 transition-colors">
                  Dinesh V.
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse" />
              </div>
              <span className="text-[11px] text-white/50 tracking-wide font-sans">
                Full-Stack & Systems Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider text-white/70 font-sans uppercase">
            <a
              href="#about"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cobalt hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cobalt hover:after:w-full after:transition-all after:duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cobalt hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Right Action: Classy Pill Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-cobalt hover:text-white font-medium text-xs tracking-wide transition-all duration-300 shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.06] text-white hover:bg-white/[0.12] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[60px] bg-[#07070A]/95 backdrop-blur-xl border-b border-white/[0.08] p-6 z-40">
          <div className="flex flex-col gap-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wide text-white/80 hover:text-white py-2 border-b border-white/[0.06]"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wide text-white/80 hover:text-white py-2 border-b border-white/[0.06]"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wide text-white/80 hover:text-white py-2 border-b border-white/[0.06]"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-2.5 rounded-full bg-white text-black font-medium text-xs"
            >
              Get in Touch ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
