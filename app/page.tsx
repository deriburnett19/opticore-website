import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import SectionHeading from '@/components/SectionHeading'
import ValueRow from '@/components/ValueRow'
import ServiceBlock from '@/components/ServiceBlock'
import ScrollGear from '@/components/ScrollGear'

export const metadata: Metadata = {
  title: 'OptiCore Caribbean — Business Efficiency Engineers',
  description:
    'We help Caribbean businesses cut waste and unlock growth with custom automation systems — built with human oversight and zero hype.',
  openGraph: {
    title: 'OptiCore Caribbean — Business Efficiency Engineers',
    description:
      'We help Caribbean businesses cut waste and unlock growth with custom automation systems — built with human oversight and zero hype.',
  },
}

const VALUE_ITEMS = [
  {
    header: 'FASTER',
    description:
      'Cut operational time by 40%+ by handing repetitive work to systems built to handle it — so your people do the work only people can do.',
  },
  {
    header: 'SHARPER',
    description:
      "Decisions driven by your own data, not guesswork and not a black box. You'll always understand why a system recommends what it does. The final call stays with you.",
  },
  {
    header: 'GROUNDED',
    description:
      "Built for the Caribbean market, our scale, our reality. And built with restraint: we deploy a new system only when it genuinely outperforms what you already have.",
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
      'Custom architecture designed around how your business actually runs. Not off-the-shelf software. Not a chatbot bolted onto your website. A system purpose-built for your operations, with human decision-makers kept firmly in the loop.',
    imageLeft: false,
    altText: 'System design — custom architecture blueprint',
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
              YOUR BUSINESS, RUNNING THE WAY IT SHOULD.
            </h1>

            <p className="font-display font-normal text-[clamp(1.125rem,2vw,1.5rem)] leading-relaxed max-w-xl mb-12 opacity-80">
              We partner with Caribbean businesses to find where time and money leak out — then build the systems that stop it. No hype. No buzzwords. Just measurable results, and the honesty to tell you when the smartest move is to leave things alone.
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

      {/* ─── CLOSING CTA ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40" aria-label="Call to action">
        <h2 className="font-display font-extrabold uppercase text-hero tracking-tightest leading-[0.92] mb-12">
          READY TO RUN LEANER —
          <br />
          WITHOUT THE GUESSWORK?
          <br />
          LET&apos;S TALK.
        </h2>
        <CTAButton href="/contact">BOOK A PROCESS AUDIT</CTAButton>
      </section>
    </>
  )
}
