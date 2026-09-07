"use client";

import React from "react";
import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";

function TechIcon({ type }: { type: string }) {
  switch (type) {
    case "python":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#3776AB" d="M11.9 2C8.6 2 6.7 3.4 6.7 5.7v1.8h5.3v.8H4.6C2.3 8.3 1 10.3 1 13.5c0 3.2 1.6 4.9 4.3 4.9h1.5v-2.2c0-2.4 2-4.4 4.4-4.4h5.3v-.8h-5.3V8.8h7.9c2.3 0 3.9-1.9 3.9-4.8 0-3-1.6-4-4.3-4h-6.5zm-1.8 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
          <path fill="#FFD43B" d="M12.1 22c3.3 0 5.2-1.4 5.2-3.7v-1.8h-5.3v-.8h7.4c2.3 0 3.6-2 3.6-5.2 0-3.2-1.6-4.9-4.3-4.9h-1.5v2.2c0 2.4-2 4.4-4.4 4.4H7.5v.8h5.3v2.2H4.9c-2.3 0-3.9 1.9-3.9 4.8 0 3 1.6 4 4.3 4h6.8zm1.8-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
        </svg>
      );
    case "c":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#A8B9CC" d="M22.25 15.632A11.947 11.947 0 0 1 12 24C5.373 24 0 18.627 0 12S5.373 0 12 0c4.152 0 7.818 2.109 9.967 5.316l-3.914 2.502C16.666 5.861 14.475 4.6 12 4.6c-4.087 0-7.4 3.313-7.4 7.4s3.313 7.4 7.4 7.4c2.597 0 4.876-1.336 6.182-3.376l4.068 2.608z" />
        </svg>
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
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#E34F26" d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0z" />
          <path fill="#EF652A" d="M12 2.2v19.5l7.1-2.2 1.6-17.3H12z" />
          <path fill="#FFF" d="M12 9.6H7.9l-.3-3.3H12V3H4.8l.9 9.9H12V9.6zm0 7.6l-3.9-1.1-.3-2.9H4.6l.4 5.3 7 2v-3.3z" />
        </svg>
      );
    case "css":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#1572B6" d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0z" />
          <path fill="#33A9DC" d="M12 2.2v19.5l7.1-2.2 1.6-17.3H12z" />
          <path fill="#FFF" d="M12 9.6H7.9l-.3-3.3H12V3H4.8l.9 9.9H12V9.6zm0 7.6l-3.9-1.1-.3-2.9H4.6l.4 5.3 7 2v-3.3z" />
        </svg>
      );
    case "javascript":
      return (
        <svg className="w-5 h-5 rounded" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="#F7DF1E" rx="3" />
          <path fill="#000" d="M6.3 18.2l1.9-1.1c.3.6.7 1.1 1.4 1.1.7 0 1.2-.3 1.2-.9 0-.6-.5-.9-1.3-1.2l-.5-.2c-1.3-.5-2.2-1.2-2.2-2.6 0-1.5 1.2-2.6 3.1-2.6 1.3 0 2.3.5 2.9 1.6l-1.8 1.1c-.4-.6-.8-.9-1.2-.9-.5 0-.9.3-.9.7 0 .5.4.8 1.2 1.1l.5.2c1.6.7 2.4 1.3 2.4 2.7 0 1.8-1.4 2.8-3.4 2.8-1.9 0-3.1-.9-3.7-2.3zm8 0l1.9-1.1c.4.7.9 1.1 1.6 1.1.7 0 1.2-.4 1.2-1.3v-6.3h2.3v6.4c0 2.2-1.3 3.3-3.4 3.3-1.8 0-3-.9-3.6-2.1z" />
        </svg>
      );
    case "numpy":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#013243" d="M12 0L2.1 5.7v11.4L12 24l9.9-5.7V5.7L12 0z" />
          <path fill="#4DABCF" d="M12 2.2l7.8 4.5v9L12 20.2l-7.8-4.5v-9L12 2.2z" />
          <path fill="#4C78A8" d="M12 5.5L6.5 8.7v6.6l5.5 3.2 5.5-3.2V8.7L12 5.5z" />
        </svg>
      );
    case "pandas":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#130754" d="M5 2h3v20H5V2zm11 0h3v20h-3V2zM10.5 7h3v10h-3V7z" />
          <path fill="#E70488" d="M5 9h14v2H5V9zm0 4h14v2H5v-2z" />
        </svg>
      );
    case "scikitlearn":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#F7931E" d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm-2.5 4.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm5 0a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
        </svg>
      );
    case "tensorflow":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#FF6F00" d="M12 0L2 5.8v11.5L7 20v-5.8l5 2.9v-5.8L7 8.5v-2.9l5 2.9L17 5.6 12 2.7V0z" />
          <path fill="#FF8F00" d="M12 0l10 5.8v11.5L17 20v-5.8l-5 2.9v-5.8l5-2.9v-2.9l-5 2.9L7 5.6 12 2.7V0z" />
        </svg>
      );
    case "keras":
      return (
        <svg className="w-5 h-5 rounded bg-[#D00000]" viewBox="0 0 24 24">
          <path fill="#FFF" d="M5 3h3.5v7.2L14.7 3H19l-7.2 8.3L19.5 21h-4.3l-5-7.3V21H5V3z" />
        </svg>
      );
    case "pytorch":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#EE4C2C" d="M13.2 0l-.8.8v3.4l.8.8h1.6c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4H10V8.8h-.8l-.8.8v4.2c0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.3-2.7-6-6-6h-1.2zm-2.4 1.6l-2 2L10 4.8l2-2-1.2-1.2z" />
        </svg>
      );
    case "matplotlib":
    case "seaborn":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#11557C" d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path d="M7 14l3-4 4 5 4-7" stroke="#ED254E" strokeWidth="2" fill="none" />
        </svg>
      );
    case "powerbi":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <rect x="3" y="11" width="4" height="10" rx="1" fill="#F2C811" />
          <rect x="10" y="7" width="4" height="14" rx="1" fill="#F2C811" />
          <rect x="17" y="3" width="4" height="18" rx="1" fill="#F2C811" />
        </svg>
      );
    case "tableau":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#E8762D" d="M11 2h2v5h-2V2zm0 15h2v5h-2v-5zM2 11h5v2H2v-2zm15 0h5v2h-5v-2zm-9-5h2v2H8V6zm6 0h2v2h-2V6zm-6 10h2v2H8v-2zm6 0h2v2h-2v-2z" />
        </svg>
      );
    case "jupyter":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#F37626" d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm0 16a7 7 0 1 1 7-7 7 7 0 0 1-7 7z" />
          <circle cx="8.5" cy="7.5" r="1.5" fill="#767676" />
          <circle cx="15.5" cy="16.5" r="1.5" fill="#767676" />
        </svg>
      );
    case "vscode":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#007ACC" d="M23.15 2.587L18.21.21a1.49 1.49 0 00-1.705.29l-9.46 8.63-4.41-3.33a.997.997 0 00-1.408.204l-1.07 1.43a.996.996 0 00.19 1.413l3.56 2.68-3.56 2.68a.996.996 0 00-.19 1.413l1.07 1.43c.34.453.978.54 1.408.204l4.41-3.33 9.46 8.63c.49.45 1.21.56 1.705.29l4.94-2.377A1.5 1.5 0 0024 20.84V3.16a1.5 1.5 0 00-.85-1.373z" />
        </svg>
      );
    case "colab":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#F9AB00" d="M16.9 14.7a4.9 4.9 0 0 1-3.5 1.5c-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9 1.3 0 2.6.5 3.5 1.5l2.4-2.4C17.8 4 15.5 3 13.4 3 8.3 3 4.2 7.1 4.2 12.2s4.1 9.2 9.2 9.2c2.1 0 4.4-1 5.9-2.5l-2.4-2.2z" />
          <path fill="#E37400" d="M19.8 12.2c0-.6-.1-1.2-.2-1.7h-6.2v3.3h3.6c-.2.9-.7 1.7-1.4 2.2l2.3 2.3c1.3-1.2 2.1-3 2.1-5.6z" />
        </svg>
      );
    case "streamlit":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#FF4B4B" d="M12 2L1 21h22L12 2zm0 5.5l7 12H5l7-12z" />
        </svg>
      );
    case "github":
      return (
        <svg className="w-5 h-5 fill-current text-[#F5EFE6]" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "excel":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="3" fill="#107C41" />
          <path fill="#FFF" d="M7 17l3.5-5L7 7h2.5l2.25 3.6L14 7h2.5l-3.5 5 3.5 5H14l-2.25-3.6L9.5 17H7z" />
        </svg>
      );
    case "canva":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="#00C4CC" />
          <path fill="#FFF" d="M12.5 7c-2.8 0-4.5 1.8-4.5 4.3 0 2.9 2.1 4.7 4.8 4.7 1.5 0 2.7-.6 3.3-1.4l-1.1-.9c-.5.5-1.3.9-2.1.9-1.6 0-2.8-1-2.8-2.7h6.4c0-.3.1-.7.1-1 0-2.3-1.5-3.9-4.1-3.9zm-2.4 3.4c.2-1.1 1.1-1.8 2.2-1.8 1.2 0 2 0 2.1.8h-4.3z" />
        </svg>
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
              <span className="text-xs font-mono text-[#F29B70] uppercase tracking-widest">SKILLS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE6] tracking-tight">
              SKILLS
            </h2>
          </div>
          <p className="text-sm font-sans text-[#A8A098] max-w-md leading-relaxed">
            Machine learning libraries, neural framework architectures, databases, and development tooling.
          </p>
        </motion.div>

        {/* Vertically Separated Categories */}
        <div className="space-y-10">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1, ease: "easeOut" }}
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
                    <div className="group-hover/item:scale-110 transition-transform duration-200 flex items-center justify-center h-6">
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


