import React from "react"
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erick van Reenen | UX/UI Designer",
  description:
    "UX/UI Designer crafting e-commerce, omnichannel experiences, and user-centered design. Based in Cape Town, South Africa.",
  generator: "v0.app",
  openGraph: {
    title: "Erick van Reenen | UX/UI Designer",
    description:
      "UX/UI Designer crafting e-commerce, omnichannel experiences, and user-centered design.",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erick van Reenen | UX/UI Designer",
    description:
      "UX/UI Designer crafting e-commerce, omnichannel experiences, and user-centered design.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}