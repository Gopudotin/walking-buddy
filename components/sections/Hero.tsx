"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const headlineWords = [
  { text: "Walk", color: "text-cream" },
  { text: "Together,", color: "text-lime" },
  { text: "Arrive", color: "text-cream" },
  { text: "Happier.", color: "text-lime" }
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function KochiSkylineSVG() {
  return (
    <svg viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none" className="w-full h-full opacity-60">
      <path d="M0 400V250L40 250L40 200L80 200L80 180L120 180L120 230L160 230L160 150L200 150L200 120L220 120L220 170L280 170L280 240L350 240L350 180L400 180L400 220L450 220L450 160L500 160L500 250L600 250L600 100L650 100L650 190L720 190L720 140L780 140L780 210L850 210L850 150L900 150L900 260L1000 260L1000 180L1050 180L1050 220L1120 220L1120 130L1180 130L1180 240L1250 240L1250 160L1300 160L1300 200L1380 200L1380 250L1440 250V400H0Z" fill="#161c0d"/>
      {/* Palm trees distant */}
      <circle cx="150" cy="230" r="15" fill="#161c0d"/>
      <circle cx="160" cy="225" r="12" fill="#161c0d"/>
      <circle cx="140" cy="225" r="12" fill="#161c0d"/>
    </svg>
  );
}

function MidgroundSVG() {
  return (
    <svg viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none" className="w-full h-full">
      <path d="M0 300V150H80V120H200V180H350V100H450V160H600V110H750V140H900V90H1000V150H1150V120H1300V170H1440V300H0Z" fill="#1a2010"/>
      {/* Signpost */}
      <rect x="250" y="160" width="4" height="60" fill="#161c0d"/>
      <rect x="240" y="160" width="40" height="15" fill="#C8F135" opacity="0.8" rx="2"/>
      <text x="260" y="170" fill="#1a2010" fontSize="8" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">INFOPARK</text>
      {/* Bus shelter */}
      <rect x="800" y="140" width="80" height="5" fill="#161c0d"/>
      <rect x="810" y="145" width="5" height="45" fill="#161c0d"/>
      <rect x="865" y="145" width="5" height="45" fill="#161c0d"/>
      {/* Rickshaw outline */}
      <path d="M1100 170 Q1110 160 1120 170 L1125 190 H1095 Z" fill="#161c0d"/>
    </svg>
  );
}

function RoadSVG() {
  return (
    <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-full">
      <rect x="0" y="0" width="1440" height="80" fill="#1f2412"/>
      <line x1="0" y1="0" x2="1440" y2="0" stroke="#2d3320" strokeWidth="4"/>
      <line x1="0" y1="40" x2="1440" y2="40" stroke="#C8F135" strokeWidth="4" className="road-dash" opacity="0.3"/>
      {/* Zebra crossing */}
      <g opacity="0.1">
        <rect x="400" y="5" width="20" height="70" fill="#fff"/>
        <rect x="440" y="5" width="20" height="70" fill="#fff"/>
        <rect x="480" y="5" width="20" height="70" fill="#fff"/>
        <rect x="520" y="5" width="20" height="70" fill="#fff"/>
      </g>
      {/* Manhole */}
      <circle cx="800" cy="55" r="15" stroke="#2d3320" strokeWidth="2" fill="none"/>
      <circle cx="800" cy="55" r="10" stroke="#2d3320" strokeWidth="1" fill="none"/>
    </svg>
  );
}

function ForegroundSVG() {
  return (
    <svg viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" className="w-full h-full">
      {/* Plant/tree left */}
      <path d="M-50 200 Q0 50 100 0 Q150 100 80 200 Z" fill="#0c0e06"/>
      {/* Lamppost right */}
      <rect x="1300" y="0" width="15" height="200" fill="#0c0e06"/>
      <rect x="1270" y="0" width="45" height="10" fill="#0c0e06"/>
      <circle cx="1285" cy="5" r="4" fill="#C8F135" opacity="0.8"/>
    </svg>
  );
}

