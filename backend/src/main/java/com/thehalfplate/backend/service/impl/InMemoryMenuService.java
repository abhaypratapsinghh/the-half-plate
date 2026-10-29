package com.thehalfplate.backend.service.impl;

import com.thehalfplate.backend.model.MenuCategory;
import com.thehalfplate.backend.model.MenuItem;
import com.thehalfplate.backend.service.MenuService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

/**
 * Hardcoded menu data, ported from the original static site. Mirrors the
 * frontend's {@code src/data/menu.ts} content so both halves agree while
 * the frontend still serves its own static copy.
 */
@Service
public class InMemoryMenuService implements MenuService {

    private final List<MenuCategory> categories = List.of(
            new MenuCategory("appetizers", "Appetizers", "fa-leaf", List.of(
                    new MenuItem("spring-rolls", "Spring Rolls",
                            "Crispy vegetable spring rolls with sweet and sour sauce", BigDecimal.valueOf(149)),
                    new MenuItem("bruschetta", "Bruschetta",
                            "Toasted bread with fresh tomatoes, garlic, and basil", BigDecimal.valueOf(129)),
                    new MenuItem("chicken-wings", "Chicken Wings",
                            "Marinated and grilled chicken wings with house sauce", BigDecimal.valueOf(179))
            )),
            new MenuCategory("main-course", "Main Course", "fa-utensils", List.of(
                    new MenuItem("grilled-salmon", "Grilled Salmon",
                            "Fresh salmon fillet with lemon butter and seasonal vegetables", BigDecimal.valueOf(399)),
                    new MenuItem("beef-tenderloin", "Beef Tenderloin",
                            "Premium beef tenderloin with red wine reduction", BigDecimal.valueOf(449)),
                    new MenuItem("vegetarian-pasta", "Vegetarian Pasta",
                            "Fresh pasta with seasonal vegetables and truffle oil", BigDecimal.valueOf(249))
            )),
            new MenuCategory("sides", "Sides", "fa-bowl-food", List.of(
                    new MenuItem("garlic-bread", "Garlic Bread",
                            "Crispy bread with garlic butter and fresh herbs", BigDecimal.valueOf(99)),
                    new MenuItem("fries", "Fries",
                            "Crispy hand-cut fries with house seasoning", BigDecimal.valueOf(79)),
                    new MenuItem("mixed-salad", "Mixed Salad",
                            "Fresh greens with house vinaigrette dressing", BigDecimal.valueOf(139))
            )),
            new MenuCategory("desserts", "Desserts", "fa-ice-cream", List.of(
                    new MenuItem("chocolate-cake", "Chocolate Cake",
                            "Rich chocolate cake with creamy frosting", BigDecimal.valueOf(119)),
                    new MenuItem("cheesecake", "Cheesecake",
                            "New York style cheesecake with berry topping", BigDecimal.valueOf(149)),
                    new MenuItem("ice-cream", "Ice Cream",
                            "Premium ice cream with your choice of toppings", BigDecimal.valueOf(99))
            ))
    );

    @Override
    public List<MenuCategory> getAllCategories() {
        return categories;
    }
}
