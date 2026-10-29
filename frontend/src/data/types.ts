export interface MenuItem {
  id: string;
  name: string;
  description: string;
  /** Price in whole rupees. */
  price: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  /** Font Awesome icon class, e.g. "fa-leaf". */
  icon: string;
  items: MenuItem[];
}

export interface Offer {
  id: string;
  /** Side text shown before the badge, e.g. "Enjoy". */
  leadIn: string;
  /** Large standalone figure inside the badge, e.g. "10%". */
  percentage: string;
  /** Rest of the badge copy, e.g. "Discount On Every Order". */
  badgeDetail: string;
  /** Side text shown after the badge, e.g. "This Week!". */
  leadOut: string;
  /** Small print, e.g. "Limited Time Offer". */
  validity: string;
}

export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

export interface ContactInfo {
  addressLines: string[];
  phone: string;
  email: string;
  openingHours: string;
  socialLinks: SocialLink[];
  /** Google Maps embed URL for the restaurant's location. */
  mapEmbedUrl: string;
}

export interface Review {
  author: string;
  text: string;
}

export interface ReviewSummary {
  rating: number;
  reviewCount: number;
  /** Verbatim 5-star Google reviews. */
  reviews: Review[];
}

export interface PhotoCredit {
  author: string;
  license: string;
  licenseUrl: string;
  /** Wikimedia Commons file page. */
  source: string;
}