function WalkingFigure({ color, variant, isUser, name, className }: { color: string; variant: "walk" | "run"; isUser?: boolean; name?: string; className?: string }) {
  const figClass = variant === "walk" ? "walking-fig" : "running-fig";
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Name / Toast positioning */}
      {name && !isUser && (
        <div className="absolute -top-10 text-[10px] font-body text-cream opacity-50 whitespace-nowrap">
          {name}
        </div>
      )}
      
      <svg width="40" height="90" viewBox="-20 -25 40 90" fill="none" className={`${figClass} overflow-visible`}>
        {/* Head */}
        <circle cx="0" cy="0" r="8" fill={color}/>
        
        {/* Location dot */}
        {(isUser || variant === "walk") && (
          <circle cx="0" cy="-20" r="4" fill={color} className={isUser ? "location-dot" : "opacity-40"}/>
        )}
        
        {/* Body */}
        <line x1="0" y1="8" x2="0" y2="40" stroke={color} strokeWidth="3" strokeLinecap="round"/>
        
        {/* Arms */}
        <line className="arm-left"  x1="0" y1="18" x2="-14" y2="30" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
        <line className="arm-right" x1="0" y1="18" x2="14"  y2="30" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
        
        {/* Legs */}
        <line className="leg-left"  x1="0" y1="40" x2="-12" y2="62" stroke={color} strokeWidth="3" strokeLinecap="round"/>
        <line className="leg-right" x1="0" y1="40" x2="12"  y2="62" stroke={color} strokeWidth="3" strokeLinecap="round"/>
        
        {/* Phone icon for user */}
        {isUser && (
          <rect x="-18" y="25" width="6" height="10" rx="1" fill={color} className="arm-left" transform="rotate(20 0 18)"/>
        )}
      </svg>
    </div>
  );
}

function RouteLine() {
  return (
    <div className="w-full h-full flex items-center pt-[15px]">
      <svg width="100%" height="20" preserveAspectRatio="none">
        <line x1="0" y1="10" x2="100%" y2="10" stroke="#C8F135" strokeWidth="2" strokeDasharray="4 4" className="road-dash" opacity="0.6"/>
      </svg>
    </div>
  );
}

