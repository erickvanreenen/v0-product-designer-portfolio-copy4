import type { Metadata } from "next";

/*
  The contact page is a client component, so it cannot export metadata
  itself. Without this it inherited the site-wide title and was the only
  page with no name of its own in search results or a browser tab.
*/
export const metadata: Metadata = {
  title: "Contact | Erick van Reenen",
  description:
    "Get in touch about full-time, contract or freelance design work. Cape Town and remote.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
