import { NextRequest, NextResponse } from 'next/server'

const N8N_WEBHOOK_URL =
  'https://zunaibaofficial.app.n8n.cloud/webhook/16282231-d4f5-4abd-ad15-fadd72a95e83/chat'

function looksLikeHtml(text: string): boolean {
  const t = text.trimStart()
  return t.startsWith('<!DOCTYPE') || t.startsWith('<html') || t.startsWith('<HTML')
}

export async function POST(req: NextRequest) {
  const body = await req.text()

  let response: Response
  try {
    response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': req.headers.get('Content-Type') || 'application/json',
      },
      body,
    })
  } catch {
    return NextResponse.json(
      { error: 'Could not reach the chatbot service. Please try again later.' },
      { status: 503 }
    )
  }

  const contentType = response.headers.get('Content-Type') || ''
  const data = await response.text()

  // Block HTML responses regardless of content-type header
  if (looksLikeHtml(data) || !contentType.includes('application/json')) {
    return NextResponse.json(
      { error: 'The chatbot workflow is not active. Please activate it in n8n.' },
      { status: 503 }
    )
  }

  // Block HTML that slipped inside a JSON output field
  try {
    const parsed = JSON.parse(data)
    const output: unknown = parsed?.output ?? (Array.isArray(parsed) ? parsed[0]?.output : null)
    if (typeof output === 'string' && looksLikeHtml(output)) {
      return NextResponse.json(
        { error: 'The AI returned an unexpected response. Check your n8n workflow — the AI Agent may be returning raw webpage HTML instead of a text answer.' },
        { status: 502 }
      )
    }
  } catch {
    // not valid JSON — let it fall through to the response below which will surface the parse error to the widget
  }

  return new NextResponse(data, {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const url = new URL(N8N_WEBHOOK_URL)
  searchParams.forEach((v, k) => url.searchParams.set(k, v))

  let response: Response
  try {
    response = await fetch(url.toString())
  } catch {
    return NextResponse.json(
      { error: 'Could not reach the chatbot service.' },
      { status: 503 }
    )
  }

  const contentType = response.headers.get('Content-Type') || ''
  const data = await response.text()

  if (looksLikeHtml(data) || !contentType.includes('application/json')) {
    return NextResponse.json(
      { error: 'The chatbot workflow is not active. Please activate it in n8n.' },
      { status: 503 }
    )
  }

  return new NextResponse(data, {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  })
}
