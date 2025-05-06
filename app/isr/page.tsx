
import Link from 'next/link'
import { cache1 } from './data'
// import { connection } from 'next/server'

export default async function IsrPage() {
  // await connection()
  const data = await cache1()
  return (
    <div className="flex flex-col items-center">
      <h5>[Incremental Static Regeneration]</h5>
      <div>{ `data:${data.data}` }</div>
      <Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link>
    </div>
  )
}