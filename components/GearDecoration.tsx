// Server component — generates gear SVG path mathematically
function buildGearPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  teeth: number,
): string {
  const step = (2 * Math.PI) / teeth
  const d: string[] = []

  const pt = (r: number, a: number) =>
    `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`

  for (let i = 0; i < teeth; i++) {
    const base = i * step - Math.PI / 2

    // valley → rise → tooth top → fall → valley
    const v0 = base                      // valley leading edge
    const r0 = base + step * 0.2         // start of rise (inner→outer)
    const t0 = base + step * 0.3         // tooth top start
    const t1 = base + step * 0.5         // tooth top end
    const f1 = base + step * 0.6         // end of fall (outer→inner)
    const v1 = base + step * 0.8         // valley trailing edge

    if (i === 0) {
      d.push(`M ${pt(innerR, v0)}`)
    } else {
      d.push(`L ${pt(innerR, v0)}`)
    }

    d.push(`L ${pt(innerR, r0)}`)
    d.push(`L ${pt(outerR, t0)}`)
    d.push(`L ${pt(outerR, t1)}`)
    d.push(`L ${pt(innerR, f1)}`)
    d.push(`L ${pt(innerR, v1)}`)
  }

  d.push('Z')
  return d.join(' ')
}

export default function GearDecoration() {
  const cx = 200
  const cy = 200
  const outerR = 178
  const innerR = 138
  const hubR = 52
  const spokeR = 105
  const teeth = 14

  const gearPath = buildGearPath(cx, cy, outerR, innerR, teeth)

  // Generate spoke endpoints
  const spokes = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * 2 * Math.PI - Math.PI / 2
    return {
      x1: (cx + 22 * Math.cos(angle)).toFixed(2),
      y1: (cy + 22 * Math.sin(angle)).toFixed(2),
      x2: (cx + spokeR * Math.cos(angle)).toFixed(2),
      y2: (cy + spokeR * Math.sin(angle)).toFixed(2),
    }
  })

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      {/* Outer gear body */}
      <path d={gearPath} stroke="#AAAAAA" strokeWidth="1.5" fill="none" />
      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={innerR} stroke="#AAAAAA" strokeWidth="1" fill="none" />
      {/* Mid ring */}
      <circle cx={cx} cy={cy} r={hubR + 18} stroke="#AAAAAA" strokeWidth="1" fill="none" />
      {/* Hub */}
      <circle cx={cx} cy={cy} r={hubR} stroke="#AAAAAA" strokeWidth="1.5" fill="none" />
      {/* Center dot */}
      <circle cx={cx} cy={cy} r={8} stroke="#AAAAAA" strokeWidth="1.5" fill="none" />
      {/* Spokes */}
      {spokes.map((s, i) => (
        <line
          key={i}
          x1={s.x1}
          y1={s.y1}
          x2={s.x2}
          y2={s.y2}
          stroke="#AAAAAA"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}
