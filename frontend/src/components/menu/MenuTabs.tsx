import type { MenuCategory } from "../../data/types";

interface MenuTabsProps {
  categories: MenuCategory[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function MenuTabs({ categories, activeId, onSelect }: MenuTabsProps) {
  return (
    <div role="tablist" className="mb-10 flex flex-wrap justify-center gap-2">
      {categories.map((category) => {
        const active = category.id === activeId;
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(category.id)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              active ? "bg-brand text-white" : "text-muted hover:text-ink"
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
