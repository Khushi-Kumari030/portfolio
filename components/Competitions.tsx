"use client";

import React from "react";
import { competitionsData } from "@/data/competitions";
import { Trophy, CheckCircle2 } from "lucide-react";

export default function Competitions() {
  return (
    <section id="competitions" className="relative py-24 sm:py-32 border-t border-[#292521]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
              <span className="text-xs font-mono text-[#F29B70] uppercase tracking-widest">ACHIEVEMENTS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE6] tracking-tight">
              COMPETITIONS
            </h2>
          </div>
          <p className="text-sm font-sans text-[#A8A098] max-w-md leading-relaxed">
            Analytical championships, marketing channel optimization, and military cadet leadership.
          </p>
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {competitionsData.map((item) => (
            <div
              key={item.id}
              className="group relative p-7 sm:p-9 rounded-2xl bg-[#151412] border border-[#292521] hover:border-[#FF6B35]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(255,107,53,0.14)]"
            >
              {/* Subtle orange accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/5 rounded-full blur-2xl group-hover:bg-[#FF6B35]/15 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Header Badge & Period */}
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#0B0B0A] text-[#FF6B35] text-xs font-mono font-medium border border-[#292521] flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>{item.award}</span>
                  </span>
                  <span className="text-xs font-mono text-[#A8A098]">{item.period}</span>
                </div>

                {/* Title & Event */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#F5EFE6] group-hover:text-[#FF6B35] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F29B70]/90 mt-1">
                    {item.event} • {item.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#A8A098] font-sans leading-relaxed">
                  {item.description}
                </p>

                {/* Key Metrics */}
                {item.metrics && item.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2.5 my-3 p-3 rounded-xl bg-[#0B0B0A] border border-[#292521]/70">
                    {item.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <span className="text-[10px] font-mono text-[#A8A098] uppercase block">{m.label}</span>
                        <span className="font-serif text-sm font-bold text-[#FF6B35] block mt-0.5">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights List */}
                <div className="space-y-2 pt-1">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#A8A098] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-[#292521]/60">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-[#0B0B0A] text-[#F5EFE6]/80 text-[11px] font-mono border border-[#292521]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

