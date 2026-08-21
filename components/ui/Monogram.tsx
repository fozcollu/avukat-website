// Deterministic gradient variants so each person gets a distinct but
// cohesive look without any external image dependency (no network call,
// so it can never show up as a broken image).
const VARIANTS = [
  { from: "#1c1c1e", to: "#3a2f22" }, // charcoal -> warm brown
  { from: "#1c1c1e", to: "#2a2a2d" }, // charcoal -> slate
  { from: "#22201b", to: "#4b3a22" }, // ink -> bronze
];

function hashName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Monogram({
  name,
  className = "",
  rounded = "rounded-xl",
}: {
  name: string;
  className?: string;
  rounded?: string;
}) {
  const variant = VARIANTS[hashName(name) % VARIANTS.length];
  const gradientId = `mg-${hashName(name)}`;

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={name}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={variant.from} />
            <stop offset="100%" stopColor={variant.to} />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#${gradientId})`} />
        {/* Faint decorative scale-of-justice motif, off-center */}
        <g opacity="0.08" stroke="#ffffff" strokeWidth="3" fill="none">
          <line x1="200" y1="60" x2="200" y2="440" />
          <line x1="90" y1="120" x2="310" y2="120" />
          <circle cx="90" cy="170" r="45" />
          <circle cx="310" cy="170" r="45" />
        </g>
        <text
          x="200"
          y="270"
          textAnchor="middle"
          fontFamily="Georgia, 'Playfair Display', serif"
          fontSize="108"
          fill="#ffffff"
          fillOpacity="0.92"
        >
          {initials(name)}
        </text>
        <line
          x1="160"
          y1="305"
          x2="240"
          y2="305"
          stroke="#b08d57"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
