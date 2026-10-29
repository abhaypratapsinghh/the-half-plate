package com.thehalfplate.backend.controller;

import com.thehalfplate.backend.model.MenuCategory;
import com.thehalfplate.backend.service.MenuService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping
    public List<MenuCategory> getMenu() {
        return menuService.getAllCategories();
    }
}
