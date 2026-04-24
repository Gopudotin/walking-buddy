"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function ParallaxScene() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "-6%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "-18%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "-36%"]);

  return (
    <div ref={ref} className="absolute bottom-0 left-0 right-0 h-[42%] overflow-hidden pointer-events-none">
      {/* Layer 1 – distant skyline (0.1x) */}
      <motion.div style={{ y: y1 }} className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <rect x="0" y="0" width="1440" height="200" fill="#0f1108" />
          {/* Far buildings */}
          {[
            [0,140,60,60],[70,100,50,100],[130,120,70,80],[210,80,40,120],
            [260,110,55,90],[325,130,45,70],[380,90,65,110],[455,115,50,85],
            [515,105,60,95],[585,75,45,125],[640,120,55,80],[705,95,70,105],
            [785,130,40,70],[835,85,65,115],[910,110,55,90],[975,120,50,80],
            [1035,80,70,120],[1115,100,60,100],[1185,125,45,75],[1240,90,70,110],
            [1320,115,50,85],[1380,130,60,70],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="#161b0e" />
          ))}
          {/* Windows on far buildings */}
          {[
            [15,145,8,5],[15,155,8,5],[15,165,8,5],[30,145,8,5],[30,155,8,5],
            [80,105,6,4],[80,115,6,4],[80,125,6,4],[93,105,6,4],
            [220,85,7,5],[220,95,7,5],[220,105,7,5],[233,85,7,5],[233,95,7,5],
            [590,80,6,4],[590,90,6,4],[590,100,6,4],[602,80,6,4],
            [1040,85,6,4],[1040,95,6,4],[1040,105,6,4],[1055,85,6,4],
          ].map(([x, y, w, h], i) => (
            <rect key={`w${i}`} x={x} y={y} width={w} height={h} fill="#C8F135" opacity="0.12" />
          ))}
        </svg>
      </motion.div>

      {/* Layer 2 – mid buildings (0.3x) */}
      <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <rect x="0" y="0" width="1440" height="220" fill="transparent" />
          {[
            [0,60,80,160],[90,80,90,140],[190,40,70,180],[270,90,85,130],
            [365,55,75,165],[450,70,90,150],[550,45,80,175],[640,85,70,135],
            [720,50,95,170],[825,75,80,145],[915,40,90,180],[1015,65,75,155],
            [1100,85,85,135],[1195,45,90,175],[1295,70,80,150],[1385,55,55,165],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="#1a1e0f" />
          ))}
          {/* Mid-layer windows */}
          {[
            [10,65,12,8],[10,80,12,8],[10,95,12,8],[10,110,12,8],
            [30,65,12,8],[30,80,12,8],[30,95,12,8],
            [200,48,10,7],[200,62,10,7],[200,76,10,7],[200,90,10,7],
            [218,48,10,7],[218,62,10,7],
            [555,50,10,7],[555,64,10,7],[555,78,10,7],
            [573,50,10,7],[573,64,10,7],[573,78,10,7],
            [730,55,12,8],[730,70,12,8],[730,85,12,8],
            [752,55,12,8],[752,70,12,8],
            [1200,50,10,7],[1200,64,10,7],[1200,78,10,7],
            [1218,50,10,7],[1218,64,10,7],
          ].map(([x, y, w, h], i) => (
            <rect key={`w${i}`} x={x} y={y} width={w} height={h} fill="#C8F135" opacity="0.18" />
          ))}
          {/* Lime-accent lit windows */}
          {[
            [46,70,8,6],[275,95,10,7],[540,60,8,6],[820,80,10,7],[1020,70,8,6],
          ].map(([x, y, w, h], i) => (
            <rect key={`l${i}`} x={x} y={y} width={w} height={h} fill="#C8F135" opacity="0.6" />
          ))}
        </svg>
      </motion.div>

      {/* Layer 3 – foreground (0.6x) */}
      <motion.div style={{ y: y3 }} className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <rect x="0" y="0" width="1440" height="180" fill="transparent" />
          {/* Street ground */}
          <rect x="0" y="155" width="1440" height="25" fill="#1f2412" />
          {/* Street line */}
          <line x1="0" y1="162" x2="1440" y2="162" stroke="#2d3320" strokeWidth="1" />
          {/* Foreground buildings */}
          {[
            [0,20,110,160],[120,40,95,140],[225,0,120,180],[355,30,100,150],
            [465,15,110,165],[585,35,105,145],[700,5,130,175],[840,25,110,155],
            [960,10,120,170],[1090,30,110,150],[1210,0,130,180],[1350,20,90,160],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="#1f2412" />
          ))}
          {/* Foreground windows */}
          {[
            [10,25,16,11],[10,42,16,11],[10,59,16,11],[10,76,16,11],[10,93,16,11],
            [34,25,16,11],[34,42,16,11],[34,59,16,11],[34,76,16,11],
            [58,25,16,11],[58,42,16,11],[58,59,16,11],
            [130,45,14,10],[130,61,14,10],[130,77,14,10],[130,93,14,10],
            [150,45,14,10],[150,61,14,10],[150,77,14,10],
            [235,5,18,12],[235,23,18,12],[235,41,18,12],[235,59,18,12],[235,77,18,12],
            [261,5,18,12],[261,23,18,12],[261,41,18,12],[261,59,18,12],
            [710,10,20,13],[710,29,20,13],[710,48,20,13],[710,67,20,13],[710,86,20,13],
            [738,10,20,13],[738,29,20,13],[738,48,20,13],[738,67,20,13],
            [1100,35,16,11],[1100,52,16,11],[1100,69,16,11],[1100,86,16,11],
            [1122,35,16,11],[1122,52,16,11],[1122,69,16,11],
            [1220,5,18,12],[1220,23,18,12],[1220,41,18,12],[1220,59,18,12],[1220,77,18,12],
            [1246,5,18,12],[1246,23,18,12],[1246,41,18,12],
          ].map(([x, y, w, h], i) => (
            <rect key={`w${i}`} x={x} y={y} width={w} height={h} fill="#2d3320" />
          ))}
          {/* Lit windows – lime */}
          {[
            [34,42,16,11],[150,61,14,10],[261,23,18,12],[738,48,20,13],[1122,52,16,11],[1246,23,18,12],
          ].map(([x, y, w, h], i) => (
            <rect key={`l${i}`} x={x} y={y} width={w} height={h} fill="#C8F135" opacity="0.45" />
          ))}
          {/* Teal lit windows */}
          {[
            [58,59,16,11],[130,77,14,10],[710,67,20,13],[1100,69,16,11],
          ].map(([x, y, w, h], i) => (
            <rect key={`t${i}`} x={x} y={y} width={w} height={h} fill="#3DFFC0" opacity="0.3" />
          ))}
          {/* Street lamp posts */}
          {[200, 500, 800, 1100, 1380].map((x, i) => (
            <g key={`lamp${i}`}>
              <line x1={x} y1="130" x2={x} y2="155" stroke="#2d3320" strokeWidth="2" />
              <ellipse cx={x} cy="130" rx="3" ry="3" fill="#C8F135" opacity="0.8" />
              <ellipse cx={x} cy="130" rx="10" ry="6" fill="#C8F135" opacity="0.06" />
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
