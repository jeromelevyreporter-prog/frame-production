"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";

type Broadcaster = {
  name: string;
  logo: string;
  /** Optional CSS adjustments for visual balance */
  className?: string;
};

const broadcasters: Broadcaster[] = [
  { name: "ARTE", logo: "/logos/arte.webp", className: "max-h-12" },
  { name: "France TV", logo: "/logos/france-tv.webp", className: "max-h-10" },
  {
    name: "France 3 PACA",
    logo: "/logos/france-3-paca.png",
    className: "max-h-12",
  },
  { name: "M6", logo: "/logos/m6.png", className: "max-h-14" },
  {
    name: "Envoyé Spécial",
    logo: "/logos/envoye-special.jpg",
    className: "max-h-14 rounded-lg",
  },
  {
    name: "Public Sénat",
    logo: "/logos/public-senat.png",
    className: "max-h-12",
  },
];

export function BroadcastersSection() {
  const { locale } = useI18n();

  const heading =
    locale === "fr" ? "Diffuseurs & partenaires" : "Broadcasters & partners";
  const subtitle =
    locale === "fr"
      ? "Frame Production collabore avec les principales chaînes et émissions françaises."
      : "Frame Production works with leading French networks and shows.";

  return (
    <section
      id="broadcasters"
      className="py-12 md:py-16 bg-cream border-t border-ink/5"
    >
      <div className="container-frame">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
              {locale === "fr" ? "Diffuseurs" : "Broadcasters"}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              {heading}
            </h2>
          </div>
          <p className="text-ink/70 max-w-md text-sm md:text-base leading-relaxed text-justify">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {broadcasters.map((broadcaster) => (
            <div
              key={broadcaster.name}
              className="aspect-[3/2] flex items-center justify-center p-4 md:p-6"
              title={broadcaster.name}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={broadcaster.logo}
                  alt={broadcaster.name}
                  width={200}
                  height={100}
                  className={`object-contain w-auto h-auto max-w-full ${broadcaster.className ?? "max-h-12"}`}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
