import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_SECRET = 'brewandco'

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.RESERVATION_WEBHOOK_URL
  if (!webhookUrl) {
    console.error('[reservation] RESERVATION_WEBHOOK_URL is not set.')
    return NextResponse.json(
      { error: 'Reservation service is not configured.' },
      { status: 503 }
    )
  }

  let body: {
    guestName: string
    group: string | number
    email?: string
    date?: string
    time?: string
    specialRequests?: string
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { guestName, group, email, date, time, specialRequests } = body

  if (!guestName?.trim())
    return NextResponse.json({ error: 'Guest name is required.' }, { status: 400 })
  if (group === undefined || group === null || group === '')
    return NextResponse.json({ error: 'Party size is required.' }, { status: 400 })

  const payload: Record<string, unknown> = { guestName: guestName.trim(), group }
  if (email)           payload.email           = email
  if (date)            payload.date            = date
  if (time)            payload.time            = time
  if (specialRequests) payload.specialRequests = specialRequests

  let webhookRes: Response
  try {
    webhookRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-secret': WEBHOOK_SECRET,
      },
      body: JSON.stringify(payload),
    })
  } catch {
    return NextResponse.json(
      { error: 'Could not reach the reservation service. Please try again.' },
      { status: 503 }
    )
  }

  if (!webhookRes.ok) {
    const responseBody = await webhookRes.text()
    return NextResponse.json(
      { error: `n8n error ${webhookRes.status}: ${responseBody}` },
      { status: 502 }
    )
  }

  return NextResponse.json({ success: true })
}
