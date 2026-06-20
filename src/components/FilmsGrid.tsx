"use client";

import { useI18n } from "@/lib/i18n-context";
import { films } from "@/lib/data";
import Link from "next/link";

export function FilmsGrid() {
  const { t, locale } = useI18n();

  return (
    <section id="films" className="py-24 md:py-32 bg-cream scroll-mt-20">
      <div className="container-frame">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
              {t.films.sectionTitle}
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-ink">
              {t.films.sectionTitle}
            </h2>
          </div>
          <p className="text-muted max-w-md text-sm md:text-base leading-relaxed">
            {t.films.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {films.map((film, i) => (
            <Link
              key={film.slug}
              href={`/films/${film.slug}`}
              className="group block card-hover"
            >
              <div className="relative aspect-[4/5] bg-navy/10 overflow-hidden rounded-lg mb-4">
                {film.videoSrc ? (
                  <video
                    src={film.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="cover-img absolute inset-0"
                    onError={(e) => {
                      // gracefully hide missing video
                      (e.currentTarget as HTMLVideoElement).style.display = "none";
                    }}
                  />
                ) : null}
                {/* Fallback placeholder gradient */}
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background: `linear-gradient(${135 + i * 30}deg, var(--navy) 0%, var(--sky) 100%)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 text-paper text-xs uppercase tracking-widest opacity-80">
                  {film.year}
                </div>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-ink leading-tight group-hover:text-red transition-colors">
                {film.title}
              </h3>
              <p className="text-muted text-sm mt-2 leading-relaxed line-clamp-2">
                {film.synopsis[locale]}
              </p>
              <div className="flex gap-4 mt-3 text-xs text-muted/70 uppercase tracking-wider">
                {film.duration && <span>{film.duration}</span>}
                {film.broadcaster && <span>· {film.broadcaster}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
