package com.thehalfplate.backend.service;

import com.thehalfplate.backend.model.Offer;

import java.util.List;

/** Supplies the restaurant's currently active promotional offers. */
public interface OfferService {

    List<Offer> getActiveOffers();
}
