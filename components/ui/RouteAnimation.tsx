"use client";

import { motion } from "framer-motion";

export default function RouteAnimation() {
  return (
    <div className="w-full h-full">
      <svg
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background path (faded) */}
        <path
          d="M20 160 Q80 160 100 120 Q130 70 180 60 Q230 50 280 80 Q330 110 380 100"
          stroke="#2d3320"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Animated drawing route */}
        <motion.path
          d="M20 160 Q80 160 100 120 Q130 70 180 60 Q230 50 280 80 Q330 110 380 100"
          stroke="#C8F135"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="8 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Start dot */}
        <circle cx="20" cy="160" r="6" fill="#C8F135" />
        <circle cx="20" cy="160" r="12" fill="#C8F135" opacity="0.15" />

        {/* End dot */}
        <motion.circle
          cx="380"
          cy="100"
          r="6"
          fill="#3DFFC0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.3 }}
        />
        <motion.circle
          cx="380"
          cy="100"
          r="14"
          fill="#3DFFC0"
          opacity="0.15"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.3 }}
        />
      </svg>
    </div>
  );
}
