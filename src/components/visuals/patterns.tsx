export function GradientOrb() {
  return <div className="pointer-events-none absolute -top-10 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(75,255,214,0.3),transparent_60%)] blur-2xl" />;
}

export function FlowLines() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="none">
      <path d="M0 280 C180 180, 240 180, 420 230 S700 340, 1000 190" stroke="url(#g1)" strokeWidth="2" />
      <path d="M0 320 C220 260, 320 200, 540 240 S780 300, 1000 260" stroke="url(#g2)" strokeWidth="2" />
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#47f2ca" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#84cc16" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DotMesh() {
  return <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.12)_1px,transparent_0)] [background-size:20px_20px] opacity-20" />;
}
