import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Book a Process Audit or get in touch with the OptiCore Caribbean team. We're based in Bridgetown, Barbados.",
  openGraph: {
    title: 'Contact — OptiCore Caribbean',
    description: 'Book a Process Audit or get in touch.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 border-b border-black">
        <p className="text-label opacity-50 mb-6">CONTACT</p>
        <h1 className="font-display font-extrabold uppercase text-hero tracking-tightest leading-none">
          LET&apos;S TALK.
        </h1>
      </section>

      {/* ─── TWO-COLUMN BODY ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── LEFT: contact info ── */}
          <div>
            <h2 className="font-display font-extrabold uppercase text-[clamp(1.6rem,3vw,2.2rem)] tracking-tightest mb-6">
              BOOK A PROCESS AUDIT
            </h2>
            <p className="font-sans text-[1.0625rem] leading-relaxed mb-10 opacity-80">
              The Process Audit is where everything starts. It's a fixed-scope, fixed-price
              engagement that gives you a clear picture of where your business is losing time
              and money — and exactly what to do about it. Fill out the form and we'll respond
              within one business day to schedule a scoping call.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div>
                <p className="text-label opacity-50 mb-2">EMAIL</p>
                <a
                  href="mailto:derib@opticorecaribbean.com"
                  className="font-sans text-[1.0625rem] border-b border-black pb-px hover:opacity-50 transition-opacity"
                >
                  derib@opticorecaribbean.com
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <p className="text-label opacity-50 mb-2">WHATSAPP</p>
                <a
                  href="https://wa.me/12462582718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[1.0625rem] border-b border-black pb-px hover:opacity-50 transition-opacity"
                >
                  +1 (246) 258-2718
                </a>
              </div>

              {/* Address */}
              <div>
                <p className="text-label opacity-50 mb-2">LOCATION</p>
                <address className="font-sans text-[1.0625rem] not-italic leading-relaxed">
                  Bridgetown, Barbados
                  <br />
                  Caribbean
                </address>
              </div>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
