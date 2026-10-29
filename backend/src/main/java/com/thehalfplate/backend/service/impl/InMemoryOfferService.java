package com.thehalfplate.backend.service.impl;

import com.thehalfplate.backend.model.Offer;
import com.thehalfplate.backend.service.OfferService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Hardcoded offer data, ported from the original static site. Mirrors the
 * frontend's {@code src/data/offers.ts} content.
 */
@Service
public class InMemoryOfferService implements OfferService {

    private final List<Offer> offers = List.of(
            new Offer(
                    "weekly-discount",
                    "Enjoy",
                    "10%",
                    "Discount On Every Order",
                    "This Week!",
                    "Limited Time Offer"
            )
    );

    @Override
    public List<Offer> getActiveOffers() {
        return offers;
    }
}
