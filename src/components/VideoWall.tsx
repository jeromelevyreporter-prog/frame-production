"use client";

import { useI18n } from "@/lib/i18n-context";
import Link from "next/link";
import { useState } from "react";

type Tile = {
  slug: string;
  title: string;
  year: string;
  videoSrc?: string;
  /** Static image; takes priority over videoSrc when present */
  imageSrc?: string;
  /** Combined classes for grid placement (mobile + desktop) */
  span: string;
  /** Fallback gradient so empty tiles aren't ugly */
  gradient: string;
};

// Asymmetric layout: 6-col × 7-row grid on desktop (42 cells), 2-col stacked on mobile
// Madagascar is featured as the HERO tile (4×3) due to strong audience reception
// Mobile (2-col) : Marseille pleine largeur, Madagascar héros pleine largeur,
// Bataille+Maxime côte à côte, Chambon+Surtourisme côte à côte
// Desktop (6-col) : layout asymétrique d'origine
const tiles: Tile[] = [
  {
    slug: "marseille-pagnol-netflix",
    title: "Marseille, de Pagnol à Netflix",
    year: "2026",
    videoSrc: "/videos/marseille-pagnol-netflix.mp4",
    span: "col-span-2 row-span-2 md:col-span-2 md:row-span-3",
    gradient: "linear-gradient(135deg, #1e2a4a 0%, #c8102e 100%)",
  },
  {
    slug: "madagascar-ia",
    title: "Madagascar : les petites mains de l'IA",
    year: "2024",
    videoSrc: "/videos/madagascar-ia.mp4",
    span: "col-span-2 row-span-3 md:col-span-4 md:row-span-3",
    gradient: "linear-gradient(120deg, #1e2a4a 0%, #6b7080 100%)",
  },
  {
    slug: "bataille-de-marseille",
    title: "La Bataille de Marseille",
    year: "2026",
    videoSrc: "/videos/bataille-de-marseille.mp4",
    span: "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
    gradient: "linear-gradient(200deg, #131c33 0%, #a8c0dc 100%)",
  },
  {
    slug: "maxime-frederic",
    title: "Maxime Frédéric : le chef du Cheval Blanc",
    year: "2025",
    videoSrc: "/videos/maxime-frederic.mp4",
    span: "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
    gradient: "linear-gradient(180deg, #a8c0dc 0%, #1e2a4a 100%)",
  },
  {
    slug: "chambon-sur-lignon",
    title: "Le Chambon-sur-Lignon, un legs pour l'Histoire",
    year: "2023",
    imageSrc: "/films/chambon-sur-lignon.jpg",
    span: "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
    gradient: "linear-gradient(220deg, #131c33 0%, #c8102e 100%)",
  },
  {
    slug: "surtourisme-provence",
    title: "Surtourisme : la Provence peut-elle accueillir toute la richesse du monde ?",
    year: "2025",
    videoSrc: "/videos/surtourisme-provence.mp4",
    span: "col-span-2 row-span-2 md:col-span-4 md:row-span-2",
    gradient: "linear-gradient(90deg, #1e2a4a 0%, #a8c0dc 50%, #c8102e 100%)",
  },
];

function VideoTile({ tile }: { tile: Tile }) {
  const [hovered, setHovered] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const showImage = tile.imageSrc && !imageFailed;
  const showVideo = !showImage && tile.videoSrc && !videoFailed;

  return (
    <Link
      href={`/films#${tile.slug}`}
      className={`relative block overflow-hidden rounded-lg bg-navy group ${tile.span}`}
      style={{ background: tile.gradient }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {showImage && (
        <img
          src={tile.imageSrc}
          alt={tile.title}
          onError={() => setImageFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {showVideo && (
        <video
          src={tile.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Empty-state label when no media yet */}
      {!showImage && !showVideo && (
        <div className="absolute inset-0 flex items-center justify-center text-paper/40 text-xs uppercase tracking-widest p-6 text-center">
          {tile.title}
        </div>
      )}

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-ink/60 flex flex-col justify-end p-5 md:p-6 transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-paper/70 text-xs uppercase tracking-widest mb-1">
          {tile.year}
        </p>
        <h3 className="text-paper font-display text-lg md:text-2xl leading-tight">
          {tile.title}
        </h3>
      </div>
    </Link>
  );
}

export function VideoWall() {
  const { t } = useI18n();

  return (
    <section
      id="films"
      className="pt-20 md:pt-24 pb-6 md:pb-3 bg-cream"
      aria-label={t.films.sectionTitle}
    >
      <div className="px-1 md:px-1.5">
        <div
          className="grid grid-cols-2 md:grid-cols-6 gap-1 md:gap-1.5"
          style={{
            gridAutoFlow: "dense",
            gridAutoRows: "minmax(120px, 1fr)",
          }}
        >
          {tiles.map((tile) => (
            <VideoTile key={tile.slug} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
