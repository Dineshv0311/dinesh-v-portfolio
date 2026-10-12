"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Check,
  Copy,
  Clock,
  Sparkles,
  ExternalLink,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import confetti from "canvas-confetti";
import { contactInfo, projectTypes, budgetRanges } from "@/lib/data";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: projectTypes[0],
    budget: budgetRanges[1],
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setStatusMessage(
        "Commission inquiry received. Dinesh will review your project and reply within 2 hours."
      );

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FFFFFF", "#00D4FF", "#7C3AED"],
      });

      setFormData({
        name: "",
        email: "",
        projectType: projectTypes[0],
        budget: budgetRanges[1],
        message: "",
      });
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong. Please email directly at dineshv.public@gmail.com."
      );
    }
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Igloo Section Index Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase block mb-3">
            [ 07 // DISPATCH ]
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-none">
            INITIATE <span className="text-aurora">COMMISSION</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/50 max-w-2xl font-mono">
            Have an upcoming company portal, e-commerce project, or website redesign? Transmit your project requirements below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Telemetry & Direct Dispatch Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="igloo-card rounded-2xl p-6 sm:p-8 space-y-6 font-mono">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs text-white/50">
                <span>COMMUNICATION TELEMETRY</span>
                <span className="text-emerald-400">[ READY ]</span>
              </div>

              {/* Status Indicator */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <div>
                    <h4 className="text-[10px] text-white/40 uppercase tracking-widest">
                      AVAILABILITY
                    </h4>
                    <p className="text-xs font-bold text-white uppercase">
                      OPEN FOR SELECT CLIENTS
                    </p>
                  </div>
                </div>

                <div className="text-[10px] text-white/40">
                  <span>{contactInfo.responseRate}</span>
                </div>
              </div>

              {/* Direct Email Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div className="overflow-hidden">
                  <span className="text-[10px] text-white/40 uppercase block mb-0.5">
                    DIRECT DISPATCH
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-xs font-bold text-white hover:text-accent truncate block"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white transition-colors flex items-center gap-1.5 text-[11px]"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-accent" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                  DIRECT VERIFICATION
                </span>

                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-between text-xs text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="w-4 h-4 text-[#0077b5]" />
                    <span>LINKEDIN ARCHIVE</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-between text-xs text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <SiGithub className="w-4 h-4" />
                    <span>GITHUB REPOSITORIES</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Location telemetry */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[10px] text-white/40 uppercase">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>CHENNAI, IN (13.0827° N, 80.2707° E) • REMOTE WORLDWIDE</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Dispatch Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="igloo-card rounded-2xl p-6 sm:p-10 font-mono">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                    TRANSMIT REQUIREMENTS
                  </h3>
                  <p className="text-[11px] text-white/40 mt-1">
                    Fill in project parameters for rapid architectural proposal.
                  </p>
                </div>
                <span className="text-[10px] text-accent tracking-widest">[ DISPATCH TERMINAL ]</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5">
                      CLIENT / ENTITY NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Doe / Company"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-accent text-xs text-white placeholder:text-white/30 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5">
                      COMMUNICATION EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="client@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-accent text-xs text-white placeholder:text-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5">
                      PROJECT CATEGORY
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a10] border border-white/10 focus:border-accent text-xs text-white focus:outline-none cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5">
                      ESTIMATED BUDGET
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a10] border border-white/10 focus:border-accent text-xs text-white focus:outline-none cursor-pointer"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5">
                    TECHNICAL OBJECTIVES & TIMELINE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe target user experience, technical requirements, deadlines..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-accent text-xs text-white placeholder:text-white/30 focus:outline-none transition-colors resize-none font-sans"
                  />
                </div>

                {status !== "idle" && (
                  <div
                    className={`p-3.5 rounded-xl text-xs ${
                      status === "success"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : status === "error"
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "bg-white/[0.05] text-accent border border-white/10"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-accent border border-white hover:border-accent flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg hover:scale-[1.01] active:scale-[0.99]"
                >
                  {status === "loading" ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin text-black" />
                      <span>TRANSMITTING INQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT COMMISSION DISPATCH</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
