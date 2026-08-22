import React from "react"
import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Erick van Reenen | UX/UI Designer",
  description:
    "UX/UI Designer crafting e-commerce, omnichannel experiences, and user-centred design. Based in Cape Town, South Africa.",
  generator: "v0.app",
  openGraph: {
    title: "Erick van Reenen | UX/UI Designer",
    description:
      "UX/UI Designer crafting e-commerce, omnichannel experiences, and user-centred design.",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erick van Reenen | UX/UI Designer",
    description:
      "UX/UI Designer crafting e-commerce, omnichannel experiences, and user-centred design.",
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
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="pt-14 min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}