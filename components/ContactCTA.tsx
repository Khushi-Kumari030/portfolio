"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Send } from "lucide-react";

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t border-[#292521]/60 overflow-hidden">
      {/* Background Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF6B35]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
          <span className="text-xs font-mono text-[#F29B70] tracking-widest uppercase font-medium">
            CONTACT &amp; CONNECT
          </span>
        </div>

        {/* Large Display Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5EFE6] tracking-tight leading-tight">
          LET&apos;S BUILD <br />
          <span className="text-gradient-orange">SOMETHING</span> INTERESTING.
        </h2>

        {/* Supporting Narrative */}
        <p className="text-[#A8A098] font-sans text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          Have an upcoming internship or full-time opportunity in Data Science, Machine Learning, or Software Engineering? Or simply want to connect? Let&apos;s talk.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          
          {/* Email Button */}
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FF6B35] text-[#0B0B0A] font-sans font-semibold text-sm hover:bg-[#F29B70] transition-all duration-300 shadow-[0_0_25px_rgba(255,107,53,0.35)] active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* LinkedIn Button */}
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#151412] text-[#F5EFE6] border border-[#292521] hover:border-[#FF6B35] hover:text-[#FF6B35] font-sans font-medium text-sm transition-all duration-300 active:scale-95 group"
          >
            <Linkedin className="w-4 h-4 text-[#FF6B35]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* GitHub Button */}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#151412] text-[#F5EFE6] border border-[#292521] hover:border-[#FF6B35] hover:text-[#FF6B35] font-sans font-medium text-sm transition-all duration-300 active:scale-95 group"
          >
            <Github className="w-4 h-4 text-[#FF6B35]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>

        {/* Copy Email Helper */}
        <div className="pt-2 flex items-center justify-center">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B0B0A] border border-[#292521] text-xs font-mono text-[#A8A098] hover:text-[#F5EFE6] hover:border-[#FF6B35]/60 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>Copy: {siteConfig.links.email}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}

