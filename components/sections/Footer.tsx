"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    heading: "Product",
    items: ["How It Works", "Walk Vibes", "Map Demo", "Safety Features", "Buddy Badges"],
  },
  {
    heading: "Company",
    items: ["About Us", "Blog", "Careers", "Press Kit", "Contact"],
  },
  {
    heading: "Community",
    items: ["Kochi Walkers", "Submit a Route", "Become a Verified Walker", "Partner With Us", "Events"],
  },
  {
    heading: "Legal",
    items: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Safety Guidelines"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t border-border-custom pt-20 pb-10 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,241,53,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,241,53,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top: brand + links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand col */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-lime flex items-center justify-center">
                <span className="text-dark text-sm font-syne font-bold">W</span>
              </div>
              <span className="font-syne font-bold text-lg text-cream">
                Walk<span className="text-lime">Mate</span>
              </span>
            </div>
            <p className="font-dm text-sm text-muted leading-relaxed mb-5">
              Walk together, arrive happier. Built in Kerala, for the streets of Kochi.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {["𝕏", "📸", "in", "▶"].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-xl bg-card border border-border-custom flex items-center justify-center text-sm text-muted hover:text-cream hover:border-muted transition-all duration-200"
                >
                  {icon}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {links.map((col, ci) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-syne font-bold text-xs text-muted uppercase tracking-widest mb-4">
                {col.heading}
              </div>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="font-dm text-sm text-cream/60 hover:text-cream transition-colors duration-150"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border-custom mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm text-xs text-muted">
            © {new Date().getFullYear()} WalkMate. Made with ❤️ in Kerala.
          </p>
          <div className="flex items-center gap-2 bg-card border border-border-custom rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse flex-shrink-0" />
            <span className="font-dm text-xs text-muted italic">
              &quot;Nandi, Kochi&apos;s first walking companion app&quot;
            </span>
          </div>
          <p className="font-dm text-xs text-muted">
            Kochi, Kerala, India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
