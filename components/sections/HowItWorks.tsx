"use client";

import { motion } from "framer-motion";
import RouteAnimation from "@/components/ui/RouteAnimation";

const steps = [
  {
    number: "01",
    title: "Post Your Walk",
    description:
      "Share your route from Palarivattom, CUSAT, or anywhere in Kochi. Set your vibe — Chill, Chatty, Brisk, or Nature. Choose your departure time and max buddy count.",
    icon: "📍",
    accent: "#C8F135",
  },
  {
    number: "02",
    title: "Match with Nearby Walkers",
    description:
      "Our algorithm finds people with overlapping routes. Heading to Infopark? We'll match you with colleagues already walking from Kakkanad or Marine Drive.",
    icon: "🤝",
    accent: "#3DFFC0",
  },
  {
    number: "03",
    title: "Walk Together Safely",
    description:
      "Meet up, chat in-app, and walk together. One-tap SOS, live location sharing, and verified profiles keep every walk safe and social.",
    icon: "🛡️",
    accent: "#FF6B35",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 bg-dark overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border-custom" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-card border border-border-custom rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-teal-custom" />
            <span className="text-xs font-body text-muted tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-cream mb-4">
            Three steps to your<br />
            <span className="text-lime">perfect walk buddy</span>
          </h2>
          <p className="text-muted font-body text-lg max-w-xl mx-auto">
            No complicated sign-ups. Just open, post, and walk.
          </p>
        </motion.div>

        {/* Route animation connector */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[600px] h-[120px] top-[45%] opacity-30 pointer-events-none">
          <RouteAnimation />
        </div>

        {/* Step cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className="relative bg-card border border-border-custom rounded-3xl p-8 overflow-hidden group hover:border-opacity-80 transition-colors duration-300"
            >
              {/* Giant faded step number behind card content */}
              <div
                className="absolute -top-4 -right-2 font-display font-extrabold text-[7rem] leading-none select-none pointer-events-none opacity-[0.04]"
                style={{ color: step.accent }}
              >
                {step.number}
              </div>

              {/* Accent dot */}
              <div
                className="w-3 h-3 rounded-full mb-6"
                style={{ background: step.accent, boxShadow: `0 0 12px ${step.accent}66` }}
              />

              {/* Icon */}
              <div className="text-4xl mb-5">{step.icon}</div>

              {/* Step number badge */}
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-display font-bold mb-4 border"
                style={{
                  background: `${step.accent}14`,
                  borderColor: `${step.accent}40`,
                  color: step.accent,
                }}
              >
                Step {step.number}
              </div>

              <h3 className="font-display font-bold text-xl text-cream mb-3">{step.title}</h3>
              <p className="font-body text-muted text-sm leading-relaxed">{step.description}</p>

              {/* Connector arrow (not last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="#2d3320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
