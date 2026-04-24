"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DownloadCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fireConfetti = async () => {
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.65 },
      colors: ["#C8F135", "#3DFFC0", "#FF6B35", "#f0f2e8"],
      ticks: 200,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    fireConfetti();
  };

  return (
    <section id="download" className="relative py-28 bg-mid overflow-hidden">
      {/* Lime glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-lime/8 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-card border border-border-custom rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span className="text-xs font-dm text-muted tracking-widest uppercase">Coming Soon</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-cream mb-4 leading-tight">
            Be the first to<br />
            <span className="text-lime">walk with us</span>
          </h2>
          <p className="text-muted font-dm text-lg max-w-xl mx-auto">
            WalkMate is launching in Kochi first. Join the waitlist and get early access before anyone else — plus a Founding Walker badge.
          </p>
        </motion.div>

        {/* App store buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          {/* App Store */}
          <button className="flex items-center gap-3 bg-card border border-border-custom hover:border-muted rounded-2xl px-6 py-3.5 transition-all duration-200 group w-full sm:w-auto justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="flex-shrink-0">
              <path d="M20.5 14.8c-.02-2.8 2.28-4.15 2.38-4.22-1.3-1.9-3.32-2.16-4.04-2.19-1.72-.18-3.36 1.02-4.23 1.02-.88 0-2.23-.99-3.67-.97-1.89.03-3.63 1.1-4.6 2.79-1.97 3.42-.5 8.47 1.41 11.23.94 1.35 2.06 2.87 3.53 2.81 1.42-.06 1.96-.92 3.67-.92s2.2.92 3.69.89c1.53-.03 2.5-1.38 3.43-2.74.69-.98 1.21-2.1 1.52-3.28-3.35-1.26-3.89-5.42-3.89-5.43z" fill="#f0f2e8"/>
              <path d="M17.74 6.3c.78-.95 1.3-2.27 1.16-3.58-1.12.05-2.47.75-3.27 1.7-.72.83-1.35 2.16-1.18 3.44 1.25.09 2.51-.63 3.29-1.56z" fill="#f0f2e8"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-muted font-dm leading-none">Download on the</div>
              <div className="font-syne font-bold text-cream text-sm leading-tight">App Store</div>
            </div>
          </button>

          {/* Google Play */}
          <button className="flex items-center gap-3 bg-card border border-border-custom hover:border-muted rounded-2xl px-6 py-3.5 transition-all duration-200 group w-full sm:w-auto justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="flex-shrink-0">
              <path d="M5 3.8L16.1 14 5 24.2A2 2 0 014 22.5V5.5A2 2 0 015 3.8z" fill="#C8F135"/>
              <path d="M22.3 11.5L19.2 9.7 16.1 14l3.1 4.3 3.1-1.8A2 2 0 0023.5 14a2 2 0 00-1.2-2.5z" fill="#FF6B35"/>
              <path d="M5 3.8l11.1 10.2-3.5 3.5L5 3.8z" fill="#3DFFC0"/>
              <path d="M5 24.2l7.6-13.7 3.5 3.5L5 24.2z" fill="#f0f2e8"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-muted font-dm leading-none">Get it on</div>
              <div className="font-syne font-bold text-cream text-sm leading-tight">Google Play</div>
            </div>
          </button>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border-custom" />
          <span className="text-muted text-xs font-dm">or join the waitlist</span>
          <div className="flex-1 h-px bg-border-custom" />
        </div>

        {/* Email form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-card border border-border-custom rounded-2xl px-5 py-3.5 text-cream font-dm text-sm placeholder:text-muted focus:outline-none focus:border-lime/50 transition-colors duration-200"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-lime text-dark font-syne font-bold text-sm px-7 py-3.5 rounded-2xl hover:bg-lime/90 active:scale-95 transition-all duration-150 disabled:opacity-70 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Join Waitlist</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center bg-card border border-lime/30 rounded-2xl p-6"
            >
              <div className="text-4xl mb-3">🎉</div>
              <div className="font-syne font-bold text-xl text-cream mb-1">You&apos;re on the list!</div>
              <div className="font-dm text-sm text-muted">
                We&apos;ll let you know the moment WalkMate launches in Kochi. Your Founding Walker badge is waiting.
              </div>
            </motion.div>
          )}

          <p className="text-center text-xs text-muted font-dm mt-4">
            No spam, ever. Launching in Kochi first — Kerala&apos;s walking revolution starts here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
