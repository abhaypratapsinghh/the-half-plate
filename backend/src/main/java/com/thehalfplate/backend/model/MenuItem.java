package com.thehalfplate.backend.model;

import java.math.BigDecimal;

/**
 * A single dish on the menu. Price is in INR (rupees), as a whole-rupee
 * BigDecimal rather than a primitive, since it represents money.
 */
public record MenuItem(String id, String name, String description, BigDecimal price) {
}
