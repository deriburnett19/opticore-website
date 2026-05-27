import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CarHub Barbados — Case Study',
  description:
    'Building Barbados\'s first comprehensive automotive platform — vehicle management, mechanic discovery, parts marketplace, and BTA inspection reminders in one system.',
  openGraph: {
    title: 'CarHub Barbados — OptiCore Caribbean',
    description: 'Building Barbados\'s first comprehensive automotive platform.',
  },
}

const FEATURES = [
  'Vehicle management — full ownership history, documents, service records',
  'Mechanic discovery — find certified mechanics by location, specialty, and rating',
  'Parts marketplace — buy, sell, and request hard-to-find parts',
  'Car listings — private and dealer listings with AI-assisted valuation',
  'BTA inspection reminders — automated notifications tied to vehicle records',
  'WhatsApp integration — enquiries, reminders, and status updates via WhatsApp',
]

const STACK = [
  'Next.js',
  'React Native',
  'PostgreSQL',
  'Supabase',
  'Cloudinary',
  'Stripe',
  'Algolia',
]

const STATS = [
  {
    value: '9',
    label: 'TABLE DATABASE',
    context: 'Architecture spanning vehicles, users, listings, mechanics, parts, transactions, inspections, documents, and media',
  },
  {
    value: '14',
    label: 'MONTH ROADMAP',
    context: 'Phased delivery across three major releases — MVP, marketplace, and full platform',
  },
  {
    value: '8',
    label: 'REVENUE STREAMS',
    context: 'Listing fees, subscription tiers, parts marketplace commission, featured placements, inspection services, and more',
  },
]

export default function CarhubCaseStudyPage() {
  return (
    <>
      {/* ─── EYEBROW + HERO ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 border-b border-black">
        <p className="text-label opacity-50 mb-6">CASE STUDY</p>
        <h1 className="font-display font-extrabold uppercase text-hero tracking-tightest leading-none mb-6">
          CARHUB BARBADOS
        </h1>
        <p className="font-display font-normal text-[clamp(1.125rem,2vw,1.5rem)] leading-relaxed max-w-2xl opacity-80">
          Building Barbados&apos;s first comprehensive automotive platform.
        </p>
      </section>

      {/* ─── HERO IMAGE ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-b border-black">
        <div
          className="w-full aspect-video bg-[#F0F0F0] border border-black flex items-center justify-center"
          role="img"
          aria-label="CarHub Barbados platform — hero screenshot"
        >
          <span className="text-label opacity-30">CARHUB BARBADOS — PLATFORM OVERVIEW</span>
        </div>
      </section>

      {/* ─── THE CHALLENGE ────────────────────────────────────────────── */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div className="md:pt-1">
            <h2 className="font-display font-extrabold uppercase text-[clamp(1.6rem,3vw,2.2rem)] tracking-tightest leading-none">
              THE CHALLENGE
            </h2>
          </div>
          <div>
            <p className="font-sans text-[1.0625rem] leading-relaxed mb-5">
              The Barbados automotive market was fragmented. Car buyers had no single reliable place to find verified listings. Car owners had no centralised record of their vehicle history, upcoming inspections, or service needs. Mechanics had no platform to be discovered or reviewed. Parts were traded on WhatsApp groups and Facebook Marketplace with no quality assurance and no payment infrastructure.
            </p>
            <p className="font-sans text-[1.0625rem] leading-relaxed">
              The opportunity was clear: one platform that connected every participant in the automotive ecosystem — buyers, sellers, mechanics, and parts suppliers — with the BTA inspection system as the compliance backbone and WhatsApp as the communication layer. No such platform existed anywhere in the Caribbean.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BUILT ────────────────────────────────────────────── */}
      <section className="border-b border-black bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div className="md:pt-1">
            <h2 className="font-display font-extrabold uppercase text-[clamp(1.6rem,3vw,2.2rem)] tracking-tightest leading-none">
              WHAT WE BUILT
            </h2>
          </div>
          <div>
            <p className="font-sans text-[1.0625rem] leading-relaxed mb-8">
              A unified automotive platform with a shared identity layer — every user, every vehicle, every mechanic, every listing connected through a single 9-table database architecture. Web-first with a React Native companion app for mobile workflows.
            </p>
            <ul className="space-y-4">
              {FEATURES.map((f) => (
                <li key={f} className="flex gap-4 font-sans text-[1.0625rem] leading-relaxed">
                  <span className="flex-shrink-0 mt-[0.55em] w-1 h-1 bg-black rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── THE STACK ────────────────────────────────────────────────── */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <h2 className="font-display font-extrabold uppercase text-[clamp(1.6rem,3vw,2.2rem)] tracking-tightest leading-none mb-12">
            THE STACK
          </h2>
          <div className="flex flex-wrap gap-x-0 gap-y-0 border border-black">
            {STACK.map((tech, i) => (
              <div
                key={tech}
                className={`px-8 py-5 font-display font-extrabold uppercase text-xl tracking-tightest border-black ${
                  i !== STACK.length - 1 ? 'border-r' : ''
                } border-b last:border-b-0 sm:border-b-0`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE RESULT ───────────────────────────────────────────────── */}
      <section className="border-b border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <h2 className="font-display font-extrabold uppercase text-[clamp(1.6rem,3vw,2.2rem)] tracking-tightest leading-none mb-16 text-white">
            THE RESULT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {STATS.map((stat) => (
              <div key={stat.label} className="py-10 md:py-0 md:px-10 first:pl-0 last:pr-0">
                <p className="font-display font-extrabold uppercase text-[clamp(3rem,6vw,5rem)] tracking-tightest leading-none mb-3 text-white">
                  {stat.value}
                </p>
                <p className="text-label text-white opacity-60 mb-3">{stat.label}</p>
                <p className="font-sans text-sm leading-relaxed text-white/70">
                  {stat.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MORE WORK ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <Link
          href="/"
          className="text-label border-b border-black pb-1 hover:opacity-40 transition-opacity"
        >
          ← BACK TO HOME
        </Link>
      </section>
    </>
  )
}
