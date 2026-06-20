"use client";

import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { directors, type Director } from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";

function DirectorCard({ director, index }: { director: Director; index: number }) {
  const { locale } = useI18n();
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = director.photo && !photoFailed;

  return (
    <FadeIn delay={Math.min(index * 0.1, 0.3)}>
    <div className="group">
      <div
        className="relative aspect-[3/4] mb-3 rounded-lg overflow-hidden"
        style={
          showPhoto
            ? undefined
            : {
                background: `linear-gradient(${145 + index * 25}deg, var(--navy-deep) 0%, var(--navy) 50%, ${
                  index % 2 === 0 ? "rgba(168,192,220,0.3)" : "rgba(200,16,46,0.2)"
                } 100%)`,
              }
        }
      >
        {showPhoto ? (
          <Image
            src={director.photo!}
            alt={director.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-paper/20 font-display text-7xl md:text-8xl">
            {director.name
              .split(" ")
              .map((s) => s[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}
      </div>
      <h2 className="font-display text-xl md:text-2xl text-ink mb-2">
        {director.name}
      </h2>
      <p className="text-ink/70 text-sm md:text-base leading-relaxed text-justify">
        {director.bio[locale]}
      </p>
    </div>
    </FadeIn>
  );
}

export default function DirectorsPage() {
  const { t } = useI18n();

  return (
    <article className="pt-32 md:pt-40 pb-16 bg-cream">
      <div className="container-frame">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            {t.directors.sectionTitle}
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ink mb-6 leading-none">
            {t.directors.sectionTitle}
          </h1>
          <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-8 text-justify">
            {t.directors.sectionSubtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {directors.map((director, i) => (
            <DirectorCard key={director.slug} director={director} index={i} />
          ))}
        </div>
      </div>
    </article>
  );
}
