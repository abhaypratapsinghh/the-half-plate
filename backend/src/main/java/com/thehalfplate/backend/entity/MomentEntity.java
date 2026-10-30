package com.thehalfplate.backend.entity;

import com.thehalfplate.backend.model.MomentCategory;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.Instant;
import java.util.UUID;

/**
 * Metadata for a celebration photo. The image bytes themselves live in
 * {@link MomentPhotoEntity} (a separate table, keyed by this id) so listing
 * moments never has to pull photo blobs off disk.
 */
@Entity
@Table(name = "moments")
public class MomentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private MomentCategory category = MomentCategory.CELEBRATION;

    @Column(nullable = false, length = 200)
    private String caption;

    @Column(length = 60)
    private String submittedBy;

    @Column(nullable = false)
    private Instant createdAt;

    protected MomentEntity() {
    }

    public MomentEntity(String caption, String submittedBy, Instant createdAt) {
        this.caption = caption;
        this.submittedBy = submittedBy;
        this.createdAt = createdAt;
    }

    public UUID getId() {
        return id;
    }

    public String getCaption() {
        return caption;
    }

    public String getSubmittedBy() {
        return submittedBy;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }
}
