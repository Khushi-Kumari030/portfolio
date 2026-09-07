"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-[#292521]/60">
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
              <span className="text-xs font-mono text-[#F29B70] uppercase tracking-widest">PORTFOLIO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE6] tracking-tight">
              PROJECTS
            </h2>
          </div>
          <p className="text-sm font-sans text-[#A8A098] max-w-md leading-relaxed">
            Machine learning systems, explainable AI architectures, deep vision models, and scalable software pipelines.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative p-7 sm:p-9 rounded-2xl bg-[#151412] border border-[#292521] hover:border-[#FF6B35]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(255,107,53,0.14)] hover:-translate-y-1.5"
            >
              {/* Subtle orange accent glow on hover */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF6B35]/5 rounded-full blur-2xl group-hover:bg-[#FF6B35]/15 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Top Metadata */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#0B0B0A] text-[#F29B70] text-[11px] font-mono border border-[#292521]">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#A8A098]">
                    {project.guideOrType} • {project.period}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#F5EFE6] group-hover:text-[#FF6B35] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F29B70]/80 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#A8A098] font-sans leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Banner */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2.5 my-3 p-3 rounded-xl bg-[#0B0B0A] border border-[#292521]/70">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <span className="text-[10px] font-mono text-[#A8A098] uppercase block">{m.label}</span>
                        <span className="font-serif text-sm font-bold text-[#FF6B35] block mt-0.5">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#A8A098] leading-relaxed">
                      <span className="text-[#FF6B35] font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer: Tags & Action Link */}
              <div className="pt-6 mt-6 border-t border-[#292521]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-[#0B0B0A] text-[#F5EFE6]/80 text-[11px] font-mono border border-[#292521] group-hover:border-[#FF6B35]/30 group-hover:text-[#F5EFE6] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#F5EFE6] hover:text-[#FF6B35] transition-colors shrink-0 group/link"
                  >
                    <Github className="w-4 h-4 text-[#FF6B35]" />
                    <span className="group-hover/link:translate-x-0.5 transition-transform inline-block">GitHub ↗</span>
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


