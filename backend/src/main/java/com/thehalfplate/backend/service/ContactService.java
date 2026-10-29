package com.thehalfplate.backend.service;

import com.thehalfplate.backend.model.ContactInfo;

/**
 * Supplies the restaurant's contact details and map location. The in-memory
 * implementation is the only one today; a persistence-backed implementation
 * can be added later without touching
 * {@link com.thehalfplate.backend.controller.ContactController}.
 */
public interface ContactService {

    ContactInfo getContactInfo();
}
