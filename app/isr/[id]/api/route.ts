
import { cache2 } from '../../data'

export async function GET(request: Request) {
  console.log('[call api]', request.url)
  const  data = await cache2()
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
}

export const runtime = 'edge';