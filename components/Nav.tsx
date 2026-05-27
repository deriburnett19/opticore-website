'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/services', label: 'SERVICES' },
  { href: '/work/carhub-barbados', label: 'WORK' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-200 ${
          scrolled ? 'border-b border-black' : ''
        }`}
        aria-label="Primary navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-28 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="OptiCore Caribbean — home">
            <Image
              src="/opticore-icon.svg"
              alt="OptiCore Caribbean"
              width={320}
              height={80}
              className="h-14 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10 list-none" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-label hover:opacity-40 transition-opacity duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="block w-6 h-px bg-black transition-all" />
            <span className="block w-6 h-px bg-black transition-all" />
            <span className="block w-4 h-px bg-black transition-all" />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-black flex-shrink-0">
          <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Home">
            <Image
              src="/opticore-icon.svg"
              alt="OptiCore Caribbean"
              width={280}
              height={64}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-2xl leading-none"
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col justify-center flex-1 px-8 gap-10">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="font-display font-extrabold uppercase text-[clamp(2.5rem,12vw,4rem)] tracking-tightest leading-none hover:opacity-40 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Footer strip */}
        <div className="px-8 pb-10 flex-shrink-0">
          <p className="text-label opacity-40">© 2026 OptiCore Caribbean</p>
        </div>
      </div>
    </>
  )
}
