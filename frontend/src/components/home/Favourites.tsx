import { Link } from "react-router";
import Container from "../ui/Container";
import { useMenu } from "../../hooks/useMenu";
import { dishImage } from "../../utils/dishImage";
import { formatCurrency } from "../../utils/formatCurrency";

const FAVOURITE_IDS = ["masala-dosa", "paneer-butter-masala", "matka-biryani"];

export default function Favourites() {
  const { data: categories } = useMenu();
  const items = categories
    .flatMap((category) => category.items)
    .filter((item) => FAVOURITE_IDS.includes(item.id));

  if (items.length === 0) return null;

  return (
    <section className="py-20">
      <Container>
        <h2 className="text-center font-serif text-3xl font-semibold text-ink">Guest favourites</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <Link key={item.id} to="/menu" className="group">
              <img
                src={dishImage(item.id)}
                alt={item.name}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="mt-3 flex items-baseline justify-between">
                <span className="font-medium text-ink group-hover:text-brand">{item.name}</span>
                <span className="text-sm text-brand">{formatCurrency(item.price)}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
