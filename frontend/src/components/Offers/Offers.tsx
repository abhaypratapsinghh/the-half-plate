import { useOffers } from "../../hooks/useOffers";

export default function Offers() {
  const { data: offers, loading, error } = useOffers();
  const offer = offers[0];

  return (
    <section id="offers">
      <div className="container">
        <div className="section-header">
          <h2>Special Promotions</h2>
          <p>Enjoy exclusive offers on your next visit</p>
        </div>

        {loading && <p>Loading offers…</p>}
        {error && <p>Could not load offers right now.</p>}

        {offer && (
          <div className="offer-card">
            <div className="offer-side-text">{offer.leadIn}</div>

            <div className="badge">
              <div className="badge-text">
                <span>{offer.percentage}</span>
                {offer.badgeDetail}
              </div>
            </div>

            <div className="offer-side-text">{offer.leadOut}</div>

            <div className="timer-placeholder">
              <i className="far fa-clock"></i> {offer.validity}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
