'use client'

import { useEffect, useRef } from 'react'
import GearDecoration from './GearDecoration'

export default function ScrollGear() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (wrapperRef.current) {
        // 0.08 = gentle spin — one full rotation every ~4500px of scroll
        const deg = window.scrollY * 0.08
        wrapperRef.current.style.transform = `rotate(${deg}deg)`
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={wrapperRef} className="w-full h-full will-change-transform">
      <GearDecoration />
    </div>
  )
}
