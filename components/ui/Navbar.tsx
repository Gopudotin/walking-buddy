"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
    return () => unsub();
  }, [scrollY]);

  return (
    <>
      <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-dark/80 backdrop-blur-xl border-b border-border-custom/60"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-lime flex items-center justify-center">
            <span className="text-dark text-sm font-display font-800 leading-none">W</span>
          </div>
          <span className="font-display font-bold text-lg text-cream">
            Walk<span className="text-lime">Mate</span>
          </span>
        </Link>

        {/* Nav links – hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          {["How it Works", "Map", "Vibes", "Safety"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm text-muted hover:text-cream transition-colors duration-200 font-body"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#download"
          className="flex items-center gap-2 bg-lime text-dark px-4 py-2 rounded-full text-sm font-display font-bold hover:bg-lime/90 active:scale-95 transition-all duration-150"
        >
          <span>Get Early Access</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.header>

    {/* Thin lime progress bar at the very top (under the nav conceptually, but fixed) */}
    <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-[72px] left-0 right-0 h-[2px] bg-lime origin-left z-50"
      />
    </>
  );
}
