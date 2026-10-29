import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import ContactDetails from "../components/contact/ContactDetails";
import MapEmbed from "../components/contact/MapEmbed";
import { useContactInfo } from "../context/ContactContext";

export default function ContactPage() {
  const { data: contact, loading } = useContactInfo();

  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Visit Us" subtitle="We'd love to have you at the table" />

        {loading && <p className="text-center text-muted">Loading contact details…</p>}
        {!loading && !contact && (
          <p className="text-center text-muted">Contact details are unavailable right now.</p>
        )}

        {contact && (
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <ContactDetails contact={contact} />
            <MapEmbed src={contact.mapEmbedUrl} />
          </div>
        )}
      </Container>
    </section>
  );
}
