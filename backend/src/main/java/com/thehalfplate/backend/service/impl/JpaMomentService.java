package com.thehalfplate.backend.service.impl;

import com.thehalfplate.backend.entity.MomentEntity;
import com.thehalfplate.backend.entity.MomentPhotoEntity;
import com.thehalfplate.backend.model.Moment;
import com.thehalfplate.backend.model.MomentCategory;
import com.thehalfplate.backend.model.MomentPhoto;
import com.thehalfplate.backend.repository.MomentPhotoRepository;
import com.thehalfplate.backend.repository.MomentRepository;
import com.thehalfplate.backend.service.MomentService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.time.Instant;
import java.util.List;
import java.util.Set;
import java.util.UUID;

/**
 * Persists celebration/happy-moment photos in Postgres. Metadata lives in
 * {@code moments}; the image bytes live in a separate {@code moment_photos}
 * table (see {@link MomentEntity}) so listing a gallery never has to pull
 * photo blobs off disk — only the dedicated photo endpoint does.
 */
@Service
public class JpaMomentService implements MomentService {

    private static final Set<String> ALLOWED_CONTENT_TYPES = Set.of("image/jpeg", "image/png", "image/webp");
    private static final long MAX_FILE_SIZE_BYTES = 5L * 1024 * 1024;

    private final MomentRepository momentRepository;
    private final MomentPhotoRepository momentPhotoRepository;

    public JpaMomentService(MomentRepository momentRepository, MomentPhotoRepository momentPhotoRepository) {
        this.momentRepository = momentRepository;
        this.momentPhotoRepository = momentPhotoRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Moment> getMoments(MomentCategory category) {
        List<MomentEntity> entities = category == null
                ? momentRepository.findAllByOrderByCreatedAtDesc()
                : momentRepository.findByCategoryOrderByCreatedAtDesc(category);
        return entities.stream().map(this::toModel).toList();
    }

    @Override
    @Transactional
    public Moment addMoment(MomentCategory category, String caption, String submittedBy, MultipartFile photo) {
        if (category == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Category is required.");
        }
        String trimmedCaption = caption == null ? "" : caption.trim();
        if (trimmedCaption.isEmpty() || trimmedCaption.length() > 200) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Caption must be between 1 and 200 characters.");
        }
        String trimmedSubmittedBy = submittedBy == null ? "" : submittedBy.trim();
        if (trimmedSubmittedBy.length() > 60) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Name must be 60 characters or fewer.");
        }
        if (photo == null || photo.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "A photo is required.");
        }
        if (photo.getSize() > MAX_FILE_SIZE_BYTES) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Photo must be 5MB or smaller.");
        }
        String contentType = photo.getContentType();
        if (contentType == null || !ALLOWED_CONTENT_TYPES.contains(contentType)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Photo must be a JPEG, PNG, or WebP image.");
        }

        byte[] data;
        try {
            data = photo.getBytes();
        } catch (IOException e) {
            throw new UncheckedIOException("Failed to read uploaded photo", e);
        }

        MomentEntity moment = momentRepository.save(new MomentEntity(
                category,
                trimmedCaption,
                trimmedSubmittedBy.isEmpty() ? null : trimmedSubmittedBy,
                Instant.now()
        ));
        momentPhotoRepository.save(new MomentPhotoEntity(moment.getId(), contentType, data));

        return toModel(moment);
    }

    @Override
    @Transactional(readOnly = true)
    public MomentPhoto getPhoto(String id) {
        MomentPhotoEntity photo = momentPhotoRepository.findById(parseId(id))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Photo not found."));
        return new MomentPhoto(photo.getContentType(), photo.getData());
    }

    private UUID parseId(String id) {
        try {
            return UUID.fromString(id);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid moment id.");
        }
    }

    private Moment toModel(MomentEntity entity) {
        String id = entity.getId().toString();
        return new Moment(id, entity.getCategory(), entity.getCaption(), entity.getSubmittedBy(), "/api/moments/" + id + "/photo", entity.getCreatedAt());
    }
}
