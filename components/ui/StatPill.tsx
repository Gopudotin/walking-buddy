"use client";

import { motion } from "framer-motion";

interface StatPillProps {
  icon: string;
  label: string;
  value: string;
  delay?: number;
  className?: string;
}

export default function StatPill({ icon, label, value, delay = 0, className = "" }: StatPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`animate-float bg-card/80 backdrop-blur-md border border-border-custom rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl ${className}`}
    >
      <span className="text-xl">{icon}</span>
      <div>
        <div className="font-display font-bold text-lime text-base leading-none">{value}</div>
        <div className="text-muted text-xs mt-0.5 font-body">{label}</div>
      </div>
    </motion.div>
  );
}
