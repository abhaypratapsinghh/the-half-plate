import Container from "../components/ui/Container";
import OrderLinks from "../components/ui/OrderLinks";
import SectionHeading from "../components/ui/SectionHeading";
import MenuTabs from "../components/menu/MenuTabs";
import MenuList from "../components/menu/MenuList";
import { useMenu } from "../hooks/useMenu";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setActiveCategory } from "../store/uiSlice";

export default function MenuPage() {
  const { data: categories, loading, error } = useMenu();
  const activeId = useAppSelector((state) => state.ui.activeCategory);
  const dispatch = useAppDispatch();

  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Our Menu" subtitle="Pure vegetarian, made fresh to order" />
        <div className="-mt-4 mb-10 flex justify-center">
          <OrderLinks size="sm" label="Order online on" />
        </div>

        {loading && <p className="text-center text-muted">Loading menu…</p>}
        {error && <p className="text-center text-muted">Could not load the menu right now.</p>}

        {active && (
          <>
            <MenuTabs
              categories={categories}
              activeId={active.id}
              onSelect={(id) => dispatch(setActiveCategory(id))}
            />
            <MenuList category={active} />
          </>
        )}
      </Container>
    </section>
  );
}
