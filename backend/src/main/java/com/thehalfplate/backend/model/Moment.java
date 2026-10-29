package com.thehalfplate.backend.model;

import java.time.Instant;

/**
 * A celebration or happy-moment photo shared by a guest.
 *
 * @param id unique identifier
 * @param category whether this is a restaurant celebration or a guest's happy moment
 * @param caption short description of the moment
 * @param submittedBy guest's display name, or {@code null} if not provided
 * @param imageUrl URL path the photo is served from
 * @param createdAt when the photo was shared
 */
public record Moment(String id, MomentCategory category, String caption, String submittedBy, String imageUrl, Instant createdAt) {
}
