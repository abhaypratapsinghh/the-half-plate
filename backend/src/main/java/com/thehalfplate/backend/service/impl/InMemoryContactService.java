package com.thehalfplate.backend.service.impl;

import com.thehalfplate.backend.model.ContactInfo;
import com.thehalfplate.backend.model.SocialLink;
import com.thehalfplate.backend.service.ContactService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Hardcoded contact data, served at {@code /api/contact}. The frontend has no
 * static copy; it reads this endpoint through ContactContext.
 */
@Service
public class InMemoryContactService implements ContactService {

    private final ContactInfo contactInfo = new ContactInfo(
            List.of(
                    "Mahila Police Thana, Preet Vihar Colony",
                    "Civil Lines, Dewa Road / Police Line Chauraha",
                    "Barabanki, Uttar Pradesh 225001, India"
            ),
            "+91 735-547-9418",
            "info@thehalfplate.com",
            "11:00 AM – 11:00 PM",
            List.of(
                    new SocialLink("Instagram", "fa-instagram", "https://www.instagram.com/the_half_plate_restaurant_bbk/")
            ),
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.114507659189!2d81.18053998854565!3d26.93158411639355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999610028350e5b%3A0x795b96687e583b6c!2sThe%20Half%20Plate!5e0!3m2!1sen!2sin!4v1793308200941!5m2!1sen!2sin"
    );

    @Override
    public ContactInfo getContactInfo() {
        return contactInfo;
    }
}
