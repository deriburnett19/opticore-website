import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'About',
  description:
    'OptiCore Caribbean is building the Caribbean\'s operational infrastructure layer — starting with the businesses that power the region.',
  openGraph: {
    title: 'About — OptiCore Caribbean',
    description: "Building the Caribbean's efficiency layer.",
  },
}

const STORY_SECTIONS = [
  {
    heading: 'WHY WE EXIST',
    body: `Caribbean businesses are being left behind. Not because the technology isn't available — it is. Not because the problems aren't solvable — they are. But because every efficiency consultancy is built for London, New York, or Silicon Valley. Nobody is building for us.\n\nOptiCore exists to change that. We believe the Caribbean has some of the most complex, multi-constraint operational challenges in the world — small teams, limited infrastructure, import-heavy supply chains, tourism-driven demand volatility. That's not a weakness. That's a forcing function for creative, robust systems.`,
  },
  {
    heading: 'HOW WE WORK',
    body: `We don't sell software. We don't resell third-party tools. We don't send you a report and disappear.\n\nWe embed with your team. We learn how your business actually runs — not how you think it runs, and not how the org chart says it should. We design systems that work within your constraints, with your people, on your budget. And we stay until it works.`,
  },
  {
    heading: 'WHERE WE\'RE GOING',
    body: `The first chapter is individual businesses — making them faster, leaner, more data-driven. The second chapter is industry infrastructure: shared platforms, regional data pipelines, sector-wide standards.\n\nWe're building the foundation. Every engagement is a node in a larger network. In ten years, we want to look back at a Caribbean that runs on the systems we helped build.`,
  },
]

const TEAM = [
  {
    name: 'DERI BURNETT',
    role: 'Chief Executive Officer',
    bio: `Builder, systems thinker, and the person who refuses to accept "that's just how it works here" as an answer.`,
    initials: 'DB',
  },
  {
    name: 'CTO PARTNER',
    role: 'Chief Technology Officer',
    bio: 'Full-stack systems architect with a track record of shipping production automation systems at scale across regulated industries.',
    initials: 'CTO',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 border-b border-black">
        <p className="text-label opacity-50 mb-6">ABOUT</p>
        <h1 className="font-display font-extrabold uppercase text-hero tracking-tightest leading-none">
          WE&apos;RE BUILDING THE CARIBBEAN&apos;S EFFICIENCY LAYER.
        </h1>
      </section>

      {/* ─── STORY SECTIONS ───────────────────────────────────────────── */}
      <section aria-labelledby="story-heading">
        {STORY_SECTIONS.map((section, i) => (
          <div
            key={section.heading}
            className={`border-b border-black ${i % 2 === 1 ? 'bg-[#FAFAFA]' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
              {/* Heading left */}
              <div className="md:pt-1">
                <h2 className="font-display font-extrabold uppercase text-[clamp(1.5rem,3vw,2.2rem)] tracking-tightest leading-none">
                  {section.heading}
                </h2>
              </div>
              {/* Body right */}
              <div>
                {section.body.split('\n\n').map((para, j) => (
                  <p
                    key={j}
                    className={`font-sans text-[1.0625rem] leading-relaxed ${
                      j > 0 ? 'mt-5' : ''
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────────────── */}
      <section className="border-b border-black" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="text-label opacity-50 mb-5">WHO WE ARE</p>
          <h2
            id="team-heading"
            className="font-display font-extrabold uppercase text-section tracking-tightest mb-16"
          >
            THE PEOPLE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col">
                {/* Photo placeholder */}
                <div className="aspect-square bg-[#F0F0F0] border border-black flex items-center justify-center mb-6 max-w-[280px]">
                  <span className="font-display font-extrabold text-4xl tracking-tightest opacity-20">
                    {member.initials}
                  </span>
                </div>
                <p className="text-label mb-1">{member.name}</p>
                <p className="font-sans text-sm opacity-50 mb-3">{member.role}</p>
                <p className="font-sans text-[1.0625rem] leading-relaxed max-w-xs">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
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
