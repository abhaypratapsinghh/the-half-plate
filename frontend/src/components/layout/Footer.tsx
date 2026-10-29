import { Link } from "react-router";
import Container from "../ui/Container";
import { useContactInfo } from "../../context/ContactContext";

export default function Footer() {
  const { data: contact } = useContactInfo();

  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>&copy; 2026 The Half Plate. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {contact && (
            <a href={`tel:${contact.phone}`} className="hover:text-ink">
              {contact.phone}
            </a>
          )}
          <Link to="/menu" className="hover:text-ink">
            Menu
          </Link>
          <Link to="/contact" className="hover:text-ink">
            Contact
          </Link>
          <Link to="/credits" className="hover:text-ink">
            Photo credits
          </Link>
        </div>
      </Container>
    </footer>
  );
}
