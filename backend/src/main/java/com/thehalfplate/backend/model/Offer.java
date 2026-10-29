package com.thehalfplate.backend.model;

/**
 * A promotional offer shown on the Special Offers section.
 *
 * @param leadIn side text shown before the badge, e.g. "Enjoy"
 * @param percentage large standalone figure inside the badge, e.g. "10%"
 * @param badgeDetail rest of the badge copy, e.g. "Discount On Every Order"
 * @param leadOut side text shown after the badge, e.g. "This Week!"
 * @param validity small print, e.g. "Limited Time Offer"
 */
public record Offer(String id, String leadIn, String percentage, String badgeDetail, String leadOut, String validity) {
}
