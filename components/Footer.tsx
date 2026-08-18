"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0B0B0A] border-t border-[#292521] py-12 text-[#A8A098]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#292521]/60">
          {/* Logo / Name */}
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]" />
            <span className="font-serif text-lg font-bold text-[#F5EFE6] tracking-wider">
              {siteConfig.name.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-[#A8A098]/70 hidden sm:inline-block">
              • {siteConfig.institution}
            </span>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-sans">
            <a href="#about" className="hover:text-[#FF6B35] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#FF6B35] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#FF6B35] transition-colors">Projects</a>
            <a href="#competitions" className="hover:text-[#FF6B35] transition-colors">Competitions</a>
            <a href="#skills" className="hover:text-[#FF6B35] transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-[#FF6B35] transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-[#FF6B35] transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#151412] border border-[#292521] text-[#A8A098] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#151412] border border-[#292521] text-[#A8A098] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="p-2 rounded-lg bg-[#151412] border border-[#292521] text-[#A8A098] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A8A098]/70 gap-3">
          <p>© {new Date().getFullYear()} Khushi Kumari. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Designed &amp; Built with Next.js, Three.js &amp; Obsidian Aesthetic</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
