package com.thehalfplate.backend.model;

/**
 * A social media link shown in the footer.
 *
 * @param platform display name, e.g. "Instagram"
 * @param icon Font Awesome brand icon class, e.g. "fa-instagram"
 * @param url link target
 */
public record SocialLink(String platform, String icon, String url) {
}
