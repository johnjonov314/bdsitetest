# Acceptance Checklist

## Layout and UX
- [x] Home is scene-based, not stacked static grid sections.
- [x] No global horizontal overflow.
- [x] Floating CTA remains reachable and safe-area aware.
- [x] Bottom sheet opens/closes reliably and supports Escape/backdrop close.
- [x] Decorative layers use pointer-events discipline.

## Motion grammar
- [x] Scroll progress drives core scene morphing.
- [x] Dominant motion per viewport.
- [x] Reduced motion fallback implemented.
- [x] `?lite=1` disables secondary ambient motion.

## Mobile-first requirements
- [x] Tap targets are >= 44px in critical controls.
- [x] No sticky collisions between global assistant and page controls.
- [x] Sheet/CTA do not trap user interactions.

## QA tooling
- [x] `?qa=1` overlay available.
- [x] Playwright visual smoke test file added.

## Build quality
- [x] Lint passes.
- [x] Typecheck passes.
- [x] Production build passes.
