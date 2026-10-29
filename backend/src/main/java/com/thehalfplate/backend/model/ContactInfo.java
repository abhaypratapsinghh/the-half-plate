package com.thehalfplate.backend.model;

import java.util.List;

/**
 * The restaurant's contact details and location, shown in the footer.
 *
 * @param addressLines postal address, one line per entry
 * @param phone contact phone number
 * @param email contact email address
 * @param socialLinks social media links
 * @param mapEmbedUrl Google Maps embed URL for the restaurant's location
 */
public record ContactInfo(List<String> addressLines, String phone, String email,
                           List<SocialLink> socialLinks, String mapEmbedUrl) {
}
