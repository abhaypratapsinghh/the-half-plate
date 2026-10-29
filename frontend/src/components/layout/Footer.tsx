import { Link } from "react-router";
import Container from "../ui/Container";
import { useContactInfo } from "../../context/ContactContext";

export default function Footer() {
  const { data: contact } = useContactInfo();

  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p>&copy; 2026 The Half Plate. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {contact && (
            <a href={`tel:${contact.phone}`} className="whitespace-nowrap hover:text-ink">
              {contact.phone}
            </a>
          )}
          <Link to="/menu" className="hover:text-ink">
            Menu
          </Link>
          <Link to="/contact" className="hover:text-ink">
            Contact
          </Link>
          <Link to="/credits" className="whitespace-nowrap hover:text-ink">
            Photo credits
          </Link>
        </div>
      </Container>
    </footer>
  );
}
