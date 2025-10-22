import React from "react";
export default function Logo({ className = "" }: { className?: string }) {
  const bulbs: Array<{ cx: number; cy: number }> = [];
  for (let y = 8; y <= 40; y += 8) {
    for (let x = 6; x <= 112; x += 10) {
      bulbs.push({ cx: x, cy: y });
    }
  }

  return (
    <svg
      className={className}
      viewBox="0 0 120 48"
      role="img"
      aria-label="MS Logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="ms-clip">
          <text
            x="0"
            y="38"
            fontFamily="Arial Black, Inter, system-ui, sans-serif"
            fontWeight="900"
            fontSize="42"
            letterSpacing="2"
          >
            MS
          </text>
        </clipPath>
      </defs>

      {/* Red letters */}
      <text
        x="0"
        y="38"
        fontFamily="Arial Black, Inter, system-ui, sans-serif"
        fontWeight="900"
        fontSize="42"
        letterSpacing="2"
        fill="#ef4444"
      >
        MS
      </text>

      {/* Marquee bulbs clipped to letter shapes */}
      <g clipPath="url(#ms-clip)">
        {bulbs.map((b, i) => (
          <circle key={i} cx={b.cx} cy={b.cy} r={2.1} fill="#ffffff" stroke="#ef4444" strokeWidth={2.2} />
        ))}
      </g>
    </svg>
  );
}
