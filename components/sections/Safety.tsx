"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "🛡️",
    title: "Verified Profiles",
    description: "Every WalkMate user is verified with phone number and optional Aadhaar-linked ID. Only real people, no fake accounts.",
    accent: "#C8F135",
  },
  {
    icon: "🆘",
    title: "One-Tap SOS",
    description: "Instantly alert your emergency contacts with your live location. Designed for Kochi's night walkers and solo commuters.",
    accent: "#FF6B35",
  },
  {
    icon: "📍",
    title: "Live Location Sharing",
    description: "Share your real-time location only with your walk buddy during the walk. Auto-stops when you arrive.",
    accent: "#3DFFC0",
  },
  {
    icon: "⭐",
    title: "Buddy Rating System",
    description: "Rate every walk. Consistently high-rated walkers get a Trusted badge — your safety signal in the community.",
    accent: "#C8F135",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

export default function Safety() {
  const shieldRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(shieldRef, { once: true, margin: "-80px" });

  return (
    <section id="safety" className="relative py-28 bg-mid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Shield SVG + copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 bg-card border border-border-custom rounded-full px-4 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-orange-custom" />
                <span className="text-xs font-body text-muted tracking-widest uppercase">Safety First</span>
              </div>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-cream mb-4 leading-tight">
                Walk safe,<br />
                <span className="text-lime">always together</span>
              </h2>
              <p className="text-muted font-body text-lg leading-relaxed mb-8">
                Built from the ground up for the streets of Kochi. Every feature — from verified IDs to SOS alerts — is designed to keep you safe, whether you&apos;re at Palarivattom Junction at 7 AM or Marine Drive at dusk.
              </p>
            </motion.div>

            {/* Shield SVG draw-on-scroll */}
            <div ref={shieldRef} className="relative w-40 h-44 mx-auto lg:mx-0">
              <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Shield body */}
                <motion.path
                  d="M50 5 L90 20 L90 55 Q90 80 50 105 Q10 80 10 55 L10 20 Z"
                  stroke="#C8F135"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="rgba(200,241,53,0.06)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />
                {/* Checkmark */}
                <motion.path
                  d="M33 55 L44 66 L67 43"
                  stroke="#C8F135"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.3, ease: "easeInOut" }}
                />
                {/* Glow */}
                <motion.ellipse
                  cx="50" cy="58" rx="22" ry="18"
                  fill="#C8F135"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.06 } : {}}
                  transition={{ delay: 1.8, duration: 0.6 }}
                />
              </svg>
              {/* Glow behind shield */}
              <div className="absolute inset-0 bg-lime/10 blur-3xl rounded-full scale-75 pointer-events-none" />
            </div>
          </div>

          {/* Right: feature rows */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={rowVariants}
                className="flex items-start gap-4 bg-card border border-border-custom rounded-2xl p-5 group hover:border-border-custom/80 transition-colors duration-200"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${f.accent}14`, border: `1px solid ${f.accent}30` }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-cream mb-1">{f.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
