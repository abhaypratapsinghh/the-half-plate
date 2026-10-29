import MenuItem from "./MenuItem";
import type { MenuCategory } from "../../data/types";

export default function MenuList({ category }: { category: MenuCategory }) {
  return (
    <ul role="tabpanel" className="mx-auto max-w-2xl divide-y divide-line">
      {category.items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
