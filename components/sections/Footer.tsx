"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Copy, Check, Send, Sparkles } from "lucide-react";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { personalDetails, contactInfo } from "@/lib/data";

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState("");
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setIsSubmitting(true);

    // Fallback direct mailto or instant confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
        `Freelance Project Inquiry from ${formState.name || "Client"}`
      )}&body=${encodeURIComponent(
        `Hi Dinesh,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative min-h-screen w-full bg-black text-white flex flex-col justify-between p-4 sm:p-8 pt-24 border-t border-white/20 font-mono"
    >
      <div className="max-w-6xl mx-auto w-full space-y-16">
        {/* Massive "GET IN TOUCH" Title in Preetham style */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-red text-xs sm:text-sm font-bold uppercase tracking-widest">
            <span>// 03. CONTACT DIRECTORY</span>
            <span className="w-12 h-[1px] bg-red" />
            <span className="text-white/40">COMMISSIONS OPEN</span>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none">
            GET IN TOUCH
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl font-sans leading-relaxed pt-2">
            Have a project in mind, need a high-converting company website, or want to integrate production-ready AI? Let&apos;s engineer something extraordinary together.
          </p>
        </div>

        {/* High-Contrast Brutalist Social Interactive Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* GitHub Block */}
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-white/20 bg-[#0a0a0a] hover:bg-white hover:text-black transition-all flex flex-col justify-between h-40 cursor-pointer shadow-[3px_3px_0px_0px_#ffffff20] hover:shadow-[4px_4px_0px_0px_#FF0000]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-white/50 group-hover:text-black/60">
                // CODE REPOSITORIES
              </span>
              <ArrowUpRight className="w-5 h-5 text-red group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <SiGithub className="w-5 h-5" />
                <span className="text-xl font-bold uppercase tracking-tight">GITHUB</span>
              </div>
              <span className="text-xs text-white/50 group-hover:text-black/70">
                @Dineshv0311
              </span>
            </div>
          </a>

          {/* LinkedIn Block */}
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-white/20 bg-[#0a0a0a] hover:bg-white hover:text-black transition-all flex flex-col justify-between h-40 cursor-pointer shadow-[3px_3px_0px_0px_#ffffff20] hover:shadow-[4px_4px_0px_0px_#FF0000]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-white/50 group-hover:text-black/60">
                // PROFESSIONAL NETWORK
              </span>
              <ArrowUpRight className="w-5 h-5 text-red group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FaLinkedin className="w-5 h-5" />
                <span className="text-xl font-bold uppercase tracking-tight">LINKEDIN</span>
              </div>
              <span className="text-xs text-white/50 group-hover:text-black/70">
                in/dinesh-v-486367289
              </span>
            </div>
          </a>

          {/* Email / Copy Block */}
          <div
            onClick={handleCopyEmail}
            className="group p-6 border border-white/20 bg-[#0a0a0a] hover:bg-red hover:text-black transition-all flex flex-col justify-between h-40 cursor-pointer shadow-[3px_3px_0px_0px_#ffffff20] hover:shadow-[4px_4px_0px_0px_#ffffff]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-white/50 group-hover:text-black/60">
                // DIRECT TRANSMISSION
              </span>
              {copied ? (
                <span className="text-[10px] bg-black text-white px-2 py-0.5 font-bold">COPIED!</span>
              ) : (
                <Copy className="w-4 h-4 text-red group-hover:text-black" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <SiGmail className="w-5 h-5" />
                <span className="text-xl font-bold uppercase tracking-tight">EMAIL</span>
              </div>
              <span className="text-xs text-white/50 group-hover:text-black/90 truncate block">
                {contactInfo.email}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Message Dispatch Terminal */}
        <div className="p-6 sm:p-8 border border-white/20 bg-[#070104]">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <span className="text-xs text-red font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
              QUICK DISPATCH TERMINAL
            </span>
            <span className="text-[10px] text-white/40 uppercase">
              RESPONDS WITHIN 2 HOURS
            </span>
          </div>

          {isSubmitted ? (
            <div className="p-6 bg-red/10 border border-red/30 text-white text-center space-y-2">
              <p className="font-bold text-base uppercase text-red">MESSAGE DISPATCHED SUCCESSFULLY</p>
              <p className="text-xs text-white/70">
                Your email client has opened. You can also directly reach me at <span className="text-red underline font-bold">{contactInfo.email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-white/50 uppercase tracking-widest mb-1.5">
                    NAME // CLIENT ID
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe / Company Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-black border border-white/20 p-3 text-sm text-white placeholder-white/30 focus:border-red focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-white/50 uppercase tracking-widest mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-black border border-white/20 p-3 text-sm text-white placeholder-white/30 focus:border-red focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-white/50 uppercase tracking-widest mb-1.5">
                  PROJECT SPECIFICATIONS / SCOPE
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your website requirements, desired timeline, or system goals..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-black border border-white/20 p-3 text-sm text-white placeholder-white/30 focus:border-red focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red text-black font-mono font-bold text-sm sm:text-base py-3 px-6 hover:bg-white hover:text-black transition-colors uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>DISPATCHING...</span>
                ) : (
                  <>
                    <span>TRANSMIT MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Telemetry Footer Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/50">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-red text-black flex items-center justify-center font-bold text-xs">
              DV
            </div>
            <div>
              <span className="text-white font-bold tracking-wider">DINESH V</span>
              <span className="text-white/30 ml-2">// CHENNAI, INDIA</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>
              LOCAL TIME: <span className="text-red font-bold">{localTime || "12:00:00"} IST</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-red font-bold">● 100% CLIENT FOCUS</span>
            <span className="text-white/20">•</span>
            <span>NO GHOSTING GUARANTEE</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 border border-white/20 hover:border-white text-white hover:bg-white/10 transition-colors uppercase text-[11px] cursor-pointer"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-red" />
            </button>
          </div>
        </div>

        {/* Huge Monolithic Dinesh V Watermark */}
        <div className="pt-8 pb-4 flex flex-col items-center select-none pointer-events-none">
          <span className="font-mono font-black text-[12vw] tracking-[0.2em] uppercase text-white/[0.04] leading-none whitespace-nowrap">
            DINESH V
          </span>
        </div>
      </div>
    </footer>
  );
};
