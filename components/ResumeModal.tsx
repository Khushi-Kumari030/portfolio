"use client";

import React, { useEffect } from "react";
import { X, Download, FileText, ExternalLink, GraduationCap, Building } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[90vh] rounded-2xl bg-[#151412] border border-[#292521] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#292521] bg-[#0B0B0A]/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#151412] text-[#FF6B35] border border-[#292521]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5EFE6]">
                {siteConfig.name} — Curriculum Vitae
              </h3>
              <p className="text-xs font-mono text-[#A8A098]">
                {siteConfig.institution} • Dual Degree (B.Tech Hons. + Master of AI/ML)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.links.resume}
              download="Khushi_Kumari_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FF6B35] text-[#0B0B0A] font-mono text-xs font-semibold hover:bg-[#F29B70] transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#151412] text-[#A8A098] hover:text-[#F5EFE6] hover:border-[#FF6B35] border border-[#292521] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Frame / Embed */}
        <div className="flex-1 bg-[#0B0B0A] relative overflow-hidden">
          <iframe
            src={`${siteConfig.links.resume}#toolbar=0&navpanes=0`}
            className="w-full h-full border-0"
            title="Khushi Kumari Resume"
          />
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#0B0B0A] border-t border-[#292521] flex flex-wrap items-center justify-between text-xs font-mono text-[#A8A098] px-5">
          <span>Targeting Data Science, Machine Learning &amp; SDE roles</span>
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B35] hover:underline inline-flex items-center gap-1"
          >
            <span>Open in Full Tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
