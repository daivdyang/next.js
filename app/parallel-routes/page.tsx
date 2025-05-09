import Link from "next/link";

export const runtime = 'edge'

export default function Page() {

  return (
    <div className="m-2 p-2 flex flex-col gap-2 justify-between items-center">
      <h4>[Parallel routes]</h4>
      <div>下方兩個區塊為Server Component，且以slot形式從root組件載入，若從url進入，則透過返回html的connection接續返回chunk來更新Server Component內容，若從next route進入的，則透過返回rsc payload的connection接續返回chunk來更新Server Component內容</div>
      <div><Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link></div>
    </div>
  )
}