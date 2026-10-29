import { formatCurrency } from "../../utils/formatCurrency";
import type { MenuItem as MenuItemData } from "../../data/types";

interface MenuItemProps {
  item: MenuItemData;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <span>{item.name}</span>
        <span className="menu-item-price">{formatCurrency(item.price)}</span>
      </div>
      <div className="menu-item-desc">{item.description}</div>
    </div>
  );
}
