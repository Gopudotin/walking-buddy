"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Anjali M.",
    handle: "@anjali_walks",
    avatar: "👩‍💼",
    rating: 5,
    text: "I walk from Palarivattom to Infopark every single day. WalkMate found me a buddy in the first two minutes. We now walk together every morning!",
    location: "Infopark, Kochi",
    walks: "42 walks",
  },
  {
    name: "Vishnu R.",
    handle: "@vishnugoesbrisk",
    avatar: "🧑‍💻",
    rating: 5,
    text: "CUSAT to Kakkanad bus stand was always lonely and a bit sketchy at night. WalkMate changed that completely. My buddy Arjun is amazing.",
    location: "CUSAT, Kochi",
    walks: "28 walks",
  },
  {
    name: "Divya K.",
    handle: "@divya.kochi",
    avatar: "👩‍🎓",
    rating: 5,
    text: "MG Road to Marine Drive evening walks with the Nature vibe filter — absolute bliss. Met some of my closest friends this way.",
    location: "MG Road, Kochi",
    walks: "61 walks",
  },
  {
    name: "Arjun S.",
    handle: "@arjunstrides",
    avatar: "🧑‍🦱",
    rating: 5,
    text: "The SOS feature gave my mom peace of mind. She stopped worrying about my late office walks from Kakkanad once she knew I had backup.",
    location: "Kakkanad, Kochi",
    walks: "35 walks",
  },
  {
    name: "Meera T.",
    handle: "@meerawalks",
    avatar: "👩‍🔬",
    rating: 5,
    text: "I'm new to Kochi and was nervous walking alone. WalkMate connected me with verified locals who showed me the best routes around the city.",
    location: "Ernakulam, Kochi",
    walks: "19 walks",
  },
  {
    name: "Rahul P.",
    handle: "@rahul_infopark",
    avatar: "🧑‍🏫",
    rating: 5,
    text: "The walk vibe filter is genius. I'm a Chill walker and never want to chat at 7 AM. WalkMate finds me people who get that completely.",
    location: "Infopark Phase 2",
    walks: "53 walks",
  },
];

const stats = [
  { value: 2400, suffix: "+", label: "Active Walkers" },
  { value: 18, suffix: "", label: "Kochi Routes" },
  { value: 98, suffix: "%", label: "Safety Score" },
  { value: 4.9, suffix: "", label: "Avg Rating", isDecimal: true },
];

function useCountUp(target: number, isDecimal: boolean, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target, isDecimal]);
  return count;
}

function StatCounter({ value, suffix, label, isDecimal = false, active }: { value: number; suffix: string; label: string; isDecimal?: boolean; active: boolean }) {
  const count = useCountUp(value, isDecimal, active);
  return (
    <div className="text-center">
      <div className="font-display font-extrabold text-4xl md:text-5xl text-lime">
        {isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
      </div>
      <div className="font-body text-sm text-muted mt-1">{label}</div>
    </div>
  );
}

export default function Testimonials() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-28 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-card border border-border-custom rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-teal-custom" />
            <span className="text-xs font-body text-muted tracking-widest uppercase">Kochi Loves WalkMate</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-cream mb-4">
            Real walkers,<br />
            <span className="text-lime">real stories</span>
          </h2>
          <p className="text-muted font-body text-lg max-w-xl mx-auto">
            From Palarivattom to Marine Drive — here&apos;s what our community is saying.
          </p>
        </motion.div>
      </div>

      {/* Auto-scroll carousel — no overflow clip on x */}
      <div className="relative w-full overflow-hidden mb-20">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-5 w-max">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-80 flex-shrink-0 bg-card border border-border-custom rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-mid flex items-center justify-center text-xl">{t.avatar}</div>
                <div>
                  <div className="font-display font-bold text-sm text-cream">{t.name}</div>
                  <div className="font-body text-xs text-muted">{t.handle}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-lime text-xs">★</span>
                  ))}
                </div>
              </div>
              <p className="font-body text-sm text-cream/80 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-muted">📍</span>
                  <span className="font-body text-xs text-muted">{t.location}</span>
                </div>
                <div className="font-display font-bold text-xs text-lime">{t.walks}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div ref={statsRef} className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-card border border-border-custom rounded-3xl px-8 py-10">
          {stats.map((s, i) => (
            <StatCounter key={i} {...s} active={statsInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
