import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";
import { Instrument_Serif } from "next/font/google";

import "@/app/globals.css";

import DisableInspect from "@/app/components/DisableInspect";
import SmoothScroll from "@/app/components/SmoothScroll";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.leaselapradaapartments.com";

const COMPANY_NAME =
  process.env.NEXT_PUBLIC_COMPANY_NAME ?? "La Prada Place Apartment Homes";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "(214) 321-2237";

const PHONE_SCHEMA = process.env.NEXT_PUBLIC_PHONE_SCHEMA ?? "+12143212237";

const LEASING_EMAIL =
  process.env.NEXT_PUBLIC_EMAIL ?? "Lprmanager@livenjoymgt.com";

const PROPERTY_MANAGER_EMAIL =
  process.env.NEXT_PUBLIC_MANAGER_EMAIL ?? "Lprmanager@livenjoymgt.com";

const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS ?? "8383 La Prada Dr";

const CITY = process.env.NEXT_PUBLIC_CITY ?? "Dallas";

const STATE = process.env.NEXT_PUBLIC_STATE ?? "TX";

const ZIP = process.env.NEXT_PUBLIC_ZIP ?? "75228";

const FULL_ADDRESS = `${ADDRESS}, ${CITY}, ${STATE} ${ZIP}`;

const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

/* =========================================================
   DISPLAY FONT
========================================================= */

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E3872",
  colorScheme: "light",
};

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "La Prada Place Apartment Homes | Dallas, TX",
    template: "%s | La Prada Place Apartment Homes",
  },

  description:
    "Discover La Prada Place Apartment Homes in Dallas, Texas. Explore comfortable 1 and 2 bedroom apartments, spacious floor plans, community amenities, and convenient Dallas living.",

  keywords: [
    "La Prada Place Apartment Homes",
    "La Prada Place Apartments",
    "La Prada Apartments",
    "Dallas Apartments",
    "Apartments in Dallas TX",
    "Dallas Texas Apartments",
    "75228 Apartments",
    "1 Bedroom Apartments Dallas",
    "2 Bedroom Apartments Dallas",
    "1 Bedroom Apartments 75228",
    "2 Bedroom Apartments 75228",
    "Apartments near La Prada Drive",
    "Apartments near East Dallas",
    "Apartments near US 80",
    "Apartments near I-30",
    "Apartments near White Rock Lake",
    "East Dallas Apartments",
    "DFW Area Apartments",
  ],

  applicationName: COMPANY_NAME,

  authors: [
    {
      name: COMPANY_NAME,
      url: SITE_URL,
    },
  ],

  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,

  category: "Real Estate",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  manifest: "/site.webmanifest",

  /* =======================================================
     OPEN GRAPH
  ======================================================= */

  openGraph: {
    type: "website",
    locale: "en_US",

    url: SITE_URL,

    siteName: COMPANY_NAME,

    title: "La Prada Place Apartment Homes | Dallas, TX",

    description:
      "Explore comfortable 1 and 2 bedroom apartment homes, spacious floor plans, community amenities, and convenient living in Dallas, Texas.",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "La Prada Place Apartment Homes in Dallas, Texas",
      },
    ],
  },

  /* =======================================================
     TWITTER
  ======================================================= */

  twitter: {
    card: "summary_large_image",

    title: "La Prada Place Apartment Homes | Dallas, TX",

    description:
      "Explore 1 and 2 bedroom apartment homes, floor plans, amenities, and community living at La Prada Place in Dallas, Texas.",

    images: [OG_IMAGE],
  },

  /* =======================================================
     FAVICONS
  ======================================================= */

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  referrer: "origin-when-cross-origin",
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const apartmentSchema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",

  "@id": `${SITE_URL}/#apartment-complex`,

  name: COMPANY_NAME,

  alternateName: "La Prada Place Apartments",

  description:
    "La Prada Place Apartment Homes offers comfortable one and two bedroom apartment homes in Dallas, Texas.",

  url: SITE_URL,

  image: [OG_IMAGE],

  telephone: PHONE_SCHEMA,

  email: LEASING_EMAIL,

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS,
    addressLocality: CITY,
    addressRegion: STATE,
    postalCode: ZIP,
    addressCountry: "US",
  },

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE_SCHEMA,
      contactType: "leasing",
      email: LEASING_EMAIL,
      areaServed: "US",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: PHONE_SCHEMA,
      contactType: "customer service",
      email: PROPERTY_MANAGER_EMAIL,
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],

  numberOfBedrooms: ["1", "2"],

  petsAllowed: true,

  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Swimming Pools",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Fitness Center",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Resident Clubhouse",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Coffee Bar",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Business Center",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Bark Park",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Outdoor Kitchen",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Gated Community",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Package Lockers",
      value: true,
    },
  ],
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body className="min-h-screen font-sans antialiased">
        {/* =================================================
            GOOGLE TAG MANAGER
        ================================================= */}

        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_GTM_ID && (
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
          )}

        {/* =================================================
            STRUCTURED DATA
        ================================================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(apartmentSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* =================================================
            PRODUCTION PROTECTION
        ================================================= */}

        {process.env.NODE_ENV === "production" && <DisableInspect />}

        {/* =================================================
            SMOOTH SCROLL
        ================================================= */}

        <SmoothScroll />

        {/* =================================================
            APPLICATION
        ================================================= */}

        {children}

        {/* =================================================
            TOAST NOTIFICATIONS
        ================================================= */}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,

            style: {
              background: "#1E3872",
              color: "#ffffff",
              borderRadius: "12px",
              fontFamily: '"Plus Jakarta Sans Variable", sans-serif',
            },
          }}
        />
      </body>
    </html>
  );
}
