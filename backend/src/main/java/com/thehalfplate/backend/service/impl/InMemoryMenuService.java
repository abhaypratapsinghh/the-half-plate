package com.thehalfplate.backend.service.impl;

import com.thehalfplate.backend.model.MenuCategory;
import com.thehalfplate.backend.model.MenuItem;
import com.thehalfplate.backend.service.MenuService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

/**
 * Hardcoded vegetarian menu (prices in INR). Mirrors the frontend's
 * {@code src/data/menu.ts} content so both halves agree while the frontend
 * still serves its own static copy.
 */
@Service
public class InMemoryMenuService implements MenuService {

    private final List<MenuCategory> categories = List.of(
            new MenuCategory("starters", "Starters", "fa-leaf", List.of(
                    new MenuItem("paneer-tikka", "Paneer Tikka",
                            "Eight pieces of paneer marinated in spiced yoghurt and chargrilled", BigDecimal.valueOf(379)),
                    new MenuItem("hara-bhara-kebab", "Hara Bhara Kabab",
                            "Eight spinach, pea and potato kababs with mint chutney", BigDecimal.valueOf(329)),
                    new MenuItem("chilli-paneer", "Paneer Chilli Dry",
                            "Crisp paneer tossed with peppers, onion and spicy Indo-Chinese sauce", BigDecimal.valueOf(349)),
                    new MenuItem("honey-chilli-potato", "Honey Chilli Potato",
                            "Crispy potato fingers in a sweet and spicy glaze", BigDecimal.valueOf(239))
            )),
            new MenuCategory("south-indian", "South Indian", "fa-bowl-food", List.of(
                    new MenuItem("masala-dosa", "Masala Dosa",
                            "Crisp dosa filled with spiced potato, served with sambhar and red chutney", BigDecimal.valueOf(120)),
                    new MenuItem("plain-dosa", "Plain Dosa",
                            "Thin, golden dosa with sambhar and chutney", BigDecimal.valueOf(90)),
                    new MenuItem("idli-sambhar", "Idli Sambhar",
                            "Soft steamed rice cakes with sambhar and coconut chutney", BigDecimal.valueOf(80)),
                    new MenuItem("onion-uttapam", "Onion Uttapam",
                            "Thick rice pancake topped with onion, tomato and green chilli", BigDecimal.valueOf(110))
            )),
            new MenuCategory("main-course", "Main Course", "fa-utensils", List.of(
                    new MenuItem("paneer-butter-masala", "Paneer Butter Masala",
                            "Soft paneer in a rich, mildly spiced tomato and butter gravy", BigDecimal.valueOf(319)),
                    new MenuItem("kadhai-paneer", "Kadhai Paneer",
                            "Paneer and capsicum cooked with freshly ground kadhai masala", BigDecimal.valueOf(359)),
                    new MenuItem("malai-kofta", "Malai Kofta",
                            "Paneer and potato dumplings in a creamy cashew gravy", BigDecimal.valueOf(359)),
                    new MenuItem("palak-paneer", "Palak Paneer",
                            "Paneer cubes in a smooth, gently spiced spinach gravy", BigDecimal.valueOf(339))
            )),
            new MenuCategory("chinese", "Chinese", "fa-bowl-rice", List.of(
                    new MenuItem("hakka-noodles", "Hakka Noodles",
                            "Wok-tossed noodles with crunchy vegetables", BigDecimal.valueOf(229)),
                    new MenuItem("veg-fried-rice", "Veg Fried Rice",
                            "Wok-fried rice with vegetables and spring onion", BigDecimal.valueOf(189)),
                    new MenuItem("veg-manchurian", "Veg Manchurian Dry",
                            "Vegetable dumplings tossed in a tangy garlic and soy sauce", BigDecimal.valueOf(279)),
                    new MenuItem("spring-roll", "Spring Roll",
                            "Eight crisp vegetable spring rolls", BigDecimal.valueOf(199))
            )),
            new MenuCategory("biryani-rice", "Biryani & Rice", "fa-bowl-rice", List.of(
                    new MenuItem("veg-biryani", "Veg Biryani",
                            "Fragrant basmati layered with vegetables and whole spices", BigDecimal.valueOf(240)),
                    new MenuItem("dum-biryani", "Dum Biryani",
                            "Slow-cooked on dum in a sealed pot for a deeper aroma", BigDecimal.valueOf(280)),
                    new MenuItem("matka-biryani", "Matka Biryani",
                            "Biryani cooked and served in a clay pot", BigDecimal.valueOf(400)),
                    new MenuItem("jeera-rice", "Jeera Rice",
                            "Basmati rice tempered with cumin and ghee", BigDecimal.valueOf(120))
            )),
            new MenuCategory("breads", "Breads", "fa-bread-slice", List.of(
                    new MenuItem("tandoori-roti", "Tandoori Roti",
                            "Whole-wheat bread baked in the clay oven", BigDecimal.valueOf(20)),
                    new MenuItem("lachcha-paratha", "Lachcha Paratha",
                            "Flaky, layered whole-wheat paratha", BigDecimal.valueOf(40)),
                    new MenuItem("butter-naan", "Butter Naan",
                            "Soft leavened bread brushed with butter", BigDecimal.valueOf(60)),
                    new MenuItem("garlic-naan", "Garlic Naan",
                            "Naan topped with garlic and fresh coriander", BigDecimal.valueOf(80))
            )),
            new MenuCategory("snacks", "Snacks & Fast Food", "fa-burger", List.of(
                    new MenuItem("chole-bhature", "Chole Bhature",
                            "Two fluffy bhature with spiced chickpea curry", BigDecimal.valueOf(149)),
                    new MenuItem("veg-burger", "Veg Burger",
                            "Crispy vegetable patty with fresh veggies and sauce", BigDecimal.valueOf(109)),
                    new MenuItem("veg-cheese-grilled-sandwich", "Veg Cheese Grilled Sandwich",
                            "Grilled sandwich loaded with vegetables and cheese", BigDecimal.valueOf(179)),
                    new MenuItem("white-sauce-pasta", "White Sauce Pasta",
                            "Penne in a creamy, cheesy white sauce", BigDecimal.valueOf(259))
            )),
            new MenuCategory("drinks", "Drinks", "fa-mug-hot", List.of(
                    new MenuItem("sweet-lassi", "Sweet Lassi",
                            "Chilled, thick sweetened yoghurt drink", BigDecimal.valueOf(99)),
                    new MenuItem("masala-chaas", "Masala Chaas",
                            "Spiced buttermilk with roasted cumin", BigDecimal.valueOf(69)),
                    new MenuItem("cold-coffee", "Cold Coffee",
                            "Creamy blended iced coffee", BigDecimal.valueOf(159)),
                    new MenuItem("chocolate-shake", "Chocolate Shake",
                            "Thick chocolate milkshake", BigDecimal.valueOf(179))
            ))
    );

    @Override
    public List<MenuCategory> getAllCategories() {
        return categories;
    }
}
