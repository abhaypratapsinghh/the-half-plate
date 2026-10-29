import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const HomePage = lazy(() => import("./pages/HomePage"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const CelebrationsPage = lazy(() => import("./pages/CelebrationsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CreditsPage = lazy(() => import("./pages/CreditsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<p className="py-24 text-center text-muted">Loading…</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="celebrations" element={<CelebrationsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="credits" element={<CreditsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
