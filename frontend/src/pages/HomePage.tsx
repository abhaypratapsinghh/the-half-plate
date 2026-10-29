import Favourites from "../components/home/Favourites";
import Hero from "../components/home/Hero";
import OfferBanner from "../components/home/OfferBanner";
import Reviews from "../components/home/Reviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OfferBanner />
      <Favourites />
      <Reviews />
    </>
  );
}
