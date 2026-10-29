import { MENU_CATEGORIES } from "../data/menu";
import type { MenuCategory } from "../data/types";

/**
 * Returns the menu. Backed by static local data today; swapping the body
 * for `fetch('/api/menu').then(r => r.json())` later changes only this
 * file — callers (useMenu) and components stay the same.
 */
export async function getMenuCategories(): Promise<MenuCategory[]> {
  return MENU_CATEGORIES;
}
