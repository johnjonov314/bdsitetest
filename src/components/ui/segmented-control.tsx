"use client";

export function SegmentedControl({ items, active, onChange }: { items: string[]; active: string; onChange: (value: string) => void }) {
  return (
    <div className="segmented flex gap-2 overflow-x-auto pb-1">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`min-h-11 whitespace-nowrap rounded-full border px-4 py-2 text-sm ${active === item ? "border-orange-300/80 bg-orange-300/20 text-yellow-100" : "border-white/15 bg-white/5 text-muted"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
