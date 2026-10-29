import Button from "../ui/Button";
import Container from "../ui/Container";
import { ORDER_LINKS } from "../../data/links";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
          Vegetarian family restaurant · Barabanki
        </p>
        <h1 className="mt-4 font-serif text-5xl font-bold text-brand sm:text-6xl">The Half Plate</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Paneer curries, crisp dosas, Indo-Chinese, biryani and fresh tandoor breads, served in a
          warm, relaxed dining room on Dewa Road. Open every day, 11 AM to 11 PM.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button to="/menu">View Menu</Button>
          {ORDER_LINKS.map((link) => (
            <Button key={link.platform} to={link.url} variant="outline">
              Order on {link.platform}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
