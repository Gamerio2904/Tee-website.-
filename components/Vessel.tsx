import type { Scene } from "@/lib/content";

export function Vessel({ scene }: { scene: Scene }) {
  const amber = scene === "amber" || scene === "pour" || scene === "cup";
  const showPot = scene !== "pour" && scene !== "cup";
  const liquid = amber ? "#c4843a" : "rgba(243,239,230,0.16)";

  return (
    <svg className="vessel" viewBox="0 0 480 420" aria-hidden="true">
      <ellipse cx="390" cy="36" rx="120" ry="70" fill="rgba(215,161,90,0.16)" />
      <ellipse cx="240" cy="372" rx="150" ry="10" fill="rgba(0,0,0,0.35)" />
      <path d="M70 358h340" stroke="#3a2e24" strokeWidth="8" strokeLinecap="round" />
      {showPot ? <Pot scene={scene} liquid={liquid} /> : <Cup scene={scene} liquid={liquid} />}
    </svg>
  );
}

function Pot({ scene, liquid }: { scene: Scene; liquid: string }) {
  const herbsAbove = scene === "herbs";
  const herbsInside = scene === "sink" || scene === "stir" || scene === "amber";
  return (
    <g>
      {scene === "clear" ? (
        <g stroke="#d7a15a" fill="none" strokeWidth="1.6">
          <path d="M240 46v104" />
          <rect x="214" y="18" width="52" height="28" rx="2" />
        </g>
      ) : null}
      {herbsAbove ? <Leaves y={78} /> : null}
      <path
        d="M156 214c-40-8-70-34-84-62"
        fill="none"
        stroke="#f3efe6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M72 152c22 22 48 46 90 64"
        fill="none"
        stroke="#f3efe6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M318 206c46-4 62 28 48 62"
        fill="none"
        stroke="#f3efe6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M176 168h128c6 18 4 28-10 34H186c-14-6-16-16-10-34z"
        fill="rgba(243,239,230,0.04)"
        stroke="#f3efe6"
        strokeWidth="1.6"
      />
      <path d="M228 150h24l-4 18h-16z" fill="none" stroke="#f3efe6" strokeWidth="1.6" />
      <path
        d="M150 196c-8 18-18 78-4 132 16 52 52 70 94 70s78-18 94-70c14-54 4-114-4-132-10-16-28-22-90-22s-80 6-90 22z"
        fill="rgba(243,239,230,0.05)"
        stroke="#f3efe6"
        strokeWidth="1.8"
      />
      <path d="M168 250c18 36 36 78 72 78s54-42 72-78c-20 16-40 22-72 22s-52-6-72-22z" fill={liquid} />
      {herbsInside ? <Leaves y={scene === "sink" ? 236 : 268} /> : null}
    </g>
  );
}

function Cup({ scene, liquid }: { scene: Scene; liquid: string }) {
  return (
    <g>
      {scene === "pour" ? (
        <path d="M214 28c18 46 22 92 16 150" fill="none" stroke="#d7a15a" strokeWidth="5" strokeLinecap="round" />
      ) : null}
      <g className="steam" fill="none" stroke="#f3efe6" strokeOpacity="0.5" strokeWidth="1.4">
        <path d="M200 150c8-14 6-18-2-30" />
        <path d="M230 142c10-16 6-20-2-34" />
      </g>
      <path
        d="M132 196h156c8 8 14 28 14 48 0 62-28 104-92 104s-92-42-92-104c0-20 6-40 14-48z"
        fill="rgba(243,239,230,0.05)"
        stroke="#f3efe6"
        strokeWidth="1.8"
      />
      <path
        d="M156 214h112c4 6 8 20 8 34 0 46-20 74-64 74s-64-28-64-74c0-14 4-28 8-34z"
        fill="none"
        stroke="#f3efe6"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      <path d="M156 230h112c2 40-16 78-56 78s-58-38-56-78z" fill={liquid} />
      <path
        d="M288 214c34 6 46 32 40 52s-32 26-46 14"
        fill="none"
        stroke="#f3efe6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M96 330c18-28 34-24 28 6-8 10-20 14-28 6 8-2 12-8 0-12z" fill="#7f9a78" />
    </g>
  );
}

function Leaves({ y }: { y: number }) {
  return (
    <g fill="#d7c4a2">
      <ellipse cx="210" cy={y} rx="18" ry="7" transform={`rotate(-20 210 ${y})`} />
      <ellipse cx="248" cy={y + 14} rx="14" ry="6" fill="#c4843a" transform={`rotate(16 248 ${y + 14})`} />
      <ellipse cx="278" cy={y - 6} rx="12" ry="5" fill="#7f9a78" transform={`rotate(-8 278 ${y - 6})`} />
      <ellipse cx="232" cy={y + 28} rx="10" ry="4" fill="#a85a52" />
    </g>
  );
}
