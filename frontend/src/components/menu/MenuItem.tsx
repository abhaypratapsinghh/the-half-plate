import { dishImage } from "../../utils/dishImage";
import { formatCurrency } from "../../utils/formatCurrency";
import type { MenuItem as MenuItemData } from "../../data/types";

export default function MenuItem({ item }: { item: MenuItemData }) {
  return (
    <li className="flex items-center gap-4 py-4">
      <img
        src={dishImage(item.id)}
        alt={item.name}
        loading="lazy"
        className="h-20 w-20 flex-none rounded-xl object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <span className="font-medium text-ink">{item.name}</span>
          <span className="flex-1 border-b border-dotted border-muted/40" />
          <span className="font-medium text-brand">{formatCurrency(item.price)}</span>
        </div>
        <p className="mt-1 text-sm text-muted">{item.description}</p>
      </div>
    </li>
  );
}
