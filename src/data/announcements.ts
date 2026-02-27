// Announcement configuration
// To add a new announcement, update the fields below and set enabled to true.
// Users who dismiss it won't see it again until you change the id.

export interface Announcement {
  id: string; // Change this to force re-display after dismissal
  enabled: boolean;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "promo";
  ctaText?: string;
  ctaLink?: string;
}

export const announcement: Announcement = {
  id: "spring-2026-campaign",
  enabled: true,
  title: "🌱 Bahar Kampanyası Başladı!",
  message:
    "Tüm tohum ve gübre ürünlerinde özel indirimler sizi bekliyor. Stoklarla sınırlıdır, acele edin!",
  type: "promo",
  ctaText: "Ürünleri İncele",
  ctaLink: "/urunler",
};
