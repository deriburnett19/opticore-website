'use client'

import { useState, FormEvent } from 'react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  const inputClass =
    'w-full border border-black bg-transparent px-4 py-3 font-sans text-[1rem] placeholder-black/30 focus:outline-none focus:ring-1 focus:ring-black transition'

  const labelClass = 'text-label opacity-50 mb-2 block'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            NAME *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            COMPANY
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Ltd."
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>
            EMAIL *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            PHONE
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (246) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          WHAT ARE YOU TRYING TO SOLVE? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your business, the problems you're facing, and what you've tried so far..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={state === 'sending'}
          className="w-full sm:w-auto bg-black text-white border border-black px-10 py-4 text-label transition-colors duration-200 hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === 'sending' ? 'SENDING...' : 'SEND'}
        </button>
      </div>

      {state === 'success' && (
        <p className="font-sans text-[1rem] text-green-700 border border-green-700 px-4 py-3">
          Message sent. We'll be in touch within one business day.
        </p>
      )}
      {state === 'error' && (
        <p className="font-sans text-[1rem] text-red-700 border border-red-700 px-4 py-3">
          Something went wrong. Please email us directly at hello@opticorecaribbean.com
        </p>
      )}
    </form>
  )
}
