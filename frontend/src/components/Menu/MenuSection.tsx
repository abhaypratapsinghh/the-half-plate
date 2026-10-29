import { useMenu } from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";

export default function MenuSection() {
  const { data: categories, loading, error } = useMenu();

  return (
    <section id="menu">
      <div className="container">
        <div className="section-header">
          <h2>Featured Menu</h2>
          <p>Discover our carefully curated selection of dishes</p>
        </div>

        {loading && <p>Loading menu…</p>}
        {error && <p>Could not load the menu right now.</p>}

        <div className="menu-grid">
          {categories.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
