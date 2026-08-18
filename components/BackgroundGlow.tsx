"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundGlow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle field
    const particleCount = 45;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.1,
        fadeSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1)
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint floating particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeSpeed;

        if (p.opacity > 0.55 || p.opacity < 0.08) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(255, 107, 53, ${Math.max(0, p.opacity)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Primary Hero Radial Glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.07)_0%,rgba(242,155,112,0.02)_40%,transparent_70%)] blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Secondary Bottom-Left Ambient Glow */}
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.04)_0%,transparent_65%)] blur-3xl pointer-events-none" />

      {/* Subtle Geometric Faint Grid / Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#FF6B35_1px,transparent_1px),linear-gradient(to_bottom,#FF6B35_1px,transparent_1px)] bg-[size:5rem_5rem]" 
      />

      {/* Lightweight Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />
    </div>
  );
}
