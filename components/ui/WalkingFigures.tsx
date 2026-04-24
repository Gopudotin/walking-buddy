"use client";

export default function WalkingFigures() {
  const figures = [
    { color: "#C8F135", delay: "0s", size: 48, anim: "animate-bob" },
    { color: "#3DFFC0", delay: "0.5s", size: 40, anim: "animate-bob-slow" },
    { color: "#FF6B35", delay: "1s", size: 44, anim: "animate-bob-slower" },
    { color: "#C8F135", delay: "1.5s", size: 36, anim: "animate-bob-slowest" },
  ];

  return (
    <div className="absolute bottom-[38%] left-0 right-0 pointer-events-none z-10">
      <div className="max-w-7xl mx-auto px-6 relative h-20">
        {figures.map((fig, i) => (
          <div
            key={i}
            className={`absolute bottom-0 ${fig.anim}`}
            style={{
              left: `${12 + i * 22}%`,
              animationDelay: fig.delay,
            }}
          >
            <WalkerSVG color={fig.color} size={fig.size} />
          </div>
        ))}
      </div>
    </div>
  );
}

function WalkerSVG({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size * 2.2}
      viewBox="0 0 24 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity="0.85"
    >
      {/* Head */}
      <circle cx="12" cy="5" r="4" fill={color} />
      {/* Body */}
      <line x1="12" y1="9" x2="12" y2="28" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Left arm */}
      <line x1="12" y1="14" x2="5" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Right arm */}
      <line x1="12" y1="14" x2="19" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Left leg */}
      <line x1="12" y1="28" x2="6" y2="40" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="40" x2="3" y2="50" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Right leg */}
      <line x1="12" y1="28" x2="18" y2="38" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="38" x2="22" y2="48" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
