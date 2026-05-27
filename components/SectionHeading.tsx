interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  className?: string
  center?: boolean
}

export default function SectionHeading({
  eyebrow,
  heading,
  className = '',
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="text-label mb-5 opacity-50">{eyebrow}</p>
      )}
      <h2 className="font-display font-extrabold uppercase text-section tracking-tightest">
        {heading}
      </h2>
    </div>
  )
}
