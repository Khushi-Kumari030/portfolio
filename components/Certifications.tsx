"use client";

import React, { useState } from "react";
import { certificationsData, Certification } from "@/data/certifications";
import CertificateModal from "./CertificateModal";
import { Calendar, Eye } from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="relative py-24 sm:py-32 border-t border-[#292521]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
              <span className="text-xs font-mono text-[#F29B70] uppercase tracking-widest">CREDENTIALS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE6] tracking-tight">
              LICENSES &amp; CERTIFICATIONS
            </h2>
          </div>
          <p className="text-sm font-sans text-[#A8A098] max-w-md leading-relaxed">
            Verified specialized credentials across data analytics, machine learning, and time series forecasting.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group relative p-7 sm:p-8 rounded-2xl bg-[#151412] border border-[#292521] hover:border-[#FF6B35]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(255,107,53,0.14)]"
            >
              {/* Subtle top-right glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF6B35]/5 rounded-full blur-2xl group-hover:bg-[#FF6B35]/15 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Issuer Badge & Date */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#0B0B0A] text-[#F29B70] text-[11px] font-mono border border-[#292521]">
                    {cert.issuer}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#A8A098]">
                    <Calendar className="w-3 h-3 text-[#FF6B35]" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#F5EFE6] group-hover:text-[#FF6B35] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A8A098] font-sans leading-relaxed">
                  {cert.description}
                </p>

                {/* Topics Tag List */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded bg-[#0B0B0A] text-[#F5EFE6]/80 text-[10px] font-mono border border-[#292521]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Credential ID info */}
                <div className="p-2.5 rounded-xl bg-[#0B0B0A] border border-[#292521] text-[11px] font-mono text-[#A8A098] break-all">
                  <span className="text-[#A8A098]/70 block text-[9px] uppercase">Credential ID</span>
                  <span className="text-[#FF6B35] font-medium">{cert.credentialId}</span>
                </div>
              </div>

              {/* Action: View Certificate */}
              <div className="pt-6 mt-6 border-t border-[#292521]/60">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0B0B0A] text-[#F5EFE6] hover:text-[#FF6B35] border border-[#292521] hover:border-[#FF6B35] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all group/btn"
                >
                  <Eye className="w-3.5 h-3.5 text-[#FF6B35] group-hover/btn:scale-110 transition-transform" />
                  <span>{cert.certificateImage ? "View Certificate Preview" : "View Credential Details"}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />

      </div>
    </section>
  );
}

