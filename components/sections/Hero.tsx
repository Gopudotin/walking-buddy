"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ParallaxScene from "@/components/ui/ParallaxScene";
import WalkingFigures from "@/components/ui/WalkingFigures";
import StatPill from "@/components/ui/StatPill";

const headlineWords = ["Walk", "Together,", "Arrive", "Happier."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark"
    >
      {/* Radial lime glow behind headline */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-lime/5 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 pt-28 pb-60 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-card border border-border-custom rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="text-xs font-dm text-muted tracking-widest uppercase">
            Now live in Kochi, Kerala
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-cream mb-6 flex flex-wrap justify-center gap-x-5 gap-y-2"
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariant}
              className={i === 1 || i === 3 ? "text-lime" : "text-cream"}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted font-dm text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Find walking buddies on your commute through Kochi — from Palarivattom to Infopark,
          MG Road to Marine Drive. Safer streets, every step.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#download"
            className="group flex items-center gap-2 bg-lime text-dark px-7 py-3.5 rounded-full font-syne font-bold text-base hover:bg-lime/90 active:scale-95 transition-all duration-150 shadow-lg shadow-lime/20"
          >
            Get Early Access
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 border border-border-custom text-cream px-7 py-3.5 rounded-full font-syne font-semibold text-base hover:border-muted transition-colors duration-150"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center gap-4">
          <StatPill icon="🚶" value="2,400+" label="Active walkers" delay={1.1} className="animate-float" />
          <StatPill icon="📍" value="18 routes" label="Covered in Kochi" delay={1.2} className="animate-float-delay" />
          <StatPill icon="⭐" value="4.9 / 5" label="Buddy rating avg" delay={1.3} className="animate-float-delay2" />
        </div>
      </div>

      {/* Walking figures */}
      <WalkingFigures />

      {/* 3-layer parallax cityscape */}
      <ParallaxScene />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none z-10" />
    </section>
  );
}
