package com.thehalfplate.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.UUID;

/** The actual photo bytes for a {@link MomentEntity}, stored under the same id. */
@Entity
@Table(name = "moment_photos")
public class MomentPhotoEntity {

    @Id
    private UUID id;

    @Column(nullable = false, length = 100)
    private String contentType;

    // VARBINARY maps to Postgres bytea, not the oid large-object type that
    // plain @Lob defaults to on Postgres.
    @JdbcTypeCode(SqlTypes.VARBINARY)
    @Column(nullable = false)
    private byte[] data;

    protected MomentPhotoEntity() {
    }

    public MomentPhotoEntity(UUID id, String contentType, byte[] data) {
        this.id = id;
        this.contentType = contentType;
        this.data = data;
    }

    public UUID getId() {
        return id;
    }

    public String getContentType() {
        return contentType;
    }

    public byte[] getData() {
        return data;
    }
}
