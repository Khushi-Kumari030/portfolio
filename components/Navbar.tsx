"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenResume?: () => void;
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Competitions", href: "#competitions" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0B0A]/90 backdrop-blur-md border-b border-[#292521] shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_#FF6B35]"></span>
          <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#F5EFE6] group-hover:text-[#FF6B35] transition-colors duration-300">
            KHUSHI KUMARI
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 text-sm font-sans font-medium transition-all duration-200 rounded-md ${
                  isActive
                    ? "text-[#FF6B35] font-semibold"
                    : "text-[#A8A098] hover:text-[#F5EFE6] hover:bg-[#151412]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenResume}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium text-[#F5EFE6] bg-[#151412] border border-[#292521] rounded-lg hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(255,107,53,0.25)]"
          >
            <FileText className="w-3.5 h-3.5 text-[#FF6B35] group-hover:scale-110 transition-transform duration-300" />
            <span>Resume ↓</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono text-[#F5EFE6] bg-[#151412] border border-[#292521] rounded-md hover:border-[#FF6B35]"
          >
            <FileText className="w-3 h-3 text-[#FF6B35]" />
            <span>Resume</span>
          </button>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#A8A098] hover:text-[#F5EFE6] hover:bg-[#151412] rounded-lg border border-[#292521] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0A]/95 backdrop-blur-xl border-b border-[#292521] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-md text-sm font-sans font-medium flex items-center justify-between ${
                    isActive
                      ? "text-[#FF6B35] bg-[#151412] border-l-2 border-[#FF6B35]"
                      : "text-[#A8A098] hover:text-[#F5EFE6] hover:bg-[#151412]/60"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#292521]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-[#FF6B35] text-[#0B0B0A] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#F29B70] transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>View / Download Resume ↓</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
