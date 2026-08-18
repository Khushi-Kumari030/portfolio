"use client";

import React from "react";
import { skillsData, SkillItem } from "@/data/skills";

function TechIcon({ type }: { type: string }) {
  switch (type) {
    case "python":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2C8.6 2 6.7 3.4 6.7 5.7v1.8h5.3v.8H4.6C2.3 8.3 1 10.3 1 13.5c0 3.2 1.6 4.9 4.3 4.9h1.5v-2.2c0-2.4 2-4.4 4.4-4.4h5.3v-.8h-5.3V8.8h7.9c2.3 0 3.9-1.9 3.9-4.8 0-3-1.6-4-4.3-4h-6.5zm-1.8 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#FF6B35" />
          <path d="M12.1 22c3.3 0 5.2-1.4 5.2-3.7v-1.8h-5.3v-.8h7.4c2.3 0 3.6-2 3.6-5.2 0-3.2-1.6-4.9-4.3-4.9h-1.5v2.2c0 2.4-2 4.4-4.4 4.4H7.5v.8h5.3v2.2H4.9c-2.3 0-3.9 1.9-3.9 4.8 0 3 1.6 4 4.3 4h6.8zm1.8-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#F29B70" />
        </svg>
      );
    case "c":
      return (
        <div className="w-5 h-5 rounded-md bg-[#292521] border border-[#FF6B35]/50 flex items-center justify-center font-mono font-bold text-xs text-[#FF6B35]">
          C
        </div>
      );
    case "sql":
      return (
        <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "html":
      return (
        <svg className="w-5 h-5 text-[#F29B70]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m4 3 1.6 15.5 6.4 2.5 6.4-2.5L20 3H4z" />
          <path d="M7 7h10l-.5 5H8l.3 3.5 3.7 1.2 3.7-1.2.2-2.5" />
        </svg>
      );
    case "css":
      return (
        <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m4 3 1.6 15.5 6.4 2.5 6.4-2.5L20 3H4z" />
          <path d="M7 8h10l-1.5 8-3.5 1.2-3.5-1.2L8 12h5" />
        </svg>
      );
    case "javascript":
      return (
        <div className="w-5 h-5 rounded-md bg-[#FF6B35]/20 border border-[#FF6B35] flex items-center justify-center font-mono font-bold text-xs text-[#F5EFE6]">
          JS
        </div>
      );
    case "numpy":
      return (
        <div className="w-5 h-5 rounded-md bg-[#151412] border border-[#292521] flex items-center justify-center font-mono font-bold text-[10px] text-[#F29B70]">
          NP
        </div>
      );
    case "pandas":
      return (
        <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4v16" />
          <path d="M9 4v16" />
          <path d="M14 4v16" />
          <path d="M19 4v16" />
          <path d="M4 9h15" />
          <path d="M4 15h15" />
        </svg>
      );
    case "scikitlearn":
      return (
        <div className="w-5 h-5 rounded-md bg-[#FF6B35]/15 border border-[#FF6B35]/60 flex items-center justify-center font-mono font-bold text-[9px] text-[#FF6B35]">
          SKL
        </div>
      );
    case "tensorflow":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3.2l6 3.3v6.6l-6 3.3-6-3.3V8.5l6-3.3z" fill="#FF6B35" />
          <path d="M12 7.5L7.5 10v4l4.5 2.5 4.5-2.5v-4L12 7.5z" fill="#F29B70" />
        </svg>
      );
    case "keras":
      return (
        <div className="w-5 h-5 rounded-md bg-[#cc5220]/20 border border-[#FF6B35] flex items-center justify-center font-serif font-bold text-xs text-[#FF6B35]">
          K
        </div>
      );
    case "pytorch":
      return (
        <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2 4 14h7v8l9-12h-7z" />
        </svg>
      );
    case "matplotlib":
    case "seaborn":
      return (
        <svg className="w-5 h-5 text-[#F29B70]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      );
    case "powerbi":
      return (
        <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="12" width="4" height="8" rx="1" />
          <rect x="10" y="8" width="4" height="12" rx="1" />
          <rect x="17" y="4" width="4" height="16" rx="1" />
        </svg>
      );
    case "tableau":
      return (
        <svg className="w-5 h-5 text-[#F29B70]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20M7 7l10 10M17 7 7 17" />
        </svg>
      );
    case "jupyter":
      return (
        <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2a10 10 0 0 1 10 10" />
          <path d="M12 22a10 10 0 0 1-10-10" />
        </svg>
      );
    case "vscode":
      return (
        <svg className="w-5 h-5 text-[#F29B70]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m4 17 6 4 10-9-10-9-6 4 5 5-5 5z" />
        </svg>
      );
    case "colab":
      return (
        <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8" cy="12" r="4" />
          <circle cx="16" cy="12" r="4" />
        </svg>
      );
    case "streamlit":
      return (
        <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 2 19h20L12 2z" />
          <path d="m12 6-6 10h12L12 6z" />
        </svg>
      );
    case "github":
      return (
        <svg className="w-5 h-5 text-[#F5EFE6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case "excel":
      return (
        <div className="w-5 h-5 rounded-md bg-emerald-950/40 border border-emerald-600/60 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
          X
        </div>
      );
    case "powerpoint":
      return (
        <div className="w-5 h-5 rounded-md bg-orange-950/40 border border-[#FF6B35]/70 flex items-center justify-center font-mono font-bold text-xs text-[#FF6B35]">
          P
        </div>
      );
    case "canva":
      return (
        <div className="w-5 h-5 rounded-md bg-[#151412] border border-[#F29B70]/60 flex items-center justify-center font-serif font-bold text-xs text-[#F29B70]">
          C
        </div>
      );
    default:
      return (
        <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
      );
  }
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-[#292521]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
              <span className="text-xs font-mono text-[#F29B70] uppercase tracking-widest">TECHNICAL STACK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE6] tracking-tight">
              SKILLS
            </h2>
          </div>
          <p className="text-sm font-sans text-[#A8A098] max-w-md leading-relaxed">
            Machine learning libraries, neural framework architectures, databases, and development tooling.
          </p>
        </div>

        {/* Vertically Separated Categories */}
        <div className="space-y-10">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#151412] border border-[#292521] space-y-6 hover:border-[#FF6B35]/40 transition-colors"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#292521]">
                <h3 className="font-mono text-base font-bold text-[#F5EFE6] tracking-wider flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                  <span>{category.title}</span>
                </h3>
                <p className="text-xs text-[#A8A098] font-sans">
                  {category.subtitle}
                </p>
              </div>

              {/* Skills Grid with Real Recognizable Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item p-3.5 rounded-xl bg-[#0B0B0A] border border-[#292521] hover:border-[#FF6B35] transition-all duration-200 flex flex-col items-center justify-center gap-2 text-center hover:shadow-[0_0_15px_rgba(255,107,53,0.15)] hover:-translate-y-0.5 cursor-default"
                  >
                    <div className="group-hover/item:scale-110 transition-transform duration-200">
                      <TechIcon type={skill.iconType} />
                    </div>
                    
                    <span className="font-mono text-xs font-medium text-[#F5EFE6] group-hover/item:text-[#FF6B35] transition-colors">
                      {skill.name}
                    </span>

                    {skill.tag && (
                      <span className="text-[9px] font-mono text-[#A8A098]/70 uppercase">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

