"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { personalDetails, contactInfo } from "@/lib/data";

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030305] pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-white/50 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-white/[0.06]">
        {/* Left: Studio details & live local time */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase">
            <span>{personalDetails.name}</span>
            <span className="text-accent">//</span>
            <span className="text-white/40 text-xs">WEB ARCHITECT</span>
          </div>

          <div className="text-xs text-white/40 space-y-1">
            <p>CHENNAI, INDIA • 13.0827° N, 80.2707° E</p>
            <p className="text-white/60">
              LOCAL TIME: <span className="text-accent">{localTime || "12:00:00"} IST</span> (UTC+05:30)
            </p>
          </div>
        </div>

        {/* Center: Social Links in Igloo pill style */}
        <div className="flex items-center gap-3">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white text-xs text-white transition-all flex items-center gap-2"
          >
            <SiGithub className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-[#0077b5]/20 border border-white/10 hover:border-[#0077b5]/60 text-xs text-white transition-all flex items-center gap-2"
          >
            <FaLinkedin className="w-3.5 h-3.5 text-[#0077b5]" />
            <span>LINKEDIN</span>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-accent text-xs text-white transition-all flex items-center gap-2"
          >
            <SiGmail className="w-3.5 h-3.5 text-accent" />
            <span>EMAIL</span>
          </a>
        </div>

        {/* Right: Return to top button */}
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs text-white transition-all cursor-pointer hover:border-accent"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>
      </div>

      {/* Monumental Igloo Typography Watermark */}
      <div className="max-w-7xl mx-auto pt-12 pb-4 flex flex-col items-center select-none pointer-events-none">
        <span className="font-mono font-black text-[12vw] tracking-[0.2em] uppercase text-white/[0.03] leading-none whitespace-nowrap">
          DINESH V
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/30 pt-4">
        <span>© {new Date().getFullYear()} DINESH V. ALL RIGHTS RESERVED.</span>
        <span>DEPLOYED ON NETLIFY // CLOUD NATIVE</span>
      </div>
    </footer>
  );
};
