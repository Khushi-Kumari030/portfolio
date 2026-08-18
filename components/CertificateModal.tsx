"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Award, ExternalLink, ShieldCheck } from "lucide-react";
import { Certification } from "@/data/certifications";

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (cert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-[#151412] border border-[#292521] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#292521]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#0B0B0A] text-[#FF6B35]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5EFE6]">{cert.title}</h3>
              <p className="text-xs font-mono text-[#A8A098]">{cert.issuer} • {cert.issueDate}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#0B0B0A] text-[#A8A098] hover:text-[#F5EFE6] hover:border-[#FF6B35] border border-[#292521] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Image Body */}
        <div className="p-6 space-y-4">
          {cert.certificateImage ? (
            <div className="relative w-full h-64 sm:h-80 bg-[#0B0B0A] rounded-xl overflow-hidden border border-[#292521]">
              <Image
                src={cert.certificateImage}
                alt={cert.title}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="p-8 rounded-xl bg-[#0B0B0A] border border-[#292521] text-center space-y-3">
              <ShieldCheck className="w-12 h-12 text-[#FF6B35] mx-auto" />
              <p className="text-sm font-serif text-[#F5EFE6]">Verified Credential</p>
              <p className="text-xs font-mono text-[#A8A098]">{cert.description}</p>
            </div>
          )}

          {/* Credential ID Strip */}
          <div className="p-3.5 rounded-xl bg-[#0B0B0A] border border-[#292521] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-[#A8A098]">CREDENTIAL ID:</span>
            <span className="text-xs font-mono text-[#FF6B35] font-semibold break-all">{cert.credentialId}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0B0B0A] border-t border-[#292521] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#151412] text-[#F5EFE6] hover:text-[#FF6B35] border border-[#292521] text-xs font-mono font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
