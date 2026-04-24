"use client";

import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Helper components for the journey elements
const Mountain = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className={className}>
    <path d="M0,300 L200,100 L400,250 L600,50 L800,200 L1000,0 L1000,300 Z" fill="currentColor" opacity="0.1"/>
  </svg>
);

const Tree = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 200" className={className}>
    <rect x="45" y="100" width="10" height="100" fill="var(--border)" />
    <path d="M50,0 C20,0 0,30 0,60 C0,90 20,120 50,120 C80,120 100,90 100,60 C100,30 80,0 50,0 Z" fill="var(--card)" />
  </svg>
);

const Cityscape = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className={className}>
    <rect x="0" y="150" width="80" height="150" fill="currentColor" opacity="0.1"/>
    <rect x="90" y="80" width="120" height="220" fill="currentColor" opacity="0.15"/>
    <rect x="220" y="120" width="100" height="180" fill="currentColor" opacity="0.1"/>
    <rect x="330" y="50" width="150" height="250" fill="currentColor" opacity="0.2"/>
    <rect x="500" y="100" width="110" height="200" fill="currentColor" opacity="0.15"/>
    <rect x="620" y="180" width="90" height="120" fill="currentColor" opacity="0.1"/>
    <rect x="730" y="70" width="140" height="230" fill="currentColor" opacity="0.2"/>
    <rect x="880" y="130" width="120" height="170" fill="currentColor" opacity="0.15"/>
  </svg>
);

