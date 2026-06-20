"use client";

import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { FadeIn } from "@/components/FadeIn";
import { WorldMap } from "@/components/WorldMap";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function AboutPage() {
  const { t, locale } = useI18n();
  const [photoFailed, setPhotoFailed] = useState(false);
  const photoSrc = "/team/jerome-levy.jpg";

  return (
    <article className="pt-32 md:pt-40 pb-16 bg-cream">
      <div className="container-frame">
        {/* Lead */}
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            {t.about.title}
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ink mb-6 max-w-3xl leading-none">
            {t.about.lead}
          </h1>
        </FadeIn>

        {/* Body — history & spirit */}
        <FadeIn delay={0.1}>
          <div className="prose-frame space-y-6 text-base md:text-lg leading-relaxed text-ink/80 text-justify">
            {t.about.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        {/* Chiffres clés */}
        <section className="mt-12 md:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {[
              { target: 8,  suffix: "",  label: t.stats.years },
              { target: 20, suffix: "+", label: t.stats.films },
              { target: 6,  suffix: "",  label: t.stats.broadcasters },
              { target: 5,  suffix: "+", label: t.stats.countries },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <span className="font-display text-6xl md:text-8xl text-ink leading-none mb-3">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs uppercase tracking-widest text-ink/50 leading-snug max-w-[120px]">
                    {stat.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Carte des tournages */}
        <section className="mt-12 md:mt-16 border-t border-ink/10 pt-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
              {locale === "fr" ? "Géographie" : "Geography"}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
              {locale === "fr" ? "Où nous filmons" : "Where we film"}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <WorldMap />
          </FadeIn>
        </section>

        {/* Founder section */}
        <section className="mt-12 md:mt-16 border-t border-ink/10 pt-8 md:pt-12">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
              {t.about.founder.sectionLabel}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start">
            {/* Portrait */}
            <FadeIn direction="left">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-navy">
              {!photoFailed ? (
                <Image
                  src={photoSrc}
                  alt={t.about.founder.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center text-paper/20 font-display text-8xl md:text-9xl"
                  style={{
                    background:
                      "linear-gradient(160deg, var(--navy-deep) 0%, var(--navy) 50%, rgba(168,192,220,0.3) 100%)",
                  }}
                >
                  JL
                </div>
              )}
            </div>
            </FadeIn>

            {/* Bio */}
            <FadeIn delay={0.15}>
            <div>
              <h2 className="font-display text-4xl md:text-6xl text-ink leading-none mb-3">
                {t.about.founder.title}
              </h2>
              <p className="text-muted text-sm uppercase tracking-widest mb-5">
                {t.about.founder.role}
              </p>
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-ink/80 text-justify">
                {t.about.founder.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              {t.about.founder.placeholderNote && (
                <p className="mt-8 text-xs italic text-ink/40 border-l-2 border-red/40 pl-4">
                  {t.about.founder.placeholderNote}
                </p>
              )}
            </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </article>
  );
}
