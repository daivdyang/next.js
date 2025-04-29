import Link from "next/link";

export const runtime = 'edge'

export default function ParallelRoutes() {

  return (
    <div className="m-2 p-2 flex justify-between items-center">
      <h4>[Parallel routes]</h4>
      <Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link>
    </div>
  )
}