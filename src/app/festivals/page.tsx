"use client";

import { useI18n } from "@/lib/i18n-context";
import { festivalSelections } from "@/lib/data";

export default function FestivalsPage() {
  const { t, locale } = useI18n();

  return (
    <main className="pt-32 pb-16 px-6 md:px-12">
      <div style={{ maxWidth: "720px", margin: "0 auto 2rem" }}>
        <p className="text-sm uppercase tracking-widest text-red mb-4 font-medium">
          {t.nav.festivals}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-6">
          {t.festivals.title}
        </h1>
        <p className="text-lg text-ink/70 leading-relaxed">
          {t.festivals.lead}
        </p>
      </div>

      <div style={{ maxWidth: "720px", margin: "0 auto" }} className="space-y-0">
        {festivalSelections.map((item, i) => (
          <article
            key={i}
            className="border-t border-ink/10 pt-6 pb-4 animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-navy/10 text-navy uppercase tracking-wide">
                {item.year}
              </span>
              <span className="text-xs text-ink/40 uppercase tracking-wide">
                {item.city}, {item.country}
              </span>
            </div>

            <h2 className="font-display text-xl md:text-2xl text-ink mb-1">
              {item.festival}
            </h2>

            <p className="text-sm text-ink/50 mb-3">
              {locale === "fr" ? "Film" : "Film"} :{" "}
              <span className="text-ink/70 italic">{item.filmTitle}</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-red">
                <span className="w-1.5 h-1.5 rounded-full bg-red inline-block" />
                {item.selection[locale]}
              </span>
              {item.award && (
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                  {t.festivals.award} : {item.award[locale]}
                </span>
              )}
            </div>
          </article>
        ))}

        {festivalSelections.length === 0 && (
          <p className="text-ink/40 italic pt-8">
            {locale === "fr"
              ? "Les prochaines sélections seront annoncées ici."
              : "Upcoming selections will be announced here."}
          </p>
        )}
      </div>
    </main>
  );
}
