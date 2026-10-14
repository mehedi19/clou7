export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id="c7g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7DD3FC" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#c7g)" />
      <path
        d="M13.5 27a5 5 0 0 1-.7-9.95A7 7 0 0 1 26.4 15.6 4.7 4.7 0 0 1 26 27z"
        fill="#fff"
      />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "logo--light" : ""}`}>
      <LogoMark />
      <span className="logo__word">
        Cloud<span className="logo__seven">7</span>
      </span>
    </span>
  );
}
