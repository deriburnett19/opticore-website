import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '@/components/CTAButton'
import SectionHeading from '@/components/SectionHeading'
import ValueRow from '@/components/ValueRow'
import ServiceBlock from '@/components/ServiceBlock'
import ScrollGear from '@/components/ScrollGear'

export const metadata: Metadata = {
  title: 'OptiCore Caribbean — Business Efficiency Engineers',
  description:
    'We partner with Caribbean businesses to audit, design, and deploy AI systems that cut waste and unlock growth.',
  openGraph: {
    title: 'OptiCore Caribbean — Business Efficiency Engineers',
    description:
      'We partner with Caribbean businesses to audit, design, and deploy AI systems that cut waste and unlock growth.',
  },
}

const VALUE_ITEMS = [
  {
    header: 'FASTER',
    description:
      'Cut operational time by 40%+ through intelligent automation that handles the repetitive work your team is wasting hours on.',
  },
  {
    header: 'SMARTER',
    description:
      'Decisions powered by your own business data, not guesswork. Every system we build surfaces the insight that matters.',
  },
  {
    header: 'CARIBBEAN',
    description:
      "Built for our market, our scale, our reality. We don't adapt foreign playbooks — we build from the ground up for the region.",
  },
]

const SERVICES = [
  {
    title: 'PROCESS AUDIT',
    description:
      "We map every workflow from front-office to back-office, find the friction, and quantify the cost. Before a single line of code is written, you'll know exactly where your business is losing time and money.",
    imageLeft: true,
    altText: 'Process audit — workflow mapping session',
  },
  {
    title: 'SYSTEM DESIGN',
    description:
      'Custom AI architecture designed around how your business actually runs. Not off-the-shelf software. Not a chatbot bolted onto your website. A system purpose-built for your operations.',
    imageLeft: false,
    altText: 'System design — AI architecture blueprint',
  },
  {
    title: 'IMPLEMENTATION & RETAINER',
    description:
      'We build it, deploy it, train your team, and stay on to keep it improving. Most clients see measurable ROI within the first quarter. The system keeps getting smarter — so does your business.',
    imageLeft: true,
    altText: 'Implementation — live deployment and team training',
  },
]


export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        {/* Decorative gear — right side, large, purely visual */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] max-w-[700px] pointer-events-none select-none"
          aria-hidden="true"
        >
          <ScrollGear />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
          <div className="max-w-3xl">
            <img
              src="/opticore-logo.svg"
              alt="OptiCore Caribbean"
              className="h-64 md:h-80 w-auto mb-10"
            />
            <p className="text-sm md:text-base font-medium tracking-[0.15em] uppercase mb-7 opacity-50">BUSINESS EFFICIENCY ENGINEERS</p>

            <h1 className="font-display font-extrabold uppercase text-hero tracking-tightest mb-8">
              AI THAT RUNS YOUR BUSINESS BETTER.
            </h1>

            <p className="font-display font-normal text-[clamp(1.125rem,2vw,1.5rem)] leading-relaxed max-w-xl mb-12 opacity-80">
              We partner with Caribbean businesses to audit, design, and deploy AI systems
              that cut waste and unlock growth.
            </p>

            <CTAButton href="/contact">BOOK A PROCESS AUDIT</CTAButton>
          </div>
        </div>
      </section>

      {/* ─── THREE-COLUMN VALUE ROW ───────────────────────────────────── */}
      <ValueRow items={VALUE_ITEMS} />

      {/* ─── SERVICES OVERVIEW ───────────────────────────────────────── */}
      <section aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <SectionHeading eyebrow="WHAT WE DO" heading="OUR SERVICES" className="mb-0" />
        </div>
        <div className="border-t border-black">
          {SERVICES.map((svc) => (
            <ServiceBlock key={svc.title} {...svc} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <CTAButton href="/services">SEE FULL SERVICE DETAILS →</CTAButton>
        </div>
      </section>

      {/* ─── FEATURED WORK ───────────────────────────────────────────── */}
      <section className="border-t border-black" aria-labelledby="work-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <p className="text-label opacity-50 mb-6">RECENT WORK</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2
                id="work-heading"
                className="font-display font-extrabold uppercase text-section tracking-tightest leading-none"
              >
                CARHUB BARBADOS
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="font-sans text-[1.0625rem] leading-relaxed mb-8">
                Barbados's first comprehensive automotive platform — vehicle management,
                mechanic discovery, parts marketplace, and BTA inspection reminders in
                one unified system.
              </p>
              <Link
                href="/work/carhub-barbados"
                className="text-label border-b border-black pb-1 hover:opacity-40 transition-opacity"
              >
                VIEW CASE STUDY →
              </Link>
            </div>
          </div>

          {/* Case study preview card */}
          <div className="mt-16 aspect-[16/7] bg-[#F5F5F5] border border-black flex items-center justify-center">
            <span className="text-label opacity-30">CARHUB BARBADOS — PROJECT PREVIEW</span>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40" aria-label="Call to action">
        <h2 className="font-display font-extrabold uppercase text-hero tracking-tightest leading-[0.92] mb-12">
          READY TO RUN
          <br />
          LEANER? LET&apos;S TALK.
        </h2>
        <CTAButton href="/contact">BOOK A PROCESS AUDIT</CTAButton>
      </section>
    </>
  )
}
