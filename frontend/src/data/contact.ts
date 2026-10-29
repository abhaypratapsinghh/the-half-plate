import type { ContactInfo, SocialLink, Testimonial } from "./types";

export const CONTACT_INFO: ContactInfo = {
  addressLines: ["Police Line Chauraha", "Barabanki, India"],
  phone: "+91 735-547-9418",
  email: "info@thehalfplate.com",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Instagram", icon: "fa-instagram", url: "#" },
  { platform: "Facebook", icon: "fa-facebook-f", url: "#" },
  { platform: "WhatsApp", icon: "fa-whatsapp", url: "#" },
  { platform: "Twitter", icon: "fa-twitter", url: "#" },
];

export const TESTIMONIAL: Testimonial = {
  text:
    "The food was absolutely amazing and the service was impeccable. The ambiance perfectly complements the dining experience. We'll definitely be coming back!",
  author: "— Sarah Johnson, Guest",
};
