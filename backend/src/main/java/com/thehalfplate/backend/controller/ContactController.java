package com.thehalfplate.backend.controller;

import com.thehalfplate.backend.model.ContactInfo;
import com.thehalfplate.backend.service.ContactService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
@Tag(name = "Contact", description = "Restaurant contact details and map location")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    @Operation(summary = "Get contact details", description = "Returns the restaurant's address, phone, email, social links, and map embed URL.")
    public ContactInfo getContactInfo() {
        return contactService.getContactInfo();
    }
}
