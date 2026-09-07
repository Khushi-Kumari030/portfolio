"use client";

import React, { useEffect, useState, useRef } from "react";
import { projectsData } from "@/data/projects";
import { competitionsData } from "@/data/competitions";
import { certificationsData } from "@/data/certifications";
import { experiencesData } from "@/data/experience";
import { getPublicRepoCount } from "@/lib/github";
import { Code2, Trophy, Award, Briefcase } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  targetNumber: number;
  suffix?: string;
  label: string;
}

function StatCard({ icon, targetNumber, suffix = "", label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1000;
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = Math.max(1, targetNumber / totalSteps);

          const timer = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetNumber]);

  return (
    <div
      ref={cardRef}
      className="group relative p-5 sm:p-6 rounded-2xl bg-[#151412] border border-[#292521] hover:border-[#FF6B35]/60 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,107,53,0.15)] flex flex-col items-start justify-between overflow-hidden"
    >
      {/* Background soft ambient hover glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35]/5 rounded-full blur-xl group-hover:bg-[#FF6B35]/15 transition-colors pointer-events-none" />

      <div className="flex items-center justify-between w-full mb-4">
        <div className="p-2.5 rounded-xl bg-[#0B0B0A] border border-[#292521] text-[#FF6B35] group-hover:scale-110 group-hover:text-[#F29B70] transition-all duration-300">
          {icon}
        </div>
      </div>

      <div className="space-y-1 z-10">
        <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EFE6] tracking-tight flex items-baseline">
          <span>{count}</span>
          <span className="text-[#FF6B35] ml-0.5">{suffix}</span>
        </div>
        <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#A8A098] group-hover:text-[#F5EFE6] uppercase transition-colors">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function StatsStrip() {
  const [totalRepoCount, setTotalRepoCount] = useState<number>(0);

  useEffect(() => {
    async function fetchTotalRepoCount() {
      const count = await getPublicRepoCount();
      if (count > 0) {
        setTotalRepoCount(count);
      }
    }
    fetchTotalRepoCount();
  }, []);

  const stats = [
    {
      icon: <Code2 className="w-5 h-5" />,
      targetNumber: totalRepoCount,
      suffix: "+",
      label: "Projects"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      targetNumber: competitionsData.length,
      suffix: "",
      label: "Competitions"
    },
    {
      icon: <Award className="w-5 h-5" />,
      targetNumber: certificationsData.length,
      suffix: "",
      label: "Certifications"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      targetNumber: experiencesData.length,
      suffix: "",
      label: "Experiences"
    }
  ];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            icon={stat.icon}
            targetNumber={stat.targetNumber}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}

