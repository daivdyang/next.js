
import Link from 'next/link'
import { cache1 } from './data'
// import { connection } from 'next/server'
export const revalidate = 10

export const dynamicParams = true

export async function generateStaticParams() {
  console.log('call generateStaticParams')
  const posts = await Promise.resolve([{ id: 1, data: '111'}, { id: 2, data: '222'}, { id: 3, data: '333'}])
  return posts.map((post) => ({
    id: String(post.id),
    data: post.data
  }))
}

export default async function IsrPage() {
  // await connection()
  const data = await cache1()
  return (
    <div>
      <h5>[Incremental Static Regeneration]</h5>
      <div>{ `data:${data.data}` }</div>
      <Link href={'/'}>Home</Link>
    </div>
  )
}