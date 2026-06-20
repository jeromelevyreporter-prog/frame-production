"use client";

import { useI18n } from "@/lib/i18n-context";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden hero-gradient grain">
      <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28">
        <div className="container-frame">
          <p className="text-sky-soft/80 text-xs md:text-sm uppercase tracking-[0.3em] mb-6">
            {t.hero.tagline}
          </p>
          <h1 className="heading-xl text-paper text-5xl sm:text-6xl md:text-8xl lg:text-9xl whitespace-pre-line max-w-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-8 text-sky-soft/80 text-base md:text-lg max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          <a
            href="#films"
            className="inline-flex items-center gap-3 mt-10 text-paper border-b border-paper/40 pb-1 hover:border-paper transition-all group"
          >
            <span className="text-sm tracking-wide">{t.hero.cta}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M2 8h12M9 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-paper/50 text-xs uppercase tracking-widest">
        <span>scroll</span>
        <div className="w-px h-10 bg-paper/30" />
      </div>
    </section>
  );
}
