package com.thehalfplate.backend.controller;

import com.thehalfplate.backend.model.Offer;
import com.thehalfplate.backend.service.OfferService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/offers")
@Tag(name = "Offers", description = "Promotional offers")
public class OfferController {

    private final OfferService offerService;

    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping
    @Operation(summary = "Get active offers", description = "Returns the currently active promotional offers.")
    public List<Offer> getOffers() {
        return offerService.getActiveOffers();
    }
}
