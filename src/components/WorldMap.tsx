"use client";

import { useMemo, useState } from "react";
import { WORLD_DOTS } from "@/data/worldDots";
import { dhaka, mapNodes } from "@/data/content";

// Must match scripts/generate-world-dots.mjs
const W = 1000, H = 480, LON0 = -170, LON1 = 190, LAT0 = 84, LAT1 = -58;
const project = (lon: number, lat: number): [number, number] => [
  ((lon - LON0) / (LON1 - LON0)) * W,
  ((LAT0 - lat) / (LAT0 - LAT1)) * H,
];

/** Dotted world map with animated payment routes flowing toward Dhaka. */
export function WorldMap() {
  const [active, setActive] = useState<string | null>(null);
  const [dx, dy] = project(dhaka.lon, dhaka.lat);

  const routes = useMemo(
    () =>
      mapNodes.map((n, i) => {
        const [x, y] = project(n.lon, n.lat);
        const mx = (x + dx) / 2;
        const my = Math.min(y, dy) - 60 - Math.abs(x - dx) * 0.12; // arc height
        return { ...n, x, y, d: `M${x},${y} Q${mx},${my} ${dx},${dy}`, delay: i * 0.45 };
      }),
    [dx, dy],
  );

  return (
    <svg className="worldmap" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Global merchants connected to Bangladesh through Cloud 7">
      <g className="worldmap__dots">
        {WORLD_DOTS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={2.1} />
        ))}
      </g>

      {routes.map((r) => (
        <g key={r.name} className={`route ${active === r.name ? "is-active" : ""}`}>
          <path id={`route-${r.name}`} d={r.d} className="route__line" style={{ animationDelay: `${r.delay}s` }} />
          <circle r="3.4" className="route__packet" opacity="0">
            <set attributeName="opacity" to="1" begin={`${r.delay + 1.2}s`} fill="freeze" />
            <animateMotion dur="3.6s" begin={`${r.delay + 1.2}s`} repeatCount="indefinite" path={r.d} />
          </circle>
        </g>
      ))}

      {routes.map((r) => (
        <g
          key={r.name}
          className="node"
          transform={`translate(${r.x} ${r.y})`}
          onMouseEnter={() => setActive(r.name)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(r.name)}
          onBlur={() => setActive(null)}
          tabIndex={0}
        >
          <circle r="11" className="node__halo" />
          <circle r="4.5" className="node__core" />
          <g className="node__label" transform="translate(0 -18)">
            <rect x={-r.name.length * 3.6 - 8} y={-13} width={r.name.length * 7.2 + 16} height={22} rx={11} />
            <text textAnchor="middle" y={2}>{r.name}</text>
          </g>
        </g>
      ))}

      <g transform={`translate(${dx} ${dy})`} className="hub">
        <circle r="26" className="hub__pulse" />
        <circle r="26" className="hub__pulse hub__pulse--2" />
        <circle r="9" className="hub__core" />
        <g transform="translate(0 -26)">
          <rect x="-34" y="-14" width="68" height="24" rx="12" className="hub__tag" />
          <text textAnchor="middle" y="3">Dhaka</text>
        </g>
      </g>
    </svg>
  );
}
