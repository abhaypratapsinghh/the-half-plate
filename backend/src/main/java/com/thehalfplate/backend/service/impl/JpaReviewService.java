package com.thehalfplate.backend.service.impl;

import com.thehalfplate.backend.entity.ReviewEntity;
import com.thehalfplate.backend.model.Review;
import com.thehalfplate.backend.repository.ReviewRepository;
import com.thehalfplate.backend.service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

/**
 * Persists guest reviews/feedback in Postgres, seeded on first boot with the
 * restaurant's existing Google reviews if the table is empty.
 */
@Service
public class JpaReviewService implements ReviewService {

    private final ReviewRepository repository;

    public JpaReviewService(ReviewRepository repository) {
        this.repository = repository;
        seedIfEmpty();
    }

    private void seedIfEmpty() {
        if (repository.count() > 0) return;

        seed("Lalit Singh", "New food option in Barabanki. Quality of noodle was good enough. Dosa was also tasty, specially Sambhar & Red chutney.");
        seed("Sanjit Arya", "Wow, what a taste it was, I thoroughly enjoyed it. Great food and great service in Barabanki.");
        seed("Uday Maurya", "So nice ambiance and food. You must try the Dosa!");
        seed("Juli Barman", "The food quality is very good and service was mind blowing, I was very satisfied with the restaurant food and service.");
        seed("Urvashi Singh", "Amazing facilities and services. Go visit and enjoy your day with your loved ones.");
        seed("Abhishek Yadav", "Food is very tasty and healthy. Service is very good. Thanks, and will visit again.");
    }

    private void seed(String author, String text) {
        repository.save(new ReviewEntity(author, 5, text, Instant.now()));
    }

    @Override
    @Transactional(readOnly = true)
    public List<Review> getReviews() {
        return repository.findAllByOrderByCreatedAtDesc().stream().map(this::toModel).toList();
    }

    @Override
    public Review addReview(String author, int rating, String text) {
        String trimmedAuthor = author == null ? "" : author.trim();
        String trimmedText = text == null ? "" : text.trim();

        if (trimmedAuthor.isEmpty() || trimmedAuthor.length() > 60) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Name must be between 1 and 60 characters.");
        }
        if (trimmedText.length() < 5 || trimmedText.length() > 500) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Review must be between 5 and 500 characters.");
        }
        if (rating < 1 || rating > 5) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Rating must be between 1 and 5.");
        }

        ReviewEntity entity = repository.save(new ReviewEntity(trimmedAuthor, rating, trimmedText, Instant.now()));
        return toModel(entity);
    }

    @Override
    public void deleteReview(String id) {
        UUID uuid = parseId(id);
        if (!repository.existsById(uuid)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found.");
        }
        repository.deleteById(uuid);
    }

    private UUID parseId(String id) {
        try {
            return UUID.fromString(id);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid review id.");
        }
    }

    private Review toModel(ReviewEntity entity) {
        return new Review(entity.getId().toString(), entity.getAuthor(), entity.getRating(), entity.getText(), entity.getCreatedAt());
    }
}
