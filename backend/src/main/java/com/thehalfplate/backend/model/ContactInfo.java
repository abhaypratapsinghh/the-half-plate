package com.thehalfplate.backend.model;

import java.util.List;

/**
 * The restaurant's contact details and location, shown in the footer.
 *
 * @param addressLines postal address, one line per entry
 * @param phone contact phone number
 * @param email contact email address
 * @param openingHours human-readable opening hours, e.g. "11:00 AM – 11:00 PM"
 * @param socialLinks social media links
 * @param mapEmbedUrl Google Maps embed URL for the restaurant's location
 */
public record ContactInfo(List<String> addressLines, String phone, String email, String openingHours,
                           List<SocialLink> socialLinks, String mapEmbedUrl) {
}
