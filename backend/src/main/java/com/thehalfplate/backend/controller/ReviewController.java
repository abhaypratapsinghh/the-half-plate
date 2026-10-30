package com.thehalfplate.backend.controller;

import com.thehalfplate.backend.model.Review;
import com.thehalfplate.backend.service.AdminAuthService;
import com.thehalfplate.backend.service.ReviewService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@Tag(name = "Reviews", description = "Guest reviews and feedback")
public class ReviewController {

    private final ReviewService reviewService;
    private final AdminAuthService adminAuthService;

    public ReviewController(ReviewService reviewService, AdminAuthService adminAuthService) {
        this.reviewService = reviewService;
        this.adminAuthService = adminAuthService;
    }

    @GetMapping
    @Operation(summary = "Get reviews", description = "Returns all guest reviews, newest first.")
    public List<Review> getReviews() {
        return reviewService.getReviews();
    }

    @PostMapping
    @Operation(summary = "Submit a review", description = "Adds a new guest review/feedback entry.")
    public Review addReview(@RequestBody NewReviewRequest request) {
        int rating = request.rating() == null ? 0 : request.rating();
        return reviewService.addReview(request.author(), rating, request.text());
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a review", description = "Removes a review. Requires the X-Admin-Secret header.")
    public ResponseEntity<Void> deleteReview(
            @PathVariable String id,
            @RequestHeader(value = "X-Admin-Secret", required = false) String adminSecret
    ) {
        adminAuthService.requireAdmin(adminSecret);
        reviewService.deleteReview(id);
        return ResponseEntity.noContent().build();
    }

    public record NewReviewRequest(String author, Integer rating, String text) {
    }
}
