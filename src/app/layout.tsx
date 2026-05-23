import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const siteUrl = "https://isadorasasse.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Isadora Sasse | Psicóloga Clínica em Canoas, RS",
    template: "%s | Isadora Sasse Psicóloga",
  },
  description:
    "Psicóloga clínica em Canoas/RS especializada em TCC. Atendimento presencial e online para ansiedade, relacionamentos e autoconhecimento. Agende uma conversa gratuita.",
  keywords: [
    "psicóloga Canoas",
    "psicóloga RS",
    "psicóloga online",
    "terapia cognitivo comportamental",
    "TCC",
    "ansiedade",
    "terapia online Brasil",
    "Isadora Sasse",
    "psicóloga clínica",
  ],
  authors: [{ name: "Isadora Sasse", url: siteUrl }],
  creator: "Isadora Sasse",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Isadora Sasse Psicóloga",
    title: "Isadora Sasse | Psicóloga Clínica em Canoas, RS",
    description:
      "Psicóloga clínica em Canoas/RS especializada em TCC. Atendimento presencial e online. Agende uma conversa gratuita de 20 minutos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isadora Sasse — Psicóloga Clínica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isadora Sasse | Psicóloga Clínica em Canoas, RS",
    description:
      "Psicóloga clínica em Canoas/RS especializada em TCC. Atendimento presencial e online.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Isadora Sasse — Psicóloga Clínica",
  description:
    "Psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC). Atendimento presencial em Canoas/RS e online para todo o Brasil.",
  url: siteUrl,
  telephone: "+55-11-99999-9999",
  email: "contato@isadorasasse.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canoas",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -29.9189,
    longitude: -51.1834,
  },
  sameAs: [
    "https://www.instagram.com/isasasse.psi/",
    "https://www.linkedin.com/in/isadorasasse",
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  medicalSpecialty: "Psychiatry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
