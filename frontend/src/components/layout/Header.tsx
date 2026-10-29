import { Link, NavLink } from "react-router";
import Container from "../ui/Container";
import OrderLinks from "../ui/OrderLinks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeNav, toggleNav } from "../../store/uiSlice";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/celebrations", label: "Celebrations" },
  { to: "/contact", label: "Contact" },
];

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `text-sm transition-colors ${isActive ? "font-semibold text-brand" : "text-muted hover:text-ink"}`;
}

export default function Header() {
  const navOpen = useAppSelector((state) => state.ui.navOpen);
  const dispatch = useAppDispatch();
  const close = () => dispatch(closeNav());

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-cream/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" onClick={close} className="font-serif text-xl font-bold tracking-wide text-brand">
          The Half Plate
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <OrderLinks size="sm" label="Order on" />
        </nav>

        <button
          type="button"
          className="p-2 text-ink md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
          onClick={() => dispatch(toggleNav())}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {navOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {navOpen && (
        <nav className="border-t border-line md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end onClick={close} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
            <OrderLinks size="sm" label="Order on" onClick={close} />
          </Container>
        </nav>
      )}
    </header>
  );
}
