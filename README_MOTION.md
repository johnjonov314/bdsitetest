# Motion implementation notes

## Brand token source
Brand colors are extracted from the existing repo token setup in `src/app/globals.css` and aligned with existing Tailwind theme usage:
- `--background`
- `--foreground`
- `--border`
- `--primary`
- `--accent`
- `--muted`

Additional scene-layer z-index tokens:
- `--z-bg`, `--z-content`, `--z-fx`, `--z-ui`, `--z-sheet`, `--z-cta`

## Typography
Current stack remains the existing project stack from globals with `display=swap` behavior inherited from app rendering. Scale is controlled via clamp values for H1/H2/H3 and body/caption rules in `src/app/globals.css`.

## Scroll progress mapping
Home scenes are rebuilt as dedicated scene components:
- `HeroScene`
- `CoreScene`
- `AgentsScene`
- `ArchitectureScene`
- `IndustriesScene`
- `FinalScene`

`useSceneProgress` computes normalized progress for sticky sections using `getBoundingClientRect` + viewport math and clamps with `clamp01`.

## QA / Lite modes
- `?qa=1` enables `QaOverlay` with safe-area + frame guides.
- `?lite=1` disables secondary ambient motion (`ringRotate`, orb animations).

## Running checks
```bash
npm run lint
npm run typecheck
npm run build
```

## Running visual smoke tests
```bash
npx playwright test tests/visual.spec.ts
```
