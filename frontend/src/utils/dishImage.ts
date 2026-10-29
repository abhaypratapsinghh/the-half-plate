/** Dish photos live in public/images/menu, named by menu item id. */
export function dishImage(itemId: string): string {
  return `/images/menu/${itemId}.jpg`;
}
