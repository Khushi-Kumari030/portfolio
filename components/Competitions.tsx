"use client";

import React, { useState } from "react";
import { competitionsData } from "@/data/competitions";
import { Trophy, CheckCircle2, Github, ChevronDown, ChevronUp, Layers, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Competitions() {
  const [expandedId, setExpandedId] = useState<string | null>(competitionsData[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="competitions" className="relative py-24 sm:py-32 border-t border-[#292521]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
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
            Analytical championships, marketing channel optimization, and smart campus innovation platforms.
          </p>
        </motion.div>

        {/* Competitions Equal-Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {competitionsData.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#151412] border border-[#292521] hover:border-[#FF6B35]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(255,107,53,0.14)] hover:-translate-y-1 h-full"
              >
                {/* Subtle orange accent glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/5 rounded-full blur-2xl group-hover:bg-[#FF6B35]/15 transition-colors pointer-events-none" />

                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Badge & Period */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#0B0B0A] text-[#FF6B35] text-xs font-mono font-medium border border-[#292521] flex items-center gap-1.5 shrink-0">
                        <Trophy className="w-3.5 h-3.5" />
                        <span>{item.award}</span>
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#A8A098]">{item.period}</span>
                        {item.workflowStages && (
                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="p-1 rounded bg-[#0B0B0A] border border-[#292521] text-[#A8A098] hover:text-[#FF6B35] transition-colors"
                            aria-label={isExpanded ? "Collapse details" : "Expand details"}
                          >
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Title & Event */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl font-bold text-[#F5EFE6] group-hover:text-[#FF6B35] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[#F29B70]/90">
                        {item.event} • {item.organization}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#A8A098] font-sans leading-relaxed mt-3">
                      {item.description}
                    </p>

                    {/* Key Metrics */}
                    {item.metrics && item.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 my-3 p-2.5 rounded-xl bg-[#0B0B0A] border border-[#292521]/70">
                        {item.metrics.map((m, idx) => (
                          <div key={idx} className="text-center">
                            <span className="text-[9px] font-mono text-[#A8A098] uppercase block">{m.label}</span>
                            <span className="font-serif text-xs sm:text-sm font-bold text-[#FF6B35] block mt-0.5">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlights List */}
                    <div className="space-y-1.5 pt-2">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#A8A098] leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Details if present */}
                    {isExpanded && item.workflowStages && (
                      <div className="space-y-3 pt-3 mt-3 border-t border-[#292521]/80 animate-in fade-in duration-300">
                        <div>
                          <h4 className="text-[11px] font-mono text-[#F29B70] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <Layers className="w-3 h-3 text-[#FF6B35]" />
                            <span>Workflow Stages</span>
                          </h4>
                          <div className="grid grid-cols-2 gap-1.5">
                            {item.workflowStages.map((stage, sIdx) => (
                              <div key={sIdx} className="p-1.5 rounded bg-[#0B0B0A] border border-[#292521] text-[10px] font-mono text-[#A8A098]">
                                <span className="text-[#FF6B35] mr-1 font-bold">{sIdx + 1}.</span>
                                <span>{stage}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer: Tags & GitHub repository link */}
                <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-[#292521]/60">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#0B0B0A] text-[#F5EFE6]/80 text-[10px] font-mono border border-[#292521]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#F5EFE6] hover:text-[#FF6B35] transition-colors shrink-0 group/link"
                    >
                      <Github className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span className="group-hover/link:translate-x-0.5 transition-transform inline-block">View on GitHub →</span>
                    </a>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



