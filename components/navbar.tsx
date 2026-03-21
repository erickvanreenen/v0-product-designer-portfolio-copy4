"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFAF5]/95 backdrop-blur-md border-b border-[#D4C9B0]/60">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link href="/" className="group flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/erick-logo.svg" width={18} height={18} alt="" className="opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
          <span className="text-sm font-semibold text-foreground/55 group-hover:text-foreground transition-colors duration-200 tracking-tight">
            Erick van Reenen
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors duration-200 relative pb-px",
                    pathname === item.href
                      ? "text-foreground font-semibold"
                      : "text-foreground/50 hover:text-foreground"
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute -bottom-[18px] left-0 right-0 h-px bg-[#F0531C]" />
                  )}
                  {/* Hover underline for non-active */}
                  {pathname !== item.href && (
                    <span className="absolute -bottom-[18px] left-0 right-0 h-px bg-foreground/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-[#F0531C] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 text-foreground/50 hover:text-foreground transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className={cn("block transition-all duration-200", mobileMenuOpen ? "rotate-90" : "rotate-0")}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-open md:hidden bg-[#FDFAF5] border-b border-[#D4C9B0]/60">
          <ul className="px-6 py-5 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between text-base py-2.5 transition-colors duration-200 group",
                    pathname === item.href
                      ? "text-foreground font-semibold"
                      : "text-foreground/55 hover:text-foreground"
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="w-1 h-1 rounded-full bg-[#F0531C]" />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base py-2.5 text-foreground/55 hover:text-[#F0531C] transition-colors duration-200"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
