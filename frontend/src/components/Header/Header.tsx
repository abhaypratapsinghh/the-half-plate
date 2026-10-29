import { useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#offers", label: "Special Offers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          THE HALF PLATE
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((open) => !open)}
        >
          <i className={`fas ${isNavOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        <nav>
          <ul className={`nav-links${isNavOpen ? " is-open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsNavOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#order" className="cta-btn">
          Order Online
        </a>
      </div>
    </header>
  );
}
