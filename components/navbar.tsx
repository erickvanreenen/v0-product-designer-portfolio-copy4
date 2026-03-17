"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/60">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/erick-logo.svg" width={20} height={20} alt="" />
          <span className="text-sm font-bold tracking-tight text-[#09332C] group-hover:text-[#F0531C] transition-colors duration-200">
            Erick van Reenen
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm px-4 py-2 rounded-full transition-all duration-200",
                    pathname === item.href
                      ? "bg-[#09332C] text-[#F7EDDA]"
                      : "text-foreground/40 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 text-foreground/50 hover:text-[#F0531C] transition-colors duration-200"
            aria-label="Connect on LinkedIn"
          >
            <Linkedin size={16} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground/40 hover:text-foreground transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border/60">
          <ul className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block text-base py-3 px-4 rounded-lg transition-all duration-200",
                    pathname === item.href
                      ? "bg-[#09332C] text-[#F7EDDA] font-medium"
                      : "text-foreground/40"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base py-3 px-4 text-foreground/40 hover:text-[#F0531C]"
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
