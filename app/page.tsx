"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import BackgroundGlow from "@/components/BackgroundGlow";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Competitions from "@/components/Competitions";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B0B0A] text-[#F5EFE6] relative selection:bg-[#FF6B35] selection:text-[#0B0B0A]">
      {/* Dynamic Ambient Background Glow & Particles */}
      <BackgroundGlow />

      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <StatsStrip />
        <About />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <Competitions />
        <Skills />
        <Certifications />
        <ContactCTA />
      </div>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </main>
  );
}

