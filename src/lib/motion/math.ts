export function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

export function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  if (inMax - inMin === 0) return outMin;
  const ratio = (value - inMin) / (inMax - inMin);
  return outMin + (outMax - outMin) * ratio;
}
