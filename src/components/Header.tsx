"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n-context";

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com/frame_production_france/", Icon: IconInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/profile.php?id=61579511858511", Icon: IconFacebook, label: "Facebook" },
  { href: "https://www.linkedin.com/company/frame-production/", Icon: IconLinkedIn, label: "LinkedIn" },
];

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLink = (href: string, extra = "") => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `text-xs uppercase tracking-widest transition-colors px-2.5 py-1.5 rounded-lg ${extra} ${
      isActive ? "bg-red text-cream" : "text-ink hover:bg-red hover:text-cream"
    }`;
  };

  const mobileLink = (href: string) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `block w-full text-left font-display text-3xl leading-none py-4 border-b border-ink/10 transition-colors ${
      isActive ? "text-red" : "text-ink"
    }`;
  };

  const socialBadge = "w-8 h-8 flex items-center justify-center rounded-full text-ink hover:bg-red hover:text-cream transition-colors";

  return (
    <>
      {/* Header principal */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-ink/5">
        <div className="px-4 md:px-6 py-3 md:py-5 flex items-center justify-between gap-4">

          {/* Burger — mobile uniquement */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] shrink-0"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <span className="block w-6 h-[1.5px] bg-ink" />
            <span className="block w-6 h-[1.5px] bg-ink" />
            <span className="block w-6 h-[1.5px] bg-ink" />
          </button>

          {/* Navigation gauche — desktop */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className={navLink("/")}>{t.nav.home}</Link>
            <Link href="/films" className={navLink("/films")}>{t.nav.films}</Link>
            <Link href="/about" className={navLink("/about")}>{t.nav.about}</Link>
            <Link href="/contact" className={navLink("/contact")}>{t.nav.contact}</Link>
          </nav>

          {/* Logo centré */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <Image src="/logo-frame.jpg" alt="Frame Production" width={44} height={44} className="rounded-full object-cover" priority />
            <span className="hidden md:inline font-sans font-bold text-2xl md:text-3xl tracking-tight text-ink leading-none uppercase">
              Frame Production
            </span>
          </Link>

          {/* Droite */}
          <div className="flex items-center gap-1">
            <Link href="/actualites" className={navLink("/actualites", "hidden md:inline-block")}>{t.nav.news}</Link>
            <div className="hidden lg:flex items-center gap-0.5">
              {socialLinks.map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={socialBadge} aria-label={label}>
                  <Icon className="w-[15px] h-[15px]" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-1 text-xs uppercase tracking-widest text-ink">
              <button onClick={() => setLocale("fr")} className={`px-1 transition-opacity ${locale === "fr" ? "opacity-100 font-semibold" : "opacity-50 hover:opacity-80"}`}>FR</button>
              <span className="opacity-30">/</span>
              <button onClick={() => setLocale("en")} className={`px-1 transition-opacity ${locale === "en" ? "opacity-100 font-semibold" : "opacity-50 hover:opacity-80"}`}>EN</button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile — z-[60] pour être au-dessus du header */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden bg-cream flex flex-col">
          {/* Barre du haut avec logo + fermeture */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-ink/5">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-frame.jpg" alt="Frame Production" width={36} height={36} className="rounded-full object-cover" />
              <span className="font-sans font-bold text-lg tracking-tight text-ink uppercase">Frame Production</span>
            </Link>
            <button
              className="w-10 h-10 flex items-center justify-center text-ink text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              ✕
            </button>
          </div>

          {/* Liens */}
          <div className="flex-1 overflow-y-auto px-6 pt-6 pb-10">
            <nav className="mb-8">
              <Link href="/" className={mobileLink("/")}>{t.nav.home}</Link>
              <Link href="/films" className={mobileLink("/films")}>{t.nav.films}</Link>
              <Link href="/about" className={mobileLink("/about")}>{t.nav.about}</Link>
              <Link href="/contact" className={mobileLink("/contact")}>{t.nav.contact}</Link>
            </nav>

            <nav className="mb-8">
              <p className="text-xs uppercase tracking-widest text-ink/40 mb-4">{locale === "fr" ? "Professionnels" : "Professionals"}</p>
              <Link href="/actualites" className={mobileLink("/actualites")}>{t.nav.news}</Link>
              <Link href="/festivals" className={mobileLink("/festivals")}>{t.nav.festivals}</Link>
              <Link href="/developpement" className={mobileLink("/developpement")}>{t.nav.development}</Link>
            </nav>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-ink/20 text-ink hover:border-red hover:text-red transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-ink ml-auto">
                <button onClick={() => setLocale("fr")} className={locale === "fr" ? "font-bold" : "text-ink/40"}>FR</button>
                <span className="text-ink/30">/</span>
                <button onClick={() => setLocale("en")} className={locale === "en" ? "font-bold" : "text-ink/40"}>EN</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
