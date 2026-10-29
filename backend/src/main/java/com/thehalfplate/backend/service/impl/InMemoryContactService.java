package com.thehalfplate.backend.service.impl;

import com.thehalfplate.backend.model.ContactInfo;
import com.thehalfplate.backend.model.SocialLink;
import com.thehalfplate.backend.service.ContactService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Hardcoded contact data, ported from the original static site. Mirrors the
 * frontend's {@code src/data/contact.ts} content so both halves agree while
 * the frontend still serves its own static copy.
 */
@Service
public class InMemoryContactService implements ContactService {

    private final ContactInfo contactInfo = new ContactInfo(
            List.of("Police Line Chauraha", "Barabanki, India"),
            "+91 735-547-9418",
            "info@thehalfplate.com",
            List.of(
                    new SocialLink("Instagram", "fa-instagram", "#"),
                    new SocialLink("Facebook", "fa-facebook-f", "#"),
                    new SocialLink("WhatsApp", "fa-whatsapp", "#"),
                    new SocialLink("Twitter", "fa-twitter", "#")
            ),
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.114507659189!2d81.18053998854565!3d26.93158411639355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999610028350e5b%3A0x795b96687e583b6c!2sThe%20Half%20Plate!5e0!3m2!1sen!2sin!4v1793308200941!5m2!1sen!2sin"
    );

    @Override
    public ContactInfo getContactInfo() {
        return contactInfo;
    }
}
