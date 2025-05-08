
import Link from 'next/link'
import { cache2 } from '../data'
export async function generateStaticParams() {
  console.log('[isr/[id]]exec "generateStaticParams"')
  // fetch api must use absolute path
  const list = await cache2()

  return list.map(item => ({ id: item.id }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  console.log('exec isr/[id] page', id)
  return (
    <div className="flex flex-col items-center">
      <h5>[Incremental Static Regeneration]</h5>
      <div>{`Id: ${id}, revalidate:(${revalidate}s)`}</div>
      <div>Timestamp: {Date.now()}</div>
      <Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link>
    </div>
  )
}

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

export const dynamicParams = true // or false, to 404 on unknown paths