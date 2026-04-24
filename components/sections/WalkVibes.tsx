"use client";

import { motion } from "framer-motion";
import VibeCard from "@/components/ui/VibeCard";

const vibes = [
  {
    emoji: "🎧",
    title: "Chill",
    description: "Walk in comfortable silence with a trusted buddy. Headphones in, city all around. Perfect for the early Infopark commute.",
    accent: "#C8F135",
  },
  {
    emoji: "💬",
    title: "Chatty",
    description: "Turn your commute into a conversation. Share ideas, vent about traffic, or just catch up — all the way from MG Road to Marine Drive.",
    accent: "#3DFFC0",
  },
  {
    emoji: "🏃",
    title: "Brisk",
    description: "Power walk through Kochi. High pace, minimal talk. Great for the CUSAT crowd with early morning lectures to catch.",
    accent: "#FF6B35",
  },
  {
    emoji: "🌿",
    title: "Nature",
    description: "Breathe in the backwater breeze along Marine Drive or under the canopy near Kakkanad. Mindful walking, every step intentional.",
    accent: "#C8F135",
  },
];

export default function WalkVibes() {
  return (
    <section id="vibes" className="relative py-28 bg-dark overflow-hidden">
      {/* Background radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-teal-custom/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-card border border-border-custom rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-lime" />
            <span className="text-xs font-body text-muted tracking-widest uppercase">Walk Vibes</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-cream mb-4">
            Every walk has<br />
            <span className="text-lime">its own energy</span>
          </h2>
          <p className="text-muted font-body text-lg max-w-xl mx-auto">
            Set your vibe before you post. We only match you with people who want the same kind of walk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vibes.map((vibe, i) => (
            <VibeCard key={vibe.title} {...vibe} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12"
        >
          <p className="text-muted font-body text-sm">
            You can change your vibe anytime — even mid-walk. Your walk, your rules.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
