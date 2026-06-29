import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Three engagements. One outcome: a business that runs itself better. Process Audit, System Design, and Implementation & Retainer — automation and AI systems built for Caribbean businesses, with human oversight at every stage.',
  openGraph: {
    title: 'Services — OptiCore Caribbean',
    description:
      'Three engagements. One outcome: a business that runs itself better. Custom automation and AI systems built for Caribbean businesses — no hype, just results.',
  },
}

const SERVICES = [
  {
    id: 'process-audit',
    name: 'PROCESS AUDIT',
    tagline: 'Find the friction. Quantify the cost.',
    what: `We spend time with your team — observing, interviewing, and mapping every workflow from front-office operations to back-office processes. We identify every friction point, every manual bottleneck, and every hour lost to work that a well-designed system could handle. You receive a precise cost-of-inefficiency report, a prioritised opportunity matrix, and — where the honest answer is to leave things alone — we'll say that too.`,
    whoFor: [
      'Growing businesses spending money on manual, repetitive tasks',
      'Companies preparing for a fundraise or acquisition that need clean operations',
      "Businesses who know something is wrong but can't pinpoint what",
      "Teams that have tried software solutions before and found them didn't fit",
    ],
    whatYouGet: [
      'Full workflow map (visual + documented)',
      'Friction point report with severity scoring',
      'Cost-of-inefficiency analysis (time × cost)',
      'Opportunity matrix — ranked by ROI',
      '30-day action plan with clear next steps',
    ],
    timeline: '2–3 weeks',
    price: 'CUSTOM',
    priceNote: 'Scoped to your business.',
  },
  {
    id: 'system-design',
    name: 'SYSTEM DESIGN',
    tagline: 'Architecture built around how you actually work.',
    what: `Based on your audit findings — or your own internal analysis — we design a system architecture built around how your operations actually run. Not a generic SaaS stack. Not a chatbot bolted onto your website. A purpose-built system with a clear data model, integration plan, and phased roadmap your team can understand, own, and run without depending on us.`,
    whoFor: [
      'Businesses who have completed or have equivalent insight to a Process Audit',
      'Operations teams ready to commit to a technology investment',
      'Leadership who need a clear technical plan before approving budget',
      "Businesses with complex, multi-step workflows that off-the-shelf tools can't handle",
    ],
    whatYouGet: [
      'System architecture blueprint (visual + documented)',
      'Technology stack recommendation with rationale',
      'Data model and integration map',
      'Phased implementation roadmap',
      'Resource and budget estimate for implementation',
      'Vendor/tool evaluation if applicable',
    ],
    timeline: '3–4 weeks',
    price: 'CUSTOM',
    priceNote: 'Scoped to your business.',
  },
  {
    id: 'implementation',
    name: 'IMPLEMENTATION\n& RETAINER',
    tagline: 'We build it, deploy it, and keep it improving.',
    what: `We take the approved design and build it. We handle integration with your existing tools, deploy to your environment, and run a structured handover with your team. Human decision-making stays in the loop at every stage — we build systems that inform and automate, not ones that remove judgment from the people who know your business best. After launch, we stay on retainer: monthly performance reviews, continuous improvements, and a direct line when something needs attention.`,
    whoFor: [
      'Businesses with an approved system design (ours or independently produced)',
      'Teams that want a partner for ongoing operations — not a one-time vendor',
      'Operations leaders who want measurable monthly improvement',
      'Businesses scaling fast and need their systems to scale with them',
    ],
    whatYouGet: [
      'Fully built and deployed system',
      'Integration with existing tools and databases',
      'Staff training and documentation',
      'Go-live support and stabilisation period',
      'Monthly performance review',
      'Ongoing improvements and feature additions',
      'Priority support channel',
    ],
    timeline: 'Custom — based on scope',
    price: 'CUSTOM',
    priceNote: 'Scoped to your business.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 border-b border-black">
        <p className="text-label opacity-50 mb-6">SERVICES</p>
        <h1 className="font-display font-extrabold uppercase text-hero tracking-tightest leading-none mb-8">
          WHAT WE DO.
        </h1>
        <p className="font-display font-normal text-[clamp(1.125rem,2vw,1.5rem)] leading-relaxed max-w-2xl opacity-80">
          Three engagements. One standard: your operations running measurably better.
        </p>
      </section>

      {/* ─── SERVICE SECTIONS ─────────────────────────────────────────── */}
      {SERVICES.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`border-b border-black ${i % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}
          aria-labelledby={`${svc.id}-heading`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
            {/* Service name */}
            <div className="mb-16">
              <p className="text-label opacity-40 mb-4">0{i + 1}</p>
              <h2
                id={`${svc.id}-heading`}
                className="font-display font-extrabold uppercase text-section tracking-tightest leading-none mb-4 whitespace-pre-line"
              >
                {svc.name}
              </h2>
              <p className="text-label opacity-60">{svc.tagline}</p>
            </div>

            {/* Detail grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* Left: what it is */}
              <div>
                <h3 className="font-display font-extrabold uppercase text-xl tracking-tightest mb-5">
                  WHAT IT IS
                </h3>
                <p className="font-sans text-[1.0625rem] leading-relaxed">{svc.what}</p>
              </div>

              {/* Right: who it's for + what you get */}
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="font-display font-extrabold uppercase text-xl tracking-tightest mb-5">
                    WHO IT&apos;S FOR
                  </h3>
                  <ul className="space-y-3">
                    {svc.whoFor.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-[1.0625rem] leading-relaxed flex gap-3"
                      >
                        <span className="flex-shrink-0 mt-[0.45em] w-1 h-1 bg-black rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display font-extrabold uppercase text-xl tracking-tightest mb-5">
                    WHAT YOU GET
                  </h3>
                  <ul className="space-y-3">
                    {svc.whatYouGet.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-[1.0625rem] leading-relaxed flex gap-3"
                      >
                        <span className="flex-shrink-0 mt-[0.45em] w-1 h-1 bg-black rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline + price bar */}
            <div className="border-t border-black pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div>
                <p className="text-label opacity-40 mb-2">TIMELINE</p>
                <p className="font-display font-extrabold uppercase text-2xl tracking-tightest">
                  {svc.timeline}
                </p>
              </div>
              <div>
                <p className="text-label opacity-40 mb-2">INVESTMENT</p>
                <p className="font-display font-extrabold uppercase text-2xl tracking-tightest">
                  {svc.price}
                </p>
                <p className="font-sans text-sm opacity-50 mt-1">{svc.priceNote}</p>
              </div>
              <div className="flex items-end">
                <CTAButton href="/contact">GET STARTED →</CTAButton>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── CLOSING CTA ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
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
