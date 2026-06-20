"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = [
  {
    name: "Marseille & Provence",
    country: "France",
    coordinates: [5.37, 43.3] as [number, number],
    films: ["De Pagnol à Netflix", "Surtourisme en Provence"],
  },
  {
    name: "Île-de-France",
    country: "France",
    coordinates: [2.35, 48.86] as [number, number],
    films: ["Maxime Frédéric", "La Bataille de Marseille"],
  },
  {
    name: "Chambon-sur-Lignon",
    country: "France",
    coordinates: [4.3, 45.05] as [number, number],
    films: ["Le Chambon-sur-Lignon, un legs pour l'Histoire"],
  },
  {
    name: "Antananarivo",
    country: "Madagascar",
    coordinates: [47.51, -18.91] as [number, number],
    films: ["Madagascar : les petites mains de l'IA"],
  },
  {
    name: "Los Angeles",
    country: "États-Unis",
    coordinates: [-118.24, 34.05] as [number, number],
    films: ["DOC LA 2026 · Sélection officielle"],
  },
];

export function WorldMap() {
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([15, 20]);
  const [tooltip, setTooltip] = useState<{
    name: string;
    country: string;
    films: string[];
    x: number;
    y: number;
  } | null>(null);

  const handleZoomIn = () => setZoom((z) => Math.min(z * 1.5, 8));
  const handleZoomOut = () => setZoom((z) => Math.max(z / 1.5, 1));
  const handleReset = () => { setZoom(1); setCenter([15, 20]); };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-ink/10 bg-navy">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 140, center: [15, 20] }}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup
          zoom={zoom}
          center={center}
          minZoom={1}
          maxZoom={8}
          onMoveEnd={({ zoom: z, coordinates }) => {
            setZoom(z);
            setCenter(coordinates);
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#243558"
                  stroke="#1e2a4a"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#2d4270", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {locations.map((loc) => (
            <Marker
              key={loc.name}
              coordinates={loc.coordinates}
              onMouseEnter={(e) => {
                const rect = (e.target as SVGElement)
                  .closest("svg")
                  ?.getBoundingClientRect();
                if (rect) {
                  setTooltip({
                    ...loc,
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }
              }}
              onMouseLeave={() => setTooltip(null)}
              style={{ cursor: "pointer" }}
            >
              <circle r={10 / zoom} fill="#c8102e" fillOpacity={0.18} />
              <circle
                r={4 / zoom}
                fill="#c8102e"
                stroke="#fafaf3"
                strokeWidth={1.5 / zoom}
                style={{ filter: "drop-shadow(0 0 3px rgba(200,16,46,0.5))" }}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute pointer-events-none z-10 bg-ink/95 text-cream rounded-xl px-4 py-3 text-xs shadow-xl max-w-[200px]"
          style={{
            left: Math.min(tooltip.x + 12, 999),
            top: Math.max(tooltip.y - 80, 8),
          }}
        >
          <p className="font-semibold text-sm mb-0.5">{tooltip.name}</p>
          <p className="text-cream/50 uppercase tracking-wide text-[10px] mb-2">
            {tooltip.country}
          </p>
          <ul className="space-y-0.5">
            {tooltip.films.map((f) => (
              <li key={f} className="text-cream/80 leading-snug">
                • {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Zoom controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-1.5">
        <button
          onClick={handleZoomIn}
          className="w-8 h-8 bg-navy-deep/80 hover:bg-navy-deep border border-sky/20 rounded-lg text-sky text-lg font-light leading-none flex items-center justify-center shadow-sm transition-colors"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="w-8 h-8 bg-navy-deep/80 hover:bg-navy-deep border border-sky/20 rounded-lg text-sky text-lg font-light leading-none flex items-center justify-center shadow-sm transition-colors"
          aria-label="Zoom out"
        >
          −
        </button>
        {zoom > 1 && (
          <button
            onClick={handleReset}
            className="w-8 h-8 bg-navy-deep/80 hover:bg-navy-deep border border-sky/20 rounded-lg text-sky text-[10px] font-medium flex items-center justify-center shadow-sm transition-colors uppercase tracking-wide"
            aria-label="Reset"
          >
            ↺
          </button>
        )}
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red inline-block" />
        <span className="text-[11px] text-sky/60 uppercase tracking-wide">
          Lieux de tournage
        </span>
      </div>
    </div>
  );
}
