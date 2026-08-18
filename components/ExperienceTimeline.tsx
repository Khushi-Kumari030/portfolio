"use client";

import React, { useState } from "react";
import { experiencesData, ExperienceItem } from "@/data/experience";
import { Calendar, MapPin, CheckCircle2, Building, ChevronRight, Briefcase } from "lucide-react";

export default function ExperienceTimeline() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(experiencesData[0]?.id || null);

  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-[#292521]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
              <span className="text-xs font-mono text-[#F29B70] uppercase tracking-widest">CAREER &amp; RESEARCH</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE6] tracking-tight">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-sm font-sans text-[#A8A098] max-w-md leading-relaxed">
            Computer vision research, automotive technology benchmarking, and fest leadership.
          </p>
        </div>

        {/* LinkedIn-style Vertical Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline Navigation Track */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative pl-6 sm:pl-8 space-y-6">
              
              {/* Vertical connecting line */}
              <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FF6B35] via-[#FF6B35]/40 to-[#292521]" />

              {experiencesData.map((item) => {
                const isActive = activeHoverId === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveHoverId(item.id)}
                    onClick={() => setActiveHoverId(item.id)}
                    className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isActive
                        ? "bg-[#151412] border-[#FF6B35]/70 shadow-[0_0_20px_rgba(255,107,53,0.12)]"
                        : "bg-[#151412]/40 border-[#292521] hover:border-[#FF6B35]/40 hover:bg-[#151412]"
                    }`}
                  >
                    {/* Timeline Node Point */}
                    <div
                      className={`absolute -left-[30px] sm:-left-[38px] top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? "bg-[#FF6B35] border-[#FF6B35] shadow-[0_0_10px_#FF6B35]"
                          : "bg-[#0B0B0A] border-[#A8A098]/40"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#0B0B0A]" : "bg-[#FF6B35]"}`} />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono text-[#FF6B35] font-medium">{item.period}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0B0A] text-[#F29B70] border border-[#292521]">
                          {item.type}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5EFE6] leading-snug">
                        {item.role}
                      </h3>
                      
                      <p className="text-xs text-[#A8A098] font-sans flex items-center gap-1.5 pt-0.5">
                        <Building className="w-3.5 h-3.5 text-[#FF6B35]" />
                        <span>{item.organization}</span>
                      </p>
                    </div>

                    {/* Mobile indicator */}
                    <div className="flex lg:hidden items-center justify-between mt-3 pt-2 border-t border-[#292521]/60 text-[11px] font-mono text-[#F29B70]">
                      <span>{isActive ? "Viewing details below ↓" : "Tap to view details"}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? "rotate-90" : ""}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Experience Detail Card */}
          <div className="lg:col-span-7">
            {experiencesData.map((item) => {
              if (item.id !== activeHoverId) return null;
              return (
                <div
                  key={item.id}
                  className="p-7 sm:p-9 rounded-2xl bg-[#151412] border border-[#FF6B35]/60 shadow-[0_0_30px_rgba(255,107,53,0.12)] space-y-6 animate-in fade-in zoom-in-95 duration-200"
                >
                  {/* Card Header */}
                  <div className="space-y-2 pb-5 border-b border-[#292521]">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#0B0B0A] text-[#FF6B35] text-xs font-mono font-medium border border-[#292521]">
                        {item.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-[#A8A098]">
                        <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFE6]">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#A8A098]">
                      <span className="flex items-center gap-1.5 text-[#F5EFE6] font-medium">
                        <Building className="w-3.5 h-3.5 text-[#FF6B35]" />
                        {item.organization}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#A8A098]" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Narrative */}
                  <p className="text-sm sm:text-base text-[#A8A098] font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {/* Metrics Banner */}
                  {item.metrics && item.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#0B0B0A] border border-[#292521]">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <span className="text-[10px] font-mono text-[#A8A098] uppercase block">{m.label}</span>
                          <span className="font-serif text-sm sm:text-base font-bold text-[#FF6B35] block mt-0.5">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullet Contributions */}
                  <div className="space-y-2.5 pt-1">
                    <h4 className="text-xs font-mono text-[#F29B70] uppercase tracking-wider">Key Contributions &amp; Achievements</h4>
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A8A098] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-[#292521]/60">
                    <span className="text-[11px] font-mono text-[#A8A098]/70 mr-1">DOMAINS:</span>
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded bg-[#0B0B0A] text-[#F5EFE6]/90 text-[11px] font-mono border border-[#292521]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

