import type { MenuCategory } from "./types";

/**
 * Static menu content, ported from the original static site with prices
 * converted from USD to round INR figures. Mirrors the backend's
 * InMemoryMenuService so both halves agree while this stays static.
 */
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "appetizers",
    name: "Appetizers",
    icon: "fa-leaf",
    items: [
      {
        id: "spring-rolls",
        name: "Spring Rolls",
        description: "Crispy vegetable spring rolls with sweet and sour sauce",
        price: 149,
      },
      {
        id: "bruschetta",
        name: "Bruschetta",
        description: "Toasted bread with fresh tomatoes, garlic, and basil",
        price: 129,
      },
      {
        id: "chicken-wings",
        name: "Chicken Wings",
        description: "Marinated and grilled chicken wings with house sauce",
        price: 179,
      },
    ],
  },
  {
    id: "main-course",
    name: "Main Course",
    icon: "fa-utensils",
    items: [
      {
        id: "grilled-salmon",
        name: "Grilled Salmon",
        description: "Fresh salmon fillet with lemon butter and seasonal vegetables",
        price: 399,
      },
      {
        id: "beef-tenderloin",
        name: "Beef Tenderloin",
        description: "Premium beef tenderloin with red wine reduction",
        price: 449,
      },
      {
        id: "vegetarian-pasta",
        name: "Vegetarian Pasta",
        description: "Fresh pasta with seasonal vegetables and truffle oil",
        price: 249,
      },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    icon: "fa-bowl-food",
    items: [
      {
        id: "garlic-bread",
        name: "Garlic Bread",
        description: "Crispy bread with garlic butter and fresh herbs",
        price: 99,
      },
      {
        id: "fries",
        name: "Fries",
        description: "Crispy hand-cut fries with house seasoning",
        price: 79,
      },
      {
        id: "mixed-salad",
        name: "Mixed Salad",
        description: "Fresh greens with house vinaigrette dressing",
        price: 139,
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "fa-ice-cream",
    items: [
      {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        description: "Rich chocolate cake with creamy frosting",
        price: 119,
      },
      {
        id: "cheesecake",
        name: "Cheesecake",
        description: "New York style cheesecake with berry topping",
        price: 149,
      },
      {
        id: "ice-cream",
        name: "Ice Cream",
        description: "Premium ice cream with your choice of toppings",
        price: 99,
      },
    ],
  },
];
