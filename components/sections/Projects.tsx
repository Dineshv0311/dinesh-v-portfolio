"use client";

import React, { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Activity, Terminal, ShieldCheck, Zap, Layers } from "lucide-react";
import { projectsData } from "@/lib/data";
import { ProjectItem } from "@/lib/types";
import { ScrambleText } from "../ui/ScrambleText";

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [hoveredProject, setHoveredProject] = useState<ProjectItem>(projectsData[0]);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(projectsData[0].id);

  const categories = [
    { label: "ALL", value: "ALL" },
    { label: "WEB / CLOUD", value: "CLOUD" },
    { label: "AI & AUTOMATION", value: "AI" },
    { label: "WEB3 & COMMERCE", value: "WEB3" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "CLOUD")
      return (
        project.categories.includes("Company Websites") ||
        project.categories.includes("Full-Stack SaaS") ||
        project.categories.includes("Cloud & Systems")
      );
    if (activeCategory === "AI")
      return project.categories.includes("AI & Automation");
    if (activeCategory === "WEB3")
      return project.categories.includes("E-Commerce & Payments");
    return true;
  });

  // Ensure hoveredProject remains valid if category filter changes
  const currentActive = filteredProjects.some((p) => p.id === hoveredProject.id)
    ? hoveredProject
    : filteredProjects[0] || projectsData[0];

  // Visual schematic generator tailored to each project
  const renderProjectVisual = (project: ProjectItem) => {
    switch (project.id) {
      case "edubot-platform":
        return (
          <div className="relative w-full h-44 sm:h-52 bg-[#080205] border border-white/10 p-4 font-mono text-[11px] overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-white/40 border-b border-white/10 pb-2">
              <span className="text-red font-bold">AWS_INFRASTRUCTURE // LIVE</span>
              <span>DEPLOY: MULTI-STAGE DOCKER</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto text-white/80">
              <div className="p-2 bg-white/[0.04] border border-white/5">
                <span className="text-white/40 block text-[9px]">CLUSTER NODE</span>
                <span className="text-white font-bold">● EC2 t3.medium</span>
              </div>
              <div className="p-2 bg-white/[0.04] border border-white/5">
                <span className="text-white/40 block text-[9px]">DATABASE</span>
                <span className="text-white font-bold">● RDS PostgreSQL</span>
              </div>
              <div className="p-2 bg-white/[0.04] border border-white/5">
                <span className="text-white/40 block text-[9px]">STATIC ASSETS</span>
                <span className="text-white font-bold">● AWS S3 + CDN</span>
              </div>
              <div className="p-2 bg-white/[0.04] border border-white/5">
                <span className="text-white/40 block text-[9px]">PIPELINE</span>
                <span className="text-red font-bold">● GitHub Actions CI</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-white/50 pt-2 border-t border-white/10">
              <span>LATENCY: 18ms</span>
              <span className="text-red font-bold">UPTIME: 99.98%</span>
            </div>
          </div>
        );

      case "cryptotransfer-ecommerce":
        return (
          <div className="relative w-full h-44 sm:h-52 bg-[#080205] border border-white/10 p-4 font-mono text-[11px] overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-white/40 border-b border-white/10 pb-2">
              <span className="text-red font-bold">WEB3_CHECKOUT_GATEWAY</span>
              <span>ZERO GATEWAY FEES</span>
            </div>
            <div className="my-auto space-y-2">
              <div className="flex items-center justify-between p-2 bg-red/10 border border-red/30 text-white">
                <span className="text-white/80">TX_STATE: CONFIRMED_ON_CHAIN</span>
                <span className="font-bold text-red">0.084 ETH</span>
              </div>
              <div className="text-[10px] text-white/60 space-y-1">
                <p>WALLET: 0x71C...b29F (MetaMask Connected)</p>
                <p>CONTRACT: ERC-20 Verified Settlement Ledger</p>
                <p>FEE REDUCTION: 100% vs Stripe / PayPal</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-white/50 pt-2 border-t border-white/10">
              <span>SECURITY: AUDITED CONTRACT</span>
              <span className="text-red font-bold">STATUS: SETTLED</span>
            </div>
          </div>
        );

      case "livesync-chat":
        return (
          <div className="relative w-full h-44 sm:h-52 bg-[#080205] border border-white/10 p-4 font-mono text-[11px] overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-white/40 border-b border-white/10 pb-2">
              <span className="text-red font-bold">WEBSOCKET_REALTIME_STREAM</span>
              <span>PORT: 8080 // SECURE WSS</span>
            </div>
            <div className="my-auto space-y-1.5 text-[10px]">
              <div className="p-1.5 bg-white/[0.03] border-l-2 border-white/40 text-white/80">
                &gt; CLIENT_CONNECTED: JWT Session Verified [User #842]
              </div>
              <div className="p-1.5 bg-white/[0.03] border-l-2 border-red text-white">
                &gt; MSG_BROADCAST: Sub-50ms bi-directional delivery
              </div>
              <div className="p-1.5 bg-white/[0.03] border-l-2 border-white/20 text-white/70">
                &gt; PRESENCE_SYNC: Heartbeat ACK 200 OK
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-white/50 pt-2 border-t border-white/10">
              <span>LATENCY: 34ms</span>
              <span className="text-white font-bold">SOCKETS: 1,240 ACTIVE</span>
            </div>
          </div>
        );

      case "codemind-ai":
        return (
          <div className="relative w-full h-44 sm:h-52 bg-[#080205] border border-white/10 p-4 font-mono text-[11px] overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-white/40 border-b border-white/10 pb-2">
              <span className="text-red font-bold">GEMINI_1.5_PRO // AST REASONING</span>
              <span>SECURITY & AUDIT ENGINE</span>
            </div>
            <div className="my-auto space-y-1.5 text-[10px]">
              <div className="p-1.5 bg-red/10 border-l-2 border-red text-white">
                SCAN COMPLETE: 0 critical vulnerabilities found
              </div>
              <div className="p-1.5 bg-white/[0.03] text-white/70">
                SUGGESTION: Memoize callback to prevent re-renders (-40ms render time)
              </div>
              <div className="text-white/40">
                TOKEN EFFICIENCY: 98.4% | AST PARSING: OK
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-white/50 pt-2 border-t border-white/10">
              <span>INFERENCE: 1.4s</span>
              <span className="text-red font-bold">INTEGRITY: 100%</span>
            </div>
          </div>
        );

      case "devto-mcp-server":
        return (
          <div className="relative w-full h-44 sm:h-52 bg-[#080205] border border-white/10 p-4 font-mono text-[11px] overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-white/40 border-b border-white/10 pb-2">
              <span className="text-red font-bold">MODEL_CONTEXT_PROTOCOL</span>
              <span>STDIO RPC INTERFACE</span>
            </div>
            <div className="my-auto space-y-1.5 text-[10px]">
              <div className="p-1.5 bg-white/[0.05] border border-white/20 text-white">
                HOST: Claude Desktop Connected
              </div>
              <div className="text-white/70">
                TOOLS REGISTERED: publish_article, get_analytics, sync_drafts
              </div>
              <div className="text-white/40">
                TARGET: Dev.to Public REST API v1
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-white/50 pt-2 border-t border-white/10">
              <span>SPEC: MCP 2024</span>
              <span className="text-red font-bold">PUBLISHING: ZERO FRICTION</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 sm:h-52 bg-[#080205] border border-white/10 p-4 font-mono flex items-center justify-center text-white/40">
            [ TELEMETRY_STREAM_ACTIVE ]
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-matrix-bg text-white flex flex-col items-center justify-center p-4 py-24 border-t border-white/10 font-mono"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase text-white mb-6 border-b border-white/20 pb-2 text-center w-full">
          PROJECTS
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`text-xs sm:text-sm font-bold uppercase tracking-wider px-3 sm:px-4 py-1.5 transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-red text-black"
                  : "bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.1] border border-white/10"
              }`}
            >
              [ {cat.label} ]
            </button>
          ))}
        </div>

        {/* Desktop Split View (Screen width >= lg) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 w-full items-start">
          {/* Left Column: List of Projects with Hover Activation */}
          <div className="col-span-6 flex flex-col gap-3">
            {filteredProjects.map((project, idx) => {
              const isSelected = currentActive.id === project.id;
              const formattedIndex = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project)}
                  className={`relative p-5 border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? "bg-white/[0.08] border-red text-white translate-x-2 -translate-y-1 shadow-[4px_4px_0px_0px_#FF0000]"
                      : "bg-black/60 border-white/10 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className={`text-xs font-bold ${isSelected ? "text-red" : "text-white/40"}`}>
                        [{formattedIndex}]
                      </span>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg uppercase tracking-tight text-white">
                          {project.title}
                        </h3>
                        <p className="text-xs text-white/50 mt-1 line-clamp-1">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className={`text-[10px] px-2 py-0.5 uppercase ${
                        isSelected ? "bg-red text-black font-bold" : "bg-white/10 text-white/50"
                      }`}>
                        {project.categories[0]}
                      </span>
                      {isSelected && (
                        <span className="text-xs text-red font-bold">→ ACTIVE</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Live Preview Frame */}
          <div className="col-span-6 sticky top-28">
            <div className="border border-white/20 bg-[#0a0306] p-6 shadow-2xl relative overflow-hidden flex flex-col gap-5">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3 text-white/40">
                <span className="text-red font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  PREVIEW: {currentActive.id}.exe
                </span>
                <span className="text-white font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
                  VERIFIED DEPLOYMENT
                </span>
              </div>

              {/* Dynamic Schematic Visual */}
              {renderProjectVisual(currentActive)}

              {/* Project Title with Live Scrambler */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                  <ScrambleText text={currentActive.title} />
                </h3>
                <p className="text-xs text-red uppercase tracking-widest font-bold">
                  {currentActive.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                {currentActive.description}
              </p>

              {/* Metrics Badge */}
              {currentActive.metrics && (
                <div className="p-2.5 bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs text-white/90">
                  <Activity className="w-3.5 h-3.5 text-red flex-shrink-0" />
                  <span className="text-white/60">PERFORMANCE:</span>
                  <span className="font-bold text-white">{currentActive.metrics}</span>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentActive.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <a
                  href={currentActive.liveUrl || currentActive.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-red text-black font-bold text-xs uppercase tracking-wider py-2.5 px-4 text-center hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={currentActive.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-transparent border border-white/30 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 text-center hover:border-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>SOURCE CODE</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion View (Screen width < lg) */}
        <div className="lg:hidden flex flex-col gap-4 w-full">
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedMobileId === project.id;
            const formattedIndex = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={project.id}
                className="border border-white/15 bg-black/60 overflow-hidden"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setExpandedMobileId(isExpanded ? null : project.id)}
                  className="w-full p-4 flex items-center justify-between text-left cursor-pointer hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-red font-bold text-xs">[{formattedIndex}]</span>
                    <span className="text-sm font-bold uppercase text-white truncate max-w-[200px] sm:max-w-none">
                      {project.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase px-2 py-0.5 bg-white/10 text-white/50 hidden sm:inline-block">
                      {project.categories[0]}
                    </span>
                    <span className="text-red text-xs font-bold">
                      {isExpanded ? "[-]" : "[+]"}
                    </span>
                  </div>
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-white/10 space-y-4 animate-in fade-in duration-200">
                    <div className="pt-4">
                      {renderProjectVisual(project)}
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-red font-bold uppercase">
                        {project.tagline}
                      </p>
                      <p className="text-xs text-white/80 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>

                    {project.metrics && (
                      <div className="p-2 bg-white/[0.03] border border-white/10 text-[11px] text-white/90">
                        <span className="text-white/50">PERFORMANCE: </span>
                        <span className="font-bold text-white">{project.metrics}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] uppercase px-1.5 py-0.5 bg-white/5 border border-white/10 text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <a
                        href={project.liveUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-red text-black font-bold text-xs uppercase py-2 px-3 text-center flex items-center justify-center gap-1"
                      >
                        <span>DEMO</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-white/20 text-white font-bold text-xs uppercase py-2 px-3 text-center flex items-center justify-center gap-1"
                      >
                        <Github className="w-3 h-3" />
                        <span>CODE</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
