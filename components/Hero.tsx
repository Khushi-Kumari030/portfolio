"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import HollowCube from "./HollowCube";
import { ArrowRight, FileText, Github, Linkedin, BrainCircuit, Terminal, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      const navOffset = 80;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 z-10"
          >
            
            {/* Two Separate Domain Cards */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151412] border border-[#292521] hover:border-[#FF6B35]/70 transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(255,107,53,0.15)]">
                <BrainCircuit className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span className="text-xs font-mono font-medium tracking-wider text-[#F5EFE6] group-hover:text-[#FF6B35] transition-colors">
                  DATA SCIENCE
                </span>
              </div>

              <div className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151412] border border-[#292521] hover:border-[#FF6B35]/70 transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(255,107,53,0.15)]">
                <Terminal className="w-3.5 h-3.5 text-[#F29B70]" />
                <span className="text-xs font-mono font-medium tracking-wider text-[#F5EFE6] group-hover:text-[#FF6B35] transition-colors">
                  SOFTWARE ENGINEERING
                </span>
              </div>
            </div>

            {/* Prominent Name on ONE line */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-[#F5EFE6]">
                Khushi Kumari
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] ml-2 shadow-[0_0_10px_#FF6B35]"></span>
              </h1>
            </div>

            {/* Supporting Editorial Statement */}
            <p className="text-[#A8A098] font-sans text-base sm:text-lg max-w-lg leading-relaxed font-normal">
              {siteConfig.tagline}
            </p>

            {/* Core CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FF6B35] text-[#0B0B0A] font-sans font-semibold text-sm hover:bg-[#F29B70] transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.25)] hover:shadow-[0_0_25px_rgba(255,107,53,0.4)] active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <button
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2 px-4.5 py-3 rounded-xl bg-[#151412] text-[#F5EFE6] border border-[#292521] hover:border-[#FF6B35] font-sans font-medium text-sm hover:text-[#FF6B35] transition-all duration-300 shadow-sm active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#FF6B35]" />
                <span>View Resume ↓</span>
              </button>
            </div>

            {/* Social Links & Metadata Strip */}
            <div className="flex items-center gap-5 pt-4 border-t border-[#292521]/60 text-xs font-mono text-[#A8A098]">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group flex items-center gap-1.5 text-[#A8A098] hover:text-[#FF6B35] transition-colors"
              >
                <Github className="w-4 h-4 text-[#A8A098] group-hover:text-[#FF6B35] transition-colors" />
                <span className="font-mono text-xs">GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group flex items-center gap-1.5 text-[#A8A098] hover:text-[#FF6B35] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#A8A098] group-hover:text-[#FF6B35] transition-colors" />
                <span className="font-mono text-xs">LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="hidden sm:flex items-center gap-2 ml-auto text-[#A8A098]/80 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>IIT Kharagpur</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D Lateral Vertex Pivoting Cube */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full max-w-[420px] lg:max-w-none">
              <HollowCube />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


