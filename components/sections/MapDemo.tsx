"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const mapLabels = [
  { x: "18%", y: "32%", label: "📍 Palarivattom", color: "#C8F135" },
  { x: "58%", y: "18%", label: "💼 Infopark", color: "#3DFFC0" },
  { x: "72%", y: "60%", label: "🎓 CUSAT", color: "#FF6B35" },
  { x: "30%", y: "65%", label: "🌊 Marine Drive", color: "#C8F135" },
  { x: "46%", y: "44%", label: "🛒 MG Road", color: "#3DFFC0" },
];

const walkers = [
  { name: "Arjun K.", route: "Palarivattom → Infopark", overlap: "1.8 km", avatar: "🧑‍💻", rating: 4.9 },
  { name: "Meera S.", route: "CUSAT Gate → Kakkanad", overlap: "2.2 km", avatar: "👩‍🎓", rating: 4.8 },
  { name: "Rahul N.", route: "MG Road → Marine Drive", overlap: "1.4 km", avatar: "🧑‍🦱", rating: 5.0 },
];

export default function MapDemo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [matchVisible, setMatchVisible] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setMatchVisible(true), 2200);
    const interval = setInterval(() => setActiveDot((p) => (p + 1) % walkers.length), 2800);
    return () => { clearTimeout(t1); clearInterval(interval); };
  }, [isInView]);

  return (
    <section id="map" className="relative py-28 bg-mid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-card border border-border-custom rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-orange-custom" />
            <span className="text-xs font-body text-muted tracking-widest uppercase">Live Map Demo</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-cream mb-4">
            See who&apos;s walking<br />
            <span className="text-lime">your route right now</span>
          </h2>
          <p className="text-muted font-body text-lg max-w-xl mx-auto">
            Real-time route overlap matching across Kochi — Infopark, CUSAT, Palarivattom and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Map canvas */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-border-custom bg-[#141a0c]"
            style={{ height: 420 }}
          >
            {/* Grid */}
            <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mgrid" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#C8F135" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mgrid)" />
            </svg>

            {/* Roads + routes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 420" fill="none" preserveAspectRatio="none">
              <rect x="0" y="145" width="600" height="12" fill="#1f2412"/>
              <rect x="0" y="268" width="600" height="12" fill="#1f2412"/>
              <rect x="155" y="0" width="12" height="420" fill="#1f2412"/>
              <rect x="342" y="0" width="12" height="420" fill="#1f2412"/>
              <motion.path
                d="M110 155 Q200 155 280 200 Q340 240 420 258"
                stroke="#C8F135" strokeWidth="2.5" strokeDasharray="8 5" strokeLinecap="round" fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M160 360 Q220 310 280 275 Q340 245 430 248"
                stroke="#3DFFC0" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>

            {/* Labels */}
            {mapLabels.map((lbl, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                className="absolute text-xs font-display font-semibold px-2.5 py-1 rounded-full backdrop-blur-md bg-dark/70 border border-border-custom whitespace-nowrap"
                style={{ left: lbl.x, top: lbl.y, color: lbl.color }}
              >
                {lbl.label}
              </motion.div>
            ))}

            {/* User dot */}
            <motion.div
              initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute" style={{ left: "17%", top: "31%", transform: "translate(-50%,-50%)" }}
            >
              <div className="w-4 h-4 rounded-full bg-lime shadow-[0_0_0_6px_rgba(200,241,53,0.2)]">
                <div className="absolute inset-[30%] rounded-full bg-dark" />
              </div>
            </motion.div>

            {/* Buddy dot */}
            <motion.div
              initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute" style={{ left: "52%", top: "55%", transform: "translate(-50%,-50%)" }}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-orange-custom shadow-[0_0_0_5px_rgba(255,107,53,0.2)]" />
            </motion.div>

            {/* Destination dot */}
            <motion.div
              initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute" style={{ left: "70%", top: "60%", transform: "translate(-50%,-50%)" }}
            >
              <div className="w-5 h-5 rounded-full border-2 border-teal-custom flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-teal-custom" />
              </div>
            </motion.div>

            {/* Match popup */}
            {matchVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-xl border border-lime/30 rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-xl flex-shrink-0">🤝</div>
                <div>
                  <div className="font-display font-bold text-sm text-cream">Match found!</div>
                  <div className="font-body text-xs text-muted mt-0.5">Arjun K. shares 1.8 km of your route to Infopark</div>
                </div>
                <button className="ml-auto flex-shrink-0 bg-lime text-dark text-xs font-display font-bold px-3 py-1.5 rounded-full">Join</button>
              </motion.div>
            )}
            <div className="absolute top-4 right-4 bg-lime text-dark text-xs font-display font-bold px-3 py-1.5 rounded-xl">2.4 km</div>
          </motion.div>

          {/* Walker cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-display font-bold text-xs text-muted uppercase tracking-widest mb-2">Walkers on your route</div>
            {walkers.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center gap-3 bg-card border rounded-2xl p-4 transition-all duration-300 ${activeDot === i ? "border-lime/40 shadow-[0_0_20px_rgba(200,241,53,0.08)]" : "border-border-custom"}`}
              >
                <div className="w-10 h-10 rounded-xl bg-mid flex items-center justify-center text-xl flex-shrink-0">{w.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-sm text-cream">{w.name}</div>
                  <div className="font-body text-xs text-muted truncate mt-0.5">{w.route}</div>
                  <div className="font-body text-xs text-lime mt-1">{w.overlap} overlap · ⭐ {w.rating}</div>
                </div>
                <button className="flex-shrink-0 bg-lime text-dark text-xs font-display font-bold px-3 py-1.5 rounded-full hover:bg-lime/90 active:scale-95 transition-all">Join</button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
