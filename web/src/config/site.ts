const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maxitaxi-five.vercel.app";
export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const BUSINESS_EMAIL =
  process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "perthwheelchairtaxivan@gmail.com";

export const PHONE_NUMBER = "+61 493 252 766";
export const PHONE_RAW = "+61493252766";

export const CONFIG_FLAGS = {
  // Set to true once the owner confirms licensed taxi status and PTSS terminal registration with WA Department of Transport
  ptssSubsidyAccepted: false,
  // Set to true once the owner confirms formal NDIS provider registration / invoicing setup
  ndisBillingAccepted: false,
};

export const SITE_CONFIG = {
  name: "Perth Wheelchair Taxi Van",
  legalName: "Perth Wheelchair Taxi Van",
  shortName: "Perth Wheelchair Taxi",
  tagline: "Dedicated Wheelchair Accessible Maxi Taxis in Perth & Girrawheen",
  description:
    "Wheelchair accessible taxi vans and 10-seater maxi cabs in Perth, WA. Rear ramp or hydraulic lift, PTSS smartcard (formerly TUSS) & NDIS transport options. Available 24/7.",
  phone: "+61 493 252 766",
  phoneRaw: "+61493252766",
  phoneTel: "tel:+61493252766",
  whatsappNumber: "61493252766",
  whatsappDisplay: "+61 493 252 766",
  whatsappUrl: (message?: string) =>
    `https://wa.me/61493252766${message ? `?text=${encodeURIComponent(message)}` : ""}`,
  email: BUSINESS_EMAIL,
  siteUrl: SITE_URL,
  baseLocation: {
    suburb: "Girrawheen",
    state: "WA",
    postcode: "6064",
    country: "AU",
    countryName: "Australia",
    region: "Perth Metropolitan",
    latitude: -31.8417,
    longitude: 115.8361,
    radiusKm: 20,
  },
  capacity: {
    maxPassengers: 10,
    wheelchairOccupants: "1 to 2 depending on chair dimensions",
    rampType: "Rear foldout ramp or hydraulic lift with 4-point Q'Straint tie-downs [TODO: confirm exact model with owner]",
  },
  accreditations: {
    state: "Western Australia",
    regulator: "WA Department of Transport (DoT)",
    ptssAccepted: CONFIG_FLAGS.ptssSubsidyAccepted,
    ptssStatus: CONFIG_FLAGS.ptssSubsidyAccepted
      ? "Accepted"
      : "[TODO: owner to confirm licence/registration]",
    ndisStatus: CONFIG_FLAGS.ndisBillingAccepted
      ? "Accepted"
      : "[TODO: owner to confirm licence/registration]",
    ndisSelfManaged: CONFIG_FLAGS.ndisBillingAccepted,
    ndisPlanManaged: CONFIG_FLAGS.ndisBillingAccepted,
  },
  operatingHours: "24/7 (Mon-Sun 00:00 - 23:59)",
};
