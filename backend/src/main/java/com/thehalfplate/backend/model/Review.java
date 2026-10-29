package com.thehalfplate.backend.model;

import java.time.Instant;

/**
 * A guest review/feedback entry.
 *
 * @param id unique identifier
 * @param author guest's display name
 * @param rating star rating from 1 to 5
 * @param text review/feedback text
 * @param createdAt when the review was submitted
 */
public record Review(String id, String author, int rating, String text, Instant createdAt) {
}
