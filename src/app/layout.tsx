import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins,  } from "next/font/google";
import "./globals.css";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Manden Digitals SARL",
    template: "%s | Manden Digitals SARL",
  },
  description: "Manden Didital SARL - Plateforme de digitalistion et pestation de service",
  applicationName: "Manden Digital SARL",
  keywords: [
    "digitalistion",
    "technology",
    "prestation",
    "service",
    "ai",
    "science des donnees",
    "Bamako",
    "Mali",
    "Prestation de service",
    "cyber securité"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ rel: "mask-icon", url: "/logo.png", color: "#D4AF37" }],
  },
  openGraph: {
    title: "Manden Digitals SARL",
    description: "Manden Didital SARL - Plateforme de digitalistion et pestation de service",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Sognini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manden Digitals SARL",
    description: "Manden Didital SARL - Plateforme de digitalistion et pestation de service",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
