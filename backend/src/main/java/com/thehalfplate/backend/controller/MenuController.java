package com.thehalfplate.backend.controller;

import com.thehalfplate.backend.model.MenuCategory;
import com.thehalfplate.backend.service.MenuService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@Tag(name = "Menu", description = "Menu categories and items")
public class MenuController {

    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping
    @Operation(summary = "Get the full menu", description = "Returns all menu categories with their items, in display order.")
    public List<MenuCategory> getMenu() {
        return menuService.getAllCategories();
    }
}
