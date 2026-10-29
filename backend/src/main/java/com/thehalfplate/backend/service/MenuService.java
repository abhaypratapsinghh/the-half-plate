package com.thehalfplate.backend.service;

import com.thehalfplate.backend.model.MenuCategory;

import java.util.List;

/**
 * Supplies the restaurant's menu. The in-memory implementation is the only
 * one today; a persistence-backed implementation can be added later without
 * touching {@link com.thehalfplate.backend.controller.MenuController}.
 */
public interface MenuService {

    List<MenuCategory> getAllCategories();
}
