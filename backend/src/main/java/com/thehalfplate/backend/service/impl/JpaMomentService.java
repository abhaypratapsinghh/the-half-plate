package com.thehalfplate.backend.service.impl;

import com.thehalfplate.backend.entity.MomentEntity;
import com.thehalfplate.backend.entity.MomentPhotoEntity;
import com.thehalfplate.backend.model.Moment;
import com.thehalfplate.backend.model.MomentPhoto;
import com.thehalfplate.backend.repository.MomentPhotoRepository;
import com.thehalfplate.backend.repository.MomentRepository;
import com.thehalfplate.backend.service.MomentService;
import org.springframework.data.domain.PageRequest;
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
 * Persists celebration photos in Postgres. Metadata lives in {@code moments};
 * the image bytes live in a separate {@code moment_photos} table (see
 * {@link MomentEntity}) so listing a gallery never has to pull photo blobs
 * off disk — only the dedicated photo endpoint does. Capped at
 * {@link #MAX_MOMENTS}: the oldest moments are deleted as new ones come in,
 * so the celebrations page always shows a small, current set.
 */
@Service
public class JpaMomentService implements MomentService {

    private static final Set<String> ALLOWED_CONTENT_TYPES = Set.of("image/jpeg", "image/png", "image/webp");
    private static final long MAX_FILE_SIZE_BYTES = 5L * 1024 * 1024;
    private static final int MAX_MOMENTS = 12;

    private final MomentRepository momentRepository;
    private final MomentPhotoRepository momentPhotoRepository;

    public JpaMomentService(MomentRepository momentRepository, MomentPhotoRepository momentPhotoRepository) {
        this.momentRepository = momentRepository;
        this.momentPhotoRepository = momentPhotoRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Moment> getMoments() {
        return momentRepository.findAllByOrderByCreatedAtDesc().stream().map(this::toModel).toList();
    }

    @Override
    @Transactional
    public Moment addMoment(String caption, String submittedBy, MultipartFile photo) {
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
                trimmedCaption,
                trimmedSubmittedBy.isEmpty() ? null : trimmedSubmittedBy,
                Instant.now()
        ));
        momentPhotoRepository.save(new MomentPhotoEntity(moment.getId(), contentType, data));
        evictOldestBeyondLimit();

        return toModel(moment);
    }

    private void evictOldestBeyondLimit() {
        long overflow = momentRepository.count() - MAX_MOMENTS;
        if (overflow <= 0) return;

        List<MomentEntity> oldest = momentRepository.findAllByOrderByCreatedAtAsc(PageRequest.of(0, (int) overflow));
        for (MomentEntity entity : oldest) {
            momentPhotoRepository.deleteById(entity.getId());
            momentRepository.deleteById(entity.getId());
        }
    }

    @Override
    @Transactional(readOnly = true)
    public MomentPhoto getPhoto(String id) {
        MomentPhotoEntity photo = momentPhotoRepository.findById(parseId(id))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Photo not found."));
        return new MomentPhoto(photo.getContentType(), photo.getData());
    }

    @Override
    @Transactional
    public void deleteMoment(String id) {
        UUID uuid = parseId(id);
        if (!momentRepository.existsById(uuid)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Moment not found.");
        }
        momentPhotoRepository.deleteById(uuid);
        momentRepository.deleteById(uuid);
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
        return new Moment(id, entity.getCaption(), entity.getSubmittedBy(), "/api/moments/" + id + "/photo", entity.getCreatedAt());
    }
}
