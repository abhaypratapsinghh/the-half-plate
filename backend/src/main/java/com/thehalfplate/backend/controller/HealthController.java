package com.thehalfplate.backend.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Minimal hand-rolled health check, kept under the same /api prefix the
 * frontend already expects. Actuator can replace this later if real
 * operational needs arise.
 */
@RestController
@Tag(name = "Health", description = "Service health check")
public class HealthController {

    @GetMapping("/api/health")
    @Operation(summary = "Health check", description = "Returns UP if the service is running.")
    public Map<String, String> health() {
        return Map.of("status", "UP");
    }
}
