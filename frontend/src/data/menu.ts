import type { MenuCategory } from "./types";

/**
 * Vegetarian menu (prices in INR). Mirrors the backend's InMemoryMenuService.
 * Prices come from the Zomato listing, except "Biryani & Rice" and "Breads"
 * (printed menu card) and "South Indian" (placeholders: not listed anywhere yet).
 */
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    icon: "fa-leaf",
    items: [
      {
        id: "paneer-tikka",
        name: "Paneer Tikka",
        description: "Eight pieces of paneer marinated in spiced yoghurt and chargrilled",
        price: 379,
      },
      {
        id: "hara-bhara-kebab",
        name: "Hara Bhara Kabab",
        description: "Eight spinach, pea and potato kababs with mint chutney",
        price: 329,
      },
      {
        id: "chilli-paneer",
        name: "Paneer Chilli Dry",
        description: "Crisp paneer tossed with peppers, onion and spicy Indo-Chinese sauce",
        price: 349,
      },
      {
        id: "honey-chilli-potato",
        name: "Honey Chilli Potato",
        description: "Crispy potato fingers in a sweet and spicy glaze",
        price: 239,
      },
    ],
  },
  {
    id: "south-indian",
    name: "South Indian",
    icon: "fa-bowl-food",
    items: [
      {
        id: "masala-dosa",
        name: "Masala Dosa",
        description: "Crisp dosa filled with spiced potato, served with sambhar and red chutney",
        price: 120,
      },
      {
        id: "plain-dosa",
        name: "Plain Dosa",
        description: "Thin, golden dosa with sambhar and chutney",
        price: 90,
      },
      {
        id: "idli-sambhar",
        name: "Idli Sambhar",
        description: "Soft steamed rice cakes with sambhar and coconut chutney",
        price: 80,
      },
      {
        id: "onion-uttapam",
        name: "Onion Uttapam",
        description: "Thick rice pancake topped with onion, tomato and green chilli",
        price: 110,
      },
    ],
  },
  {
    id: "main-course",
    name: "Main Course",
    icon: "fa-utensils",
    items: [
      {
        id: "paneer-butter-masala",
        name: "Paneer Butter Masala",
        description: "Soft paneer in a rich, mildly spiced tomato and butter gravy",
        price: 319,
      },
      {
        id: "kadhai-paneer",
        name: "Kadhai Paneer",
        description: "Paneer and capsicum cooked with freshly ground kadhai masala",
        price: 359,
      },
      {
        id: "malai-kofta",
        name: "Malai Kofta",
        description: "Paneer and potato dumplings in a creamy cashew gravy",
        price: 359,
      },
      {
        id: "palak-paneer",
        name: "Palak Paneer",
        description: "Paneer cubes in a smooth, gently spiced spinach gravy",
        price: 339,
      },
    ],
  },
  {
    id: "chinese",
    name: "Chinese",
    icon: "fa-bowl-rice",
    items: [
      {
        id: "hakka-noodles",
        name: "Hakka Noodles",
        description: "Wok-tossed noodles with crunchy vegetables",
        price: 229,
      },
      {
        id: "veg-fried-rice",
        name: "Veg Fried Rice",
        description: "Wok-fried rice with vegetables and spring onion",
        price: 189,
      },
      {
        id: "veg-manchurian",
        name: "Veg Manchurian Dry",
        description: "Vegetable dumplings tossed in a tangy garlic and soy sauce",
        price: 279,
      },
      {
        id: "spring-roll",
        name: "Spring Roll",
        description: "Eight crisp vegetable spring rolls",
        price: 199,
      },
    ],
  },
  {
    id: "biryani-rice",
    name: "Biryani & Rice",
    icon: "fa-bowl-rice",
    items: [
      {
        id: "veg-biryani",
        name: "Veg Biryani",
        description: "Fragrant basmati layered with vegetables and whole spices",
        price: 240,
      },
      {
        id: "dum-biryani",
        name: "Dum Biryani",
        description: "Slow-cooked on dum in a sealed pot for a deeper aroma",
        price: 280,
      },
      {
        id: "matka-biryani",
        name: "Matka Biryani",
        description: "Biryani cooked and served in a clay pot",
        price: 400,
      },
      {
        id: "jeera-rice",
        name: "Jeera Rice",
        description: "Basmati rice tempered with cumin and ghee",
        price: 120,
      },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    icon: "fa-bread-slice",
    items: [
      {
        id: "tandoori-roti",
        name: "Tandoori Roti",
        description: "Whole-wheat bread baked in the clay oven",
        price: 20,
      },
      {
        id: "lachcha-paratha",
        name: "Lachcha Paratha",
        description: "Flaky, layered whole-wheat paratha",
        price: 40,
      },
      {
        id: "butter-naan",
        name: "Butter Naan",
        description: "Soft leavened bread brushed with butter",
        price: 60,
      },
      {
        id: "garlic-naan",
        name: "Garlic Naan",
        description: "Naan topped with garlic and fresh coriander",
        price: 80,
      },
    ],
  },
  {
    id: "snacks",
    name: "Snacks & Fast Food",
    icon: "fa-burger",
    items: [
      {
        id: "chole-bhature",
        name: "Chole Bhature",
        description: "Two fluffy bhature with spiced chickpea curry",
        price: 149,
      },
      {
        id: "veg-burger",
        name: "Veg Burger",
        description: "Crispy vegetable patty with fresh veggies and sauce",
        price: 109,
      },
      {
        id: "veg-cheese-grilled-sandwich",
        name: "Veg Cheese Grilled Sandwich",
        description: "Grilled sandwich loaded with vegetables and cheese",
        price: 179,
      },
      {
        id: "white-sauce-pasta",
        name: "White Sauce Pasta",
        description: "Penne in a creamy, cheesy white sauce",
        price: 259,
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: "fa-mug-hot",
    items: [
      {
        id: "sweet-lassi",
        name: "Sweet Lassi",
        description: "Chilled, thick sweetened yoghurt drink",
        price: 99,
      },
      {
        id: "masala-chaas",
        name: "Masala Chaas",
        description: "Spiced buttermilk with roasted cumin",
        price: 69,
      },
      {
        id: "cold-coffee",
        name: "Cold Coffee",
        description: "Creamy blended iced coffee",
        price: 159,
      },
      {
        id: "chocolate-shake",
        name: "Chocolate Shake",
        description: "Thick chocolate milkshake",
        price: 179,
      },
    ],
  },
];
