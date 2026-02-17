export function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  if (inMax - inMin === 0) return outMin;
  const ratio = (value - inMin) / (inMax - inMin);
  return outMin + (outMax - outMin) * ratio;
}
