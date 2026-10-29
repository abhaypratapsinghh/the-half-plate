# THE HALF PLATE — frontend

React + Vite (TypeScript) rewrite of the original static site. Standalone —
no dependency on anything in `../backend`, so this folder can be lifted
into its own repo with no changes.

## Run

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build   # type-checks then builds to dist/
npm run preview # preview the production build locally
```

## Structure

```
src/
├── main.tsx / App.tsx      # entry point and top-level composition
├── styles/                  # ported design tokens + global stylesheet
├── components/              # one folder per page section
├── data/                    # static menu/offers/contact content (typed)
├── services/                 # data-fetching functions (static today)
└── hooks/                    # useMenu/useOffers — {data, loading, error}
```

Menu/offer content currently lives in `src/data/` and is read through
`src/services/` + `src/hooks/`. To wire this up to the backend later,
change the body of `services/menuService.ts` / `services/offerService.ts`
to call `fetch('/api/menu')` / `fetch('/api/offers')` — no component needs
to change.
