"use client";

import { useI18n } from "@/lib/i18n-context";
import Link from "next/link";

export function ShowreelSection() {
  const { locale } = useI18n();

  return (
    <section className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(168,192,220,0.3) 60px, rgba(168,192,220,0.3) 61px)",
        }}
      />
      <div className="container-frame py-14 md:py-20 relative z-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-sky/70 mb-6">
          {locale === "fr" ? "Showreel" : "Showreel"}
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-paper leading-none mb-6">
          {locale === "fr" ? "Notre bande-démo" : "Our showreel"}
        </h2>
        <p className="text-sky/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          {locale === "fr"
            ? "Une sélection de nos meilleures images — enquêtes, portraits, récits de territoire."
            : "A selection of our finest images — investigations, portraits, stories of place."}
        </p>
        <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block border border-sky/30 text-paper px-8 py-3 rounded-full text-sm font-semibold hover:bg-sky/10 transition-colors"
          >
            {locale === "fr" ? "Demander le showreel" : "Request showreel"}
          </Link>
          <Link
            href="/films"
            className="inline-block bg-paper text-navy px-8 py-3 rounded-full text-sm font-semibold hover:bg-sky transition-colors"
          >
            {locale === "fr" ? "Voir nos documentaires" : "Browse our films"}
          </Link>
        </div>
        <p className="mt-5 text-xs text-sky/30 italic">
          {locale === "fr"
            ? "Bande-démo complète disponible sur demande professionnelle."
            : "Full showreel available upon professional request."}
        </p>
      </div>
    </section>
  );
}
