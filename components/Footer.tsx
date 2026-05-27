import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" aria-label="OptiCore Caribbean — home">
          <Image
            src="/opticore-logo.png"
            alt="OptiCore Caribbean"
            width={160}
            height={44}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Center */}
        <p className="text-label opacity-50 text-center order-last md:order-none">
          © 2026 OptiCore Caribbean · Bridgetown, Barbados
        </p>

        {/* Right links */}
        <ul className="flex items-center gap-8 list-none" role="list">
          {[
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
            { href: '#', label: 'LinkedIn' },
          ].map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-label hover:opacity-40 transition-opacity"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
