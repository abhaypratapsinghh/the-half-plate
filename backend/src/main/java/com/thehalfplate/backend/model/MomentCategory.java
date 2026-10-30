package com.thehalfplate.backend.model;

/**
 * Not exposed in the API; every moment is a celebration photo. Kept as a
 * one-value enum (rather than dropping the column) so the already-deployed
 * {@code moments.category} NOT NULL column doesn't need a migration.
 */
public enum MomentCategory {
    CELEBRATION
}
