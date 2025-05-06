import Link from 'next/link'
import ClientComp from './ClientComp'

export default function RouteStreaming() {
  return (
    <div className="flex flex-col items-center">
      <h5>[Route Streaming]</h5>
      <ClientComp key="c1" method='Get' />
      <ClientComp key="c2" method='Post' />
      <Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link>
    </div>
  )
}