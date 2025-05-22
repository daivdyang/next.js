import Link from "next/link";

export const runtime = 'edge'

export default function Page() {

  return (
    <div className="p-4">
      <div className="text-[1.5rem]">[Parallel Routes]</div>
      <div className="text-[1.2rem] font-bold">測試以Parallel的方式加載Server Component</div>
      <div>下方兩個區塊為Server Component，且以slot形式從root組件載入(延遲3秒)，若從url進入，則透過返回html的connection接續返回chunk來更新Server Component內容，若從next route進入的，則透過返回rsc payload的connection接續返回chunk來更新Server Component內容</div>
      <div className="my-4"><Link className="rounded-xl p-2 bg-[#0000001d]" href={'/nextjs'}>Back</Link></div>
    </div>
  )
}