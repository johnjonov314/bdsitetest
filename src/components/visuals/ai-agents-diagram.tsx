export function AIAgentsDiagram() {
  const blocks = ["Data", "Models", "Agents", "Outcomes"];
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-6">
      <svg viewBox="0 0 900 180" className="h-44 w-full">
        <defs>
          <linearGradient id="pipe" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#4ef1d2" />
            <stop offset="0.6" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#b9ff66" />
          </linearGradient>
        </defs>
        {blocks.map((label, i) => (
          <g key={label} transform={`translate(${20 + i * 215},30)`}>
            <rect width="190" height="100" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" />
            <text x="95" y="58" textAnchor="middle" fill="white" fontSize="20">{label}</text>
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M ${210 + i * 215} 80 L ${235 + i * 215} 80`} stroke="url(#pipe)" strokeWidth="4" />
        ))}
      </svg>
    </div>
  );
}
