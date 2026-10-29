import MenuItem from "./MenuItem";
import type { MenuCategory as MenuCategoryData } from "../../data/types";

interface MenuCategoryProps {
  category: MenuCategoryData;
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <div className="menu-category">
      <h3>
        <i className={`fas ${category.icon}`}></i> {category.name}
      </h3>
      {category.items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}
