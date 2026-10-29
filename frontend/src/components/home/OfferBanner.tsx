import Container from "../ui/Container";
import { useOffers } from "../../hooks/useOffers";

export default function OfferBanner() {
  const { data: offers } = useOffers();
  const offer = offers[0];

  if (!offer) return null;

  return (
    <section className="border-y border-line bg-white">
      <Container className="py-5 text-center text-sm sm:text-base">
        <span className="text-ink">
          {offer.leadIn} <strong className="text-brand">{offer.percentage}</strong> {offer.badgeDetail}{" "}
          {offer.leadOut}
        </span>
        <span className="mx-2 text-line">·</span>
        <span className="text-muted">{offer.validity}</span>
      </Container>
    </section>
  );
}
