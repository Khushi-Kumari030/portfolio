"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { GraduationCap, BrainCircuit, Code, BookOpen, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-[#292521]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
              <span className="text-xs font-mono text-[#F29B70] uppercase tracking-widest">PROFILE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE6] tracking-tight">
              ABOUT <span className="text-[#FF6B35]">ME</span>
            </h2>
          </div>
          <p className="text-sm font-sans text-[#A8A098] max-w-md leading-relaxed">
            Synthesizing deep machine intelligence, perceptual computer vision, and robust software architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#151412] border border-[#292521] space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF6B35]/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-serif text-xl sm:text-2xl text-[#F5EFE6] leading-snug">
                Engineering intelligent systems that bridge theoretical research and real-world software deployment.
              </h3>
              
              <p className="text-[#A8A098] text-sm sm:text-base leading-relaxed font-sans">
                I am a dual-degree student at <span className="text-[#F5EFE6] font-medium">IIT Kharagpur</span>, pursuing a B.Tech.(Hons.) in Civil Engineering paired with a Master of Artificial Intelligence, Machine Learning and Applications.
              </p>
              
              <p className="text-[#A8A098] text-sm sm:text-base leading-relaxed font-sans">
                My work centers on the intersection of data-driven intelligence and high-performance software engineering. Whether formulating explainable credit risk engines with SHAP, evaluating monocular perception models for intelligent transport, or architecting responsive full-stack applications, I enjoy building solutions that combine data, algorithms, and technology to solve real-world problems.
              </p>

              {/* Core Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-xl bg-[#0B0B0A] border border-[#292521] flex items-start gap-3">
                  <BrainCircuit className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-semibold text-[#F5EFE6] uppercase tracking-wide">Data Science & ML</h4>
                    <p className="text-[12px] text-[#A8A098] mt-1 leading-relaxed">Predictive modeling, XAI, time-series forecasting, and deep neural nets.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0B0A] border border-[#292521] flex items-start gap-3">
                  <Code className="w-5 h-5 text-[#F29B70] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-semibold text-[#F5EFE6] uppercase tracking-wide">Software Engineering</h4>
                    <p className="text-[12px] text-[#A8A098] mt-1 leading-relaxed">Scalable microservices, web platforms, APIs, and modern frontends.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Information Panel */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-xl bg-[#151412] border border-[#292521] text-center">
                <span className="text-[10px] font-mono text-[#A8A098] uppercase block">INSTITUTION</span>
                <span className="font-serif text-sm font-semibold text-[#F5EFE6] mt-1 block">IIT Kharagpur</span>
              </div>

              <div className="p-4 rounded-xl bg-[#151412] border border-[#292521] text-center">
                <span className="text-[10px] font-mono text-[#A8A098] uppercase block">ACADEMIC CGPA</span>
                <span className="font-serif text-sm font-semibold text-[#FF6B35] mt-1 block">9.17 / 10</span>
              </div>

              <div className="p-4 rounded-xl bg-[#151412] border border-[#292521] text-center">
                <span className="text-[10px] font-mono text-[#A8A098] uppercase block">PRIMARY DOMAIN</span>
                <span className="font-serif text-sm font-semibold text-[#F5EFE6] mt-1 block">AI / ML & SDE</span>
              </div>

              <div className="p-4 rounded-xl bg-[#151412] border border-[#292521] text-center">
                <span className="text-[10px] font-mono text-[#A8A098] uppercase block">GRADUATION</span>
                <span className="font-serif text-sm font-semibold text-[#F5EFE6] mt-1 block">2028</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Foundation & Education Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-7 rounded-2xl bg-[#151412] border border-[#292521] space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-[#292521]">
                <div className="p-2 rounded-lg bg-[#0B0B0A] text-[#FF6B35]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F5EFE6]">Education & Academic Foundation</h3>
                  <p className="text-xs font-mono text-[#A8A098]">IIT Kharagpur & Prior Milestones</p>
                </div>
              </div>

              {/* Main Dual Degree */}
              <div className="relative pl-4 border-l-2 border-[#FF6B35] space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-[#FF6B35]">
                  <span>2023 – 2028 (Expected)</span>
                  <span className="px-2 py-0.5 rounded bg-[#0B0B0A] border border-[#292521] text-[#F29B70] font-semibold">
                    CGPA 9.17
                  </span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#F5EFE6]">
                  Indian Institute of Technology Kharagpur
                </h4>
                <p className="text-xs text-[#A8A098] leading-relaxed">
                  B.Tech.(Hons.) in Civil Engineering &amp; Master of Artificial Intelligence, Machine Learning and Applications
                </p>
              </div>

              {/* Prior Schooling */}
              <div className="space-y-2.5 pt-2 border-t border-[#292521]/60 text-xs">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0B0B0A] border border-[#292521]/70">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#A8A098]" />
                    <span className="text-[#F5EFE6] font-medium font-sans">Senior Secondary (Class XII)</span>
                  </div>
                  <span className="font-mono text-[#FF6B35] font-semibold">88.8%</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0B0B0A] border border-[#292521]/70">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#A8A098]" />
                    <span className="text-[#F5EFE6] font-medium font-sans">Secondary Examination (Class X)</span>
                  </div>
                  <span className="font-mono text-[#FF6B35] font-semibold">95.4%</span>
                </div>
              </div>

              {/* NCC Badge */}
              <div className="p-3.5 rounded-xl bg-[#0B0B0A] border border-[#292521] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#FF6B35]" />
                  <div>
                    <span className="text-xs font-mono font-medium text-[#F5EFE6] block">NCC Army Wing Cadet</span>
                    <span className="text-[11px] text-[#A8A098]">2-Year Service • B-Certificate • Best Cadet</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151412] text-[#F29B70] border border-[#292521]">
                  Honors
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