const WalkingCharacter = ({ scrollYProgress, numSteps, offsetPhase, x, opacity, color, scale = 1, zIndex = 30 }: any) => {
  const rightLegRot = useTransform(scrollYProgress, (p: number) => Math.sin(p * Math.PI * 2 * numSteps + offsetPhase) * 35);
  const leftLegRot = useTransform(scrollYProgress, (p: number) => Math.sin(p * Math.PI * 2 * numSteps + Math.PI + offsetPhase) * 35);
  const rightArmRot = useTransform(scrollYProgress, (p: number) => Math.sin(p * Math.PI * 2 * numSteps + Math.PI + offsetPhase) * 25);
  const leftArmRot = useTransform(scrollYProgress, (p: number) => Math.sin(p * Math.PI * 2 * numSteps + offsetPhase) * 25);
  const bodyBounce = useTransform(scrollYProgress, (p: number) => Math.abs(Math.sin(p * Math.PI * 2 * numSteps + offsetPhase)) * -8);

  return (
    <motion.div 
      className={`absolute bottom-[10vh] z-${zIndex}`}
      style={{ left: 0, x, opacity, y: bodyBounce, scale }}
    >
      <svg width="100" height="180" viewBox="0 0 100 180" className="overflow-visible drop-shadow-2xl" style={{ color }}>
        {/* Left Arm (Behind body) */}
        <motion.g style={{ originX: "50px", originY: "60px", rotate: leftArmRot }}>
          <rect x="44" y="60" width="12" height="50" rx="6" fill="var(--muted)" />
        </motion.g>

        {/* Left Leg (Behind body) */}
        <motion.g style={{ originX: "50px", originY: "110px", rotate: leftLegRot }}>
          <rect x="42" y="110" width="14" height="60" rx="7" fill="var(--muted)" />
        </motion.g>

        {/* Body */}
        <rect x="40" y="50" width="20" height="70" rx="10" fill="currentColor" />

        {/* Right Leg (Front) */}
        <motion.g style={{ originX: "50px", originY: "110px", rotate: rightLegRot }}>
          <rect x="44" y="110" width="14" height="60" rx="7" fill="currentColor" />
        </motion.g>

        {/* Right Arm (Front) */}
        <motion.g style={{ originX: "50px", originY: "60px", rotate: rightArmRot }}>
          <rect x="46" y="60" width="12" height="50" rx="6" fill="currentColor" />
        </motion.g>

        {/* Head */}
        <circle cx="50" cy="25" r="18" fill="currentColor" />
      </svg>
    </motion.div>
  );
};

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.01 && !hasStarted) {
        setHasStarted(true);
      }
    });
  }, [scrollYProgress, hasStarted]);

  // World Movement (Horizontal scrolling illusion)
  const worldX = useTransform(scrollYProgress, [0, 1], ["0vw", "-400vw"]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0vw", "-100vw"]); 
  const midX = useTransform(scrollYProgress, [0, 1], ["0vw", "-250vw"]); 

  const numSteps = 40; 

  // Story Elements Opacity & Transforms
  const introOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  
  const event1Opacity = useTransform(scrollYProgress, [0.08, 0.12, 0.18, 0.22], [0, 1, 1, 0]);
  const event1Y = useTransform(scrollYProgress, [0.08, 0.12], [50, 0]);

  const event2Opacity = useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  
  const event3Opacity = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);

  const outroOpacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);

  // Companions joining the walk!
  const char2X = useTransform(scrollYProgress, [0.28, 0.38], ["-20vw", "12vw"]);
  const char2Opacity = useTransform(scrollYProgress, [0.28, 0.31], [0, 1]);

  const char3X = useTransform(scrollYProgress, [0.58, 0.68], ["-20vw", "28vw"]);
  const char3Opacity = useTransform(scrollYProgress, [0.58, 0.61], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-dark text-white">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-end pb-20">
        
        {/* Sky gradient that changes as we walk */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            background: useTransform(
              scrollYProgress,
              [0, 0.3, 0.6, 1],
              [
                "linear-gradient(to bottom, #0f1108, #1a1e0f)", 
                "linear-gradient(to bottom, #1a1e0f, #2d3320)",
                "linear-gradient(to bottom, #10150d, #1a1e0f)",
                "linear-gradient(to bottom, #000000, #0f1108)"
              ]
            )
          }}
        />

        {/* --- LAYER 1: Deep Background (Slow Parallax) --- */}
        <motion.div className="absolute bottom-[20vh] left-0 h-[40vh] w-[200vw] flex z-0 text-lime" style={{ x: bgX }}>
          <Cityscape className="w-[100vw] h-full" />
          <Mountain className="w-[100vw] h-full text-card" />
        </motion.div>

        {/* --- LAYER 2: Midground (Medium Parallax) --- */}
        <motion.div className="absolute bottom-[10vh] left-0 h-[30vh] w-[350vw] flex items-end z-10" style={{ x: midX }}>
          {Array.from({length: 20}).map((_, i) => (
            <Tree key={i} className="h-full w-auto opacity-40 ml-[10vw]" />
          ))}
        </motion.div>

        {/* --- LAYER 3: Foreground (Main Track) --- */}
        <motion.div className="absolute bottom-0 left-0 h-full w-[500vw] flex items-end z-20" style={{ x: worldX }}>
          
          {/* Ground Line */}
          <div className="absolute bottom-[10vh] left-0 w-full h-1 bg-border-custom" />

          {/* Story Points Container */}
          <div className="absolute bottom-[15vh] w-full h-full pointer-events-none">
            
            {/* Event 1: The Problem */}
            <div className="absolute left-[80vw] bottom-0 flex items-end">
              <div className="w-[200px] h-[300px] bg-card border border-border-custom rounded-xl p-6 relative">
                <div className="w-4 h-4 bg-lime rounded-full absolute -left-2 top-10" />
                <h3 className="text-xl font-display font-bold text-lime mb-2">The Solo Grind</h3>
                <p className="text-muted text-sm">Walking alone is fine. But day after day, the same route gets quiet. Too quiet.</p>
              </div>
            </div>

            {/* Event 2: A Companion Appears */}
            <div className="absolute left-[180vw] bottom-0 flex items-end gap-10">
              <div className="w-[300px] bg-card border border-border-custom rounded-xl p-8 transform -translate-y-20 relative">
                <h3 className="text-2xl font-display font-bold text-orange-custom mb-2">Paths Cross</h3>
                <p className="text-muted text-sm">WalkMate finds people heading your way. Real people, verified profiles. No more walking alone.</p>
              </div>
            </div>

            {/* Event 3: The Features as Environment */}
            <div className="absolute left-[280vw] bottom-0 flex gap-20">
              <div className="w-[200px] h-[150px] bg-card border border-border-custom rounded-xl p-6 text-center flex flex-col justify-center border-t-4 border-t-teal-custom">
                <h4 className="font-display font-bold text-teal-custom">Safety First</h4>
                <p className="text-xs text-muted mt-2">Verified users. Live location sharing. One-tap SOS.</p>
              </div>
              <div className="w-[200px] h-[150px] bg-card border border-border-custom rounded-xl p-6 text-center flex flex-col justify-center border-t-4 border-t-lime mt-20">
                <h4 className="font-display font-bold text-lime">Choose Your Vibe</h4>
                <p className="text-xs text-muted mt-2">Chill, Chatty, Brisk, or Nature.</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* --- LAYER 4: The Characters (Fixed in viewport, animated by scroll) --- */}
        
        {/* Main Character (Always present) */}
        <WalkingCharacter 
          scrollYProgress={scrollYProgress} 
          numSteps={numSteps} 
          offsetPhase={0} 
          x="20vw" 
          opacity={1} 
          color="white" 
          zIndex={30}
        />

        {/* 2nd Character (Joins around Event 2) */}
        <WalkingCharacter 
          scrollYProgress={scrollYProgress} 
          numSteps={numSteps} 
          offsetPhase={1.2} 
          x={char2X} 
          opacity={char2Opacity} 
          color="var(--orange-custom)" 
          scale={0.9}
          zIndex={25}
        />

        {/* 3rd Character (Joins around Event 3) */}
        <WalkingCharacter 
          scrollYProgress={scrollYProgress} 
          numSteps={numSteps} 
          offsetPhase={2.5} 
          x={char3X} 
          opacity={char3Opacity} 
          color="var(--teal-custom)" 
          scale={0.85}
          zIndex={20}
        />

        {/* --- UI LAYER (Fixed over everything) --- */}
        
        {/* Initial Instruction */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
          style={{ opacity: introOpacity }}
        >
          <div className="text-center">
            <h1 className="text-6xl font-display font-bold mb-4 uppercase italic tracking-tighter">
              Walk<span className="text-lime">Mate</span>
            </h1>
            <p className="text-xl text-muted flex items-center gap-2 justify-center">
              Scroll to begin your journey <span className="animate-bounce">↓</span>
            </p>
          </div>
        </motion.div>

        {/* Dynamic Story Overlays */}
        <motion.div 
          className="absolute top-1/4 left-[40vw] max-w-md pointer-events-none z-40"
          style={{ opacity: event1Opacity, y: event1Y }}
        >
          <h2 className="text-4xl font-display font-bold mb-2">Every day is a routine.</h2>
          <p className="text-lg text-muted">We walk to work. We walk to the gym. We walk to clear our heads.</p>
        </motion.div>

        <motion.div 
          className="absolute top-1/3 left-[40vw] max-w-md pointer-events-none z-40"
          style={{ opacity: event2Opacity }}
        >
          <h2 className="text-4xl font-display font-bold mb-2">But what if...</h2>
          <p className="text-lg text-muted">You could share that time? Make a connection? Turn a commute into a conversation?</p>
        </motion.div>

        <motion.div 
          className="absolute top-1/4 left-[40vw] max-w-md pointer-events-none z-40"
          style={{ opacity: event3Opacity }}
        >
          <h2 className="text-5xl font-display font-bold mb-2 text-lime italic uppercase">Your terms.</h2>
          <p className="text-xl text-white">Choose who you walk with. Choose how you walk.</p>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-50 bg-dark/80 backdrop-blur-sm"
          style={{ opacity: outroOpacity }}
        >
          <div className="text-center pointer-events-auto">
            <h2 className="text-6xl font-display font-bold mb-6 text-white">Never walk alone again.</h2>
            <button className="bg-lime text-dark font-display font-bold rounded-full hover:scale-105 transition-all text-xl px-12 py-6">
              Join the Waitlist
            </button>
            <div className="mt-8 flex gap-4 justify-center">
              <button className="px-6 py-3 border border-border-custom rounded-xl hover:bg-card transition-colors">Download App Store</button>
              <button className="px-6 py-3 border border-border-custom rounded-xl hover:bg-card transition-colors">Download Google Play</button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
