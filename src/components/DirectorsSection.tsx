"use client";

import { useI18n } from "@/lib/i18n-context";
import { directors } from "@/lib/data";

export function DirectorsSection() {
  const { t, locale } = useI18n();

  return (
    <section
      id="directors"
      className="py-24 md:py-32 bg-navy text-paper scroll-mt-20 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168, 192, 220, 0.4) 0%, transparent 60%)",
        }}
      />
      <div className="container-frame relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky mb-3">
              {t.directors.sectionTitle}
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-paper">
              {t.directors.sectionTitle}
            </h2>
          </div>
          <p className="text-sky-soft/70 max-w-md text-sm md:text-base leading-relaxed">
            {t.directors.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {directors.map((director, i) => (
            <div key={director.slug} className="group">
              <div
                className="relative aspect-[3/4] bg-navy-deep mb-4 rounded-lg overflow-hidden"
                style={{
                  background: `linear-gradient(${145 + i * 25}deg, var(--navy-deep) 0%, var(--navy) 50%, ${
                    i % 2 === 0 ? "rgba(168,192,220,0.3)" : "rgba(200,16,46,0.2)"
                  } 100%)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-paper/20 font-display text-7xl">
                  {director.name
                    .split(" ")
                    .map((s) => s[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              </div>
              <h3 className="font-display text-lg md:text-xl text-paper mb-2">
                {director.name}
              </h3>
              <p className="text-sky-soft/70 text-sm leading-relaxed">
                {director.bio[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
