import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Page() {
  const cookie = await cookies()
  const data = cookie.get('key')
  if (!data) {
    // throw a next.js error 'NEXT_REDIRECT' then response 307 for redirect to url
    redirect('/cookie-test/api')
  }

  console.log('cookie test page data', data)
  return (
    <div className="p-4">
      <div className="text-[1.5rem]">[Cookie Test]</div>
      <div className="text-[1.2rem] font-bold p-4">模擬設定cookie以及更新cookie內容(key的時效性只設定10秒，10秒內刷新頁面不會有307導轉)</div>
      <div className="p-4">進入時檢查cookie.key是否存在，若空值就發請求到cookie-test/api(固定延遲一秒)的rsc payload，然後同時header存在set-cookie來將用戶端的cookie更新，同時因307導轉，故設定完cookie後就再回此頁面，這時候本地的cookie一定存在，若手動將網址後綴加上/api，會再將本地的cookie更新一次．</div>
      <div className="border-4 p-2">{`Cookie 'key' data:${data.value}`}</div>
      <div className="my-4"><Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link></div>
    </div>
  )
}

export const runtime = 'edge';