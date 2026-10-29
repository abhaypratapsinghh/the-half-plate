import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { MENU_CATEGORIES } from "../data/menu";
import { PHOTO_CREDITS } from "../data/photoCredits";

export default function CreditsPage() {
  const items = MENU_CATEGORIES.flatMap((category) => category.items).filter(
    (item) => PHOTO_CREDITS[item.id],
  );

  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Photo Credits" subtitle="Dish photos from Wikimedia Commons" />
        <ul className="mx-auto max-w-2xl divide-y divide-line text-sm">
          {items.map((item) => {
            const credit = PHOTO_CREDITS[item.id];
            return (
              <li key={item.id} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3">
                <a href={credit.source} className="font-medium text-ink hover:text-brand">
                  {item.name}
                </a>
                <span className="ml-auto text-right text-muted">
                  {credit.author} ·{" "}
                  <a href={credit.licenseUrl} className="hover:text-brand">
                    {credit.license}
                  </a>
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
