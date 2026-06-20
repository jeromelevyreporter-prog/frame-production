"use client";

import { useI18n } from "@/lib/i18n-context";
import { FadeIn } from "@/components/FadeIn";

const partenaires = [
  { name: "CNC", full: "Centre National du Cinéma et de l'image animée" },
  { name: "Procirep", full: "Société des Producteurs de Cinéma et de Télévision" },
  { name: "Angoa", full: "Association de Gestion des droits des Œuvres Audiovisuelles" },
  { name: "Région Sud", full: "Provence-Alpes-Côte d'Azur" },
];

export function PartenairesSection() {
  const { locale } = useI18n();

  return (
    <section className="py-12 md:py-16 bg-cream border-t border-ink/10">
      <div className="container-frame">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            {locale === "fr" ? "Partenaires institutionnels" : "Institutional partners"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
            {locale === "fr"
              ? "Soutenus et financés par"
              : "Supported and funded by"}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partenaires.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08}>
              <div className="group flex flex-col items-center justify-center p-5 text-center h-full">
                <span className="font-display text-2xl md:text-3xl text-ink mb-2 group-hover:text-red transition-colors">
                  {p.name}
                </span>
                <span className="text-xs text-ink/40 leading-snug">{p.full}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
