package com.thehalfplate.backend.controller;

import com.thehalfplate.backend.model.Moment;
import com.thehalfplate.backend.model.MomentPhoto;
import com.thehalfplate.backend.service.AdminAuthService;
import com.thehalfplate.backend.service.MomentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.CacheControl;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.time.Duration;
import java.util.List;

@RestController
@RequestMapping("/api/moments")
@Tag(name = "Moments", description = "Celebration photos shared by guests")
public class MomentController {

    private final MomentService momentService;
    private final AdminAuthService adminAuthService;

    public MomentController(MomentService momentService, AdminAuthService adminAuthService) {
        this.momentService = momentService;
        this.adminAuthService = adminAuthService;
    }

    @GetMapping
    @Operation(summary = "Get moments", description = "Returns celebration photos, newest first.")
    public List<Moment> getMoments() {
        return momentService.getMoments();
    }

    @PostMapping(consumes = "multipart/form-data")
    @Operation(summary = "Share a moment", description = "Uploads a new celebration photo.")
    public Moment addMoment(
            @RequestParam String caption,
            @RequestParam(required = false) String submittedBy,
            @RequestParam("photo") MultipartFile photo
    ) {
        return momentService.addMoment(caption, submittedBy, photo);
    }

    @GetMapping("/{id}/photo")
    @Operation(summary = "Get a moment's photo", description = "Returns the raw image bytes for a moment.")
    public ResponseEntity<byte[]> getPhoto(@PathVariable String id) {
        MomentPhoto photo = momentService.getPhoto(id);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(photo.contentType()))
                .cacheControl(CacheControl.maxAge(Duration.ofDays(30)).cachePublic())
                .body(photo.data());
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a moment", description = "Removes a moment and its photo. Requires the X-Admin-Secret header.")
    public ResponseEntity<Void> deleteMoment(
            @PathVariable String id,
            @RequestHeader(value = "X-Admin-Secret", required = false) String adminSecret
    ) {
        adminAuthService.requireAdmin(adminSecret);
        momentService.deleteMoment(id);
        return ResponseEntity.noContent().build();
    }
}
