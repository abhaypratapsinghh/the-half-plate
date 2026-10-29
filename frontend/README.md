# THE HALF PLATE — frontend

React + Vite (TypeScript) rewrite of the original static site, styled with
Tailwind CSS, with Redux Toolkit + the Context API for state and React Router
for client-side routing (each page is lazy-loaded). Standalone —
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
├── main.tsx                 # providers: Redux store, router, ContactProvider
├── App.tsx                  # layout (header/footer) + lazy-loaded routes
├── index.css                # Tailwind import + @theme design tokens
├── pages/                   # one component per route: /, /menu, /contact, 404
├── components/              # ui/ primitives, layout/, and per-page modules
├── store/                   # Redux Toolkit store, uiSlice, typed hooks
├── context/                 # ContactContext — backend contact info shared app-wide
├── data/                    # static menu/offers/testimonial content (typed)
├── services/                # data-fetching functions (contact hits the backend)
└── hooks/                   # useMenu/useOffers/useContact — {data, loading, error}
```

Routes are client-side, so any static host must fall back to `index.html`
for unknown paths (`npm run dev` and `npm run preview` already do).

Menu/offer content currently lives in `src/data/` and is read through
`src/services/` + `src/hooks/`. To wire this up to the backend later,
change the body of `services/menuService.ts` / `services/offerService.ts`
to call `fetch('/api/menu')` / `fetch('/api/offers')` — no component needs
to change.
