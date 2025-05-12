import Link from 'next/link'
import ClientComp from './ClientComp'

export default function Page() {
  return (
    <div className="p-4">
      <div className="text-[1.5rem]">[Streaming]</div>
      <div className="text-[1.2rem] font-bold">使用route api測試streaming</div>
      <div>點擊後會發送請求到/api，透過chunk的方式漸進式(隔兩秒)取得一部分數據並顯示到頁面上，可在Devtools觀察network request．</div>
      <div className="flex">
        <ClientComp key="c1" method='Get' />
        <ClientComp key="c2" method='Post' />
      </div>
      <Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link>
    </div>
  )
}