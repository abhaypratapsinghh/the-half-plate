package com.thehalfplate.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

/**
 * Gatekeeper for destructive admin-only endpoints (deleting reviews/moments),
 * using a single shared secret set via the ADMIN_SECRET env var. There's no
 * broader auth system in this app, so this is deliberately minimal — enough
 * to stop anonymous internet traffic from deleting content, not a real
 * user/role system.
 */
@Service
public class AdminAuthService {

    private final String adminSecret;

    public AdminAuthService(@Value("${app.admin-secret:}") String adminSecret) {
        this.adminSecret = adminSecret;
    }

    public void requireAdmin(String providedSecret) {
        if (adminSecret == null || adminSecret.isBlank()) {
            throw new ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE, "Admin actions are not configured.");
        }
        if (providedSecret == null || !constantTimeEquals(adminSecret, providedSecret)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid admin secret.");
        }
    }

    private boolean constantTimeEquals(String expected, String actual) {
        return MessageDigest.isEqual(
                expected.getBytes(StandardCharsets.UTF_8),
                actual.getBytes(StandardCharsets.UTF_8)
        );
    }
}
