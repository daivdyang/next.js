import { NextRequest } from "next/server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

function delay(ms = 1000) {
  return new Promise<void>(res => setTimeout(res, ms))
}

export async function GET(request: Request) {
  console.log('req url', request.url, request instanceof NextRequest)
  await delay()
  const cookie = await cookies()
  console.log('[Server]client cookie content:', cookie.toString())
  const cookieItem = cookie.get('key')
  const data = !cookieItem?.value ? '123' : `${Number(cookieItem.value) + 1}`;
  cookie.set('key', data, { maxAge: 10, httpOnly: true })
  cookie.set('key2', 'data123', { maxAge: 100 })

  // redirect back origin url and set cookie to client
  redirect('/cookie-test')
}

export const runtime = 'edge';