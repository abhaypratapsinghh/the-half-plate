package com.thehalfplate.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Minimal hand-rolled health check, kept under the same /api prefix the
 * frontend already expects. Actuator can replace this later if real
 * operational needs arise.
 */
@RestController
public class HealthController {

    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Map.of("status", "UP");
    }
}
