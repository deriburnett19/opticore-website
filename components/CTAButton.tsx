import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export default function CTAButton({
  href,
  children,
  className = '',
  external = false,
}: CTAButtonProps) {
  const base =
    'inline-block bg-black text-white border border-black px-8 py-4 text-label transition-colors duration-200 hover:bg-white hover:text-black cursor-pointer'

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  )
}
