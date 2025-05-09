
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
    <div className="flex flex-col items-center p-2">
      <div className="text-[1.5rem]">[Incremental Static Regeneration]</div>
      <div className="text-[1.2rem]">ISR目的是讓動態的路由可以針對部分segment生成靜態html，且可透過設定刷新這些靜態html</div>
      <div className="m-8">
        <div>Build time會先透過<q className="font-bold">generateStaticParams</q>返回<q className="font-bold">路由參數列表</q>並透過此參數列表產生靜態html．</div>
        <div>然後用戶進入url時，會檢查<q className="font-bold">路由參數</q>是否存在於build time產生的html，</div>
        <div>用戶第一次進入，若有設定<q className="font-bold">revalidate</q>，cache control內會有<q className="font-bold">cache-control: s-maxage=xxx, stale-while-revalidate=xxx</q>表示快取逾時秒數</div>
        <div className="p-8">
          <ul className='list-disc'>
            <li>若<q className="font-bold">有revalidate且未逾時</q>就會返回http status 304與遊覽器緩存的html內容</li>
            <li>若<q className="font-bold">有revalidate且逾時了</q>就會返回http status 304與遊覽器緩存的html內容，但server端會在背景重新產生html，然後當下一次請求進入(ex:重整頁面)時，因為etag的hash變了，所以會返回新的html，但若是用route轉導則不會更新內容的(rsc payload不會改變)</li>
            <li>若<q className="font-bold">沒有revalidate</q>就會看<q className="font-bold">dynamicParams</q>，為true時就會動態產生html並返回該html，為false就會轉跳到404頁面</li>
          </ul>
          <div>
            PS: 
            <a className="text-[blue]" href='https://github.com/cloudflare/next-on-pages/blob/main/packages/next-on-pages/docs/supported.md#incremental-static-regeneration' target='_blank'>cloudflare not support <b>ISR</b></a>
            , only can test on local build & local start
          </div>
        </div>
      </div>
      <div>{`Id: ${id}, revalidate:(${revalidate}s)`}</div>
      <div>Timestamp: {Date.now()}</div>
      <Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link>
    </div>
  )
}

// cloudflare not support ISR, only can test on local run build & local run start 
// https://github.com/cloudflare/next-on-pages/blob/main/packages/next-on-pages/docs/supported.md#incremental-static-regeneration

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

export const dynamicParams = true // or false, to 404 on unknown paths