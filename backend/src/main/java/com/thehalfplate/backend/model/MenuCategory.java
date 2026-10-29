package com.thehalfplate.backend.model;

import java.util.List;

/**
 * A group of menu items (e.g. "Appetizers"). {@code icon} is a Font Awesome
 * class name, mirrored on the frontend for identical rendering.
 */
public record MenuCategory(String id, String name, String icon, List<MenuItem> items) {
}
