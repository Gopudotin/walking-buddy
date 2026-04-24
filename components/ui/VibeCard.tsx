"use client";

import { motion } from "framer-motion";

interface VibeCardProps {
  emoji: string;
  title: string;
  description: string;
  accent: string;
  delay?: number;
}

export default function VibeCard({ emoji, title, description, accent, delay = 0 }: VibeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="relative bg-card border border-border-custom rounded-3xl p-6 cursor-default group overflow-hidden"
      style={{
        boxShadow: `0 0 0 0px ${accent}`,
      }}
    >
      {/* Glow on hover via pseudo approach using a motion div */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 40px ${accent}22, 0 0 30px ${accent}18` }}
      />

      {/* Accent top bar */}
      <div
        className="w-10 h-1 rounded-full mb-5"
        style={{ background: accent }}
      />

      <div className="text-4xl mb-4">{emoji}</div>

      <h3 className="font-syne font-bold text-xl text-cream mb-2">{title}</h3>
      <p className="text-muted text-sm font-dm leading-relaxed">{description}</p>

      {/* Subtle corner accent */}
      <div
        className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-60"
        style={{ background: accent }}
      />
    </motion.div>
  );
}
