package com.thehalfplate.backend.service;

import com.thehalfplate.backend.model.Review;

import java.util.List;

/** Supplies and accepts guest reviews and feedback. */
public interface ReviewService {

    List<Review> getReviews();

    Review addReview(String author, int rating, String text);

    void deleteReview(String id);
}
