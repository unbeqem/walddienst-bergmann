"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import { navItems } from "@/content/site";
import { logoImage } from "@/content/images";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "sticky top-0 z-40 w-full transition-[background-color,box-shadow,padding] duration-300",
          scrolled
            ? "bg-linen-50/90 shadow-sm backdrop-blur-md py-2"
            : "bg-linen-50/40 backdrop-blur-sm py-4",
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logoImage}
              alt="Walddienst Bergmann"
              className="h-10 w-10 rounded-full object-cover"
              priority
            />
            <span className="font-display text-lg tracking-wide text-forest-800">
              Walddienst Bergmann
            </span>
          </Link>

          <nav className="hidden items-center gap-8 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium tracking-wide text-forest-800"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-forest-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center rounded-full p-2 text-forest-800 sm:hidden"
            aria-label="Menü öffnen"
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
