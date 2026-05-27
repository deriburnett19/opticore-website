import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // TODO: Replace with real email/CRM integration (e.g. Resend, SendGrid, HubSpot)
    console.log('[CONTACT FORM SUBMISSION]', {
      timestamp: new Date().toISOString(),
      ...body,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[CONTACT FORM ERROR]', error)
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}