function JoinToast({ name, overlap }: { name: string; overlap: string }) {
  return (
    <div className="flex items-center gap-2 bg-card border border-border-custom rounded-2xl px-3 py-2 backdrop-blur-sm whitespace-nowrap shadow-lg shadow-black/20">
      <div className="w-2 h-2 rounded-full bg-teal-custom animate-pulse" />
      <span className="font-body text-xs text-cream font-medium">{name}</span>
      <span className="font-body text-xs text-muted">joined · {overlap}</span>
      <button className="bg-lime text-dark font-display font-bold text-xs px-2 py-1 rounded-lg hover:bg-lime/80 transition-colors">
        Walk
      </button>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for each layer
  const farBgY    = useTransform(scrollYProgress, [0,1], ["0%", "15%"]);
  const midBgY    = useTransform(scrollYProgress, [0,1], ["0%", "25%"]);
  const roadX     = useTransform(scrollYProgress, [0,1], ["0%", "-20%"]);  // road scrolls sideways
  const charsX    = useTransform(scrollYProgress, [0,1], ["0%", "-35%"]);  // characters move right→left
  const fgY       = useTransform(scrollYProgress, [0,1], ["0%", "50%"]);

  // Character C (Meera) starts right, moves to meet character B
  const meeraX    = useTransform(scrollYProgress, [0, 0.4, 0.6], ["120%", "55%", "52%"]);
  
  // Arjun runs in at 60% scroll progress
  const arjunX    = useTransform(scrollYProgress, [0.5, 0.8], ["150%", "58%"]);
  
  // Route connection line between B and C (appears at 40% scroll)
  const lineOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  
  // "Meera joined!" toast
  const toastOpacity = useTransform(scrollYProgress, [0.38, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
  const toastY       = useTransform(scrollYProgress, [0.38, 0.45], [10, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-[200vh] bg-[#0f1108]">
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Radial lime glow behind headline */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-lime/5 blur-[120px] pointer-events-none z-0" />

        {/* HEADLINE */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pb-48 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-card border border-border-custom rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span className="text-xs font-body text-muted tracking-widest uppercase">
              Now live in Kochi, Kerala
            </span>
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(72px,10vw,140px)] mb-6 flex flex-wrap justify-center gap-x-[3vw] gap-y-0 text-center max-w-6xl mx-auto"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                className={word.color}
              >
                {word.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted font-body text-lg md:text-xl max-w-2xl text-center mb-10 leading-relaxed"
          >
            Find walking buddies on your commute through Kochi — from Palarivattom to Infopark,
            MG Road to Marine Drive. Safer streets, every step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#download"
              className="group flex items-center gap-2 bg-lime text-dark px-7 py-3.5 rounded-full font-display font-bold text-base hover:bg-lime/90 active:scale-95 transition-all duration-150 shadow-lg shadow-lime/20"
            >
              Get Early Access
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 border border-border-custom text-cream px-7 py-3.5 rounded-full font-display font-semibold text-base hover:border-muted transition-colors duration-150"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* SCENE LAYERS */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none">
          
          {/* Layer 0: Sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a2010]/20" />

          {/* Layer 1: Far background */}
          <motion.div style={{ y: farBgY }} className="absolute inset-0 top-[20%]">
            <KochiSkylineSVG />
          </motion.div>

          {/* Layer 2: Mid background */}
          <motion.div style={{ y: midBgY }} className="absolute inset-0 top-[35%]">
            <MidgroundSVG />
          </motion.div>

          {/* Layer 3: Road */}
          <motion.div style={{ x: roadX }} className="absolute bottom-0 w-[300%] h-[30%]">
            <RoadSVG />
          </motion.div>

          {/* Layer 4: Characters */}
          <div className="absolute bottom-[20%] w-full h-[60px]">
            {/* Char A — Lone walker */}
            <motion.div style={{ x: charsX }} className="absolute left-[15%] bottom-0">
              <WalkingFigure color="#6b7355" variant="walk" className="char-A" />
            </motion.div>

            {/* Char B — You (lime, stays relatively fixed) */}
            <div className="absolute left-[35%] md:left-[40%] bottom-0 z-10">
              <WalkingFigure color="#C8F135" variant="walk" isUser className="char-B" />
            </div>

            {/* Route connection line */}
            <motion.div style={{ opacity: lineOpacity }} className="absolute bottom-[45px] left-[35%] md:left-[40%] right-[30%] md:right-[45%]">
              <RouteLine />
            </motion.div>

            {/* "Meera joined!" toast */}
            <motion.div style={{ opacity: toastOpacity, y: toastY }}
              className="absolute left-[38%] md:left-[43%] bottom-[100px] z-20">
              <JoinToast name="Meera S." overlap="600m overlap" />
            </motion.div>

            {/* Char C — Meera (walks in from right) */}
            <motion.div style={{ x: meeraX }} className="absolute right-0 bottom-0 z-10">
              <WalkingFigure color="#3DFFC0" variant="walk" name="Meera S." className="char-C" />
            </motion.div>

            {/* Char D — Arjun running */}
            <motion.div style={{ x: arjunX }} className="absolute right-0 bottom-0 z-10">
              <WalkingFigure color="#FF6B35" variant="run" name="Arjun" className="char-D" />
            </motion.div>
            
            {/* Char E — Skeptic (far right background) */}
            <motion.div style={{ x: charsX }} className="absolute left-[90%] bottom-[10px] scale-90 z-0">
              <WalkingFigure color="#3a4020" variant="walk" className="char-A" />
            </motion.div>
          </div>

          {/* Layer 5: Foreground depth elements */}
          <motion.div style={{ y: fgY }} className="absolute bottom-0 w-[120%] h-[40%] -left-[10%]">
            <ForegroundSVG />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
