import { NextRequest } from "next/server"

export async function GET(request: NextRequest, others: { params: Promise<unknown> }) {
  console.log('[get] request', request.nextUrl, others)
  const parameters = await others.params
  console.log('parameters', parameters)
  return Response.json({ message: 'this is profile response message for [GET]' })
}

export async function POST(request: NextRequest, others: { params: Promise<unknown> }) {
  console.log('[post] request', request.url)
  const reader = request.body?.getReader()
  if (reader) {
    const chunks: Uint8Array<ArrayBufferLike>[] = []
    let str = ''
    let isDone = false
    const decoder = new TextDecoder()
    do {
      const { done, value } = await reader.read()
      if (value) {
        console.log('push chunk', value)
        chunks.push(value)
        str += decoder.decode(value)
      }
      isDone = done
    } while(isDone)
    console.log(`request body(${str})`)
  }
  const parameters = await others.params
  console.log('parameters', parameters)
  return Response.json({ message: 'this is profile response message for [POST]' })
}

export async function PUT(request: NextRequest, others: { params: Promise<unknown> }) {
  console.log('[put] request', request.nextUrl, others)
  const parameters = await others.params
  console.log('parameters', parameters)
  return Response.json({ message: 'this is profile response message for [PUT]' })
}

export async function DELETE(request: NextRequest, others: { params: Promise<unknown> }) {
  console.log('[del] request', request.nextUrl, others)
  const parameters = await others.params
  console.log('parameters', parameters)
  return Response.json({ message: 'this is profile response message for [DELETE]' })
}