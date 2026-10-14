"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { contactInfo } from "@/lib/data";
import { FadeInView } from "../ui/MotionText";

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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
        `Project Inquiry from ${formState.name || "Client"}`
      )}&body=${encodeURIComponent(
        `Hi Dinesh,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative min-h-screen w-full bg-[#07070A] text-white pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden flex flex-col justify-between"
    >
      {/* Background Aura */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <Image
          src="/images/aesthetic/clean_aura_square.jpg"
          alt="Aura Texture"
          fill
          className="object-cover object-bottom filter blur-[40px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-16">
        {/* Section Tag */}
        <FadeInView delay={0.1}>
          <div className="flex items-center gap-2 text-xs font-sans tracking-widest text-cobalt uppercase">
            <span>// 03. CONTACT & COMMISSIONS</span>
          </div>
        </FadeInView>

        {/* Big Classy Headline */}
        <FadeInView delay={0.2} className="space-y-4 max-w-3xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Let&apos;s build something exceptional together<span className="text-cobalt">.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 font-sans leading-relaxed">
            Have a project in mind, need a production company portal, or looking to integrate AI into your product? I respond to all inquiries within 2 hours.
          </p>
        </FadeInView>

        {/* Contact Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email Block */}
          <FadeInView delay={0.3}>
            <div
              onClick={handleCopyEmail}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cobalt/50 transition-all cursor-pointer group flex flex-col justify-between h-44"
            >
              <div className="flex items-center justify-between text-xs text-white/40 uppercase tracking-wider">
                <span>DIRECT EMAIL</span>
                {copied ? (
                  <span className="text-cobalt text-[10px] font-semibold bg-cobalt/15 px-2 py-0.5 rounded-full">
                    COPIED
                  </span>
                ) : (
                  <Copy className="w-4 h-4 text-white/40 group-hover:text-cobalt transition-colors" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <SiGmail className="w-5 h-5 text-cobalt" />
                  <span className="text-lg font-semibold text-white">Email</span>
                </div>
                <span className="text-xs text-white/60 group-hover:text-white transition-colors truncate block">
                  {contactInfo.email}
                </span>
              </div>
            </div>
          </FadeInView>

          {/* LinkedIn Block */}
          <FadeInView delay={0.4}>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cobalt/50 transition-all cursor-pointer group flex flex-col justify-between h-44"
            >
              <div className="flex items-center justify-between text-xs text-white/40 uppercase tracking-wider">
                <span>PROFESSIONAL</span>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-cobalt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <FaLinkedin className="w-5 h-5 text-cobalt" />
                  <span className="text-lg font-semibold text-white">LinkedIn</span>
                </div>
                <span className="text-xs text-white/60 group-hover:text-white transition-colors truncate block">
                  in/dinesh-v-486367289
                </span>
              </div>
            </a>
          </FadeInView>

          {/* GitHub Block */}
          <FadeInView delay={0.5}>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cobalt/50 transition-all cursor-pointer group flex flex-col justify-between h-44"
            >
              <div className="flex items-center justify-between text-xs text-white/40 uppercase tracking-wider">
                <span>OPEN SOURCE</span>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-cobalt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <SiGithub className="w-5 h-5 text-cobalt" />
                  <span className="text-lg font-semibold text-white">GitHub</span>
                </div>
                <span className="text-xs text-white/60 group-hover:text-white transition-colors truncate block">
                  @Dineshv0311
                </span>
              </div>
            </a>
          </FadeInView>
        </div>

        {/* Quick Message Dispatch Terminal */}
        <FadeInView delay={0.6} className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6 text-xs">
            <span className="text-white font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
              Quick Project Inquiry
            </span>
            <span className="text-white/40 font-sans">
              Response SLA: &lt; 2 hours
            </span>
          </div>

          {isSubmitted ? (
            <div className="p-6 rounded-xl bg-cobalt/10 border border-cobalt/30 text-white text-center space-y-2">
              <p className="font-semibold text-base text-cobalt-200">Inquiry Dispatched Successfully</p>
              <p className="text-xs text-white/70 font-sans">
                Your email client has opened. You can also directly reach me anytime at <span className="text-white underline">{contactInfo.email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-white/50 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-white/30 focus:border-cobalt focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans text-white/50 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-white/30 focus:border-cobalt focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans text-white/50 uppercase tracking-wider mb-2">
                  Project Scope / Timeline
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your website requirements, target deadline, or technical scope..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-white/30 focus:border-cobalt focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full bg-white text-black hover:bg-cobalt hover:text-white font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Dispatching...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </FadeInView>

        {/* Telemetry Footer Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/50 font-sans">
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold tracking-tight">Dinesh V.</span>
            <span className="text-white/20">•</span>
            <span>Chennai, India</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span>
              Local Time: <span className="text-white font-medium">{localTime || "12:00:00"} IST</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-cobalt-300">100% Client Focus</span>
            <span className="text-white/20">•</span>
            <span>All Rights Reserved &copy; 2026</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 hover:border-white text-white/80 hover:text-white transition-colors text-xs cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cobalt" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
