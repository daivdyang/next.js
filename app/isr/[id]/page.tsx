
import Link from 'next/link'
import Image from 'next/image'
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
    <div className="p-4">
      <div className="text-[1.5rem]">[Incremental Static Regeneration]</div>
      <div className="text-[1.2rem]">ISR目的是讓動態的路由可以針對部分路由生成靜態html，且可透過設定來刷新這些靜態html．</div>
      <div className="m-8">
        <div>Build time會先透過<q className="font-bold">generateStaticParams</q>返回<q className="font-bold">路由參數列表</q>並透過此參數列表產生靜態html．</div>
        <div>然後用戶進入url時，會檢查<q className="font-bold">路由參數</q>是否存在於build time產生的html，</div>
        <div>用戶第一次進入，若有設定<q className="font-bold">revalidate</q>，cache control內會有<q className="font-bold">cache-control: s-maxage=xxx, stale-while-revalidate=xxx</q>表示快取逾時秒數，</div>
        <div className="p-8">
          <ul className='list-disc'>
            <li>若<q className="font-bold">有revalidate設定且未逾時</q>就會返回http status 304與遊覽器緩存的html內容</li>
            <li>若<q className="font-bold">有revalidate設定且逾時了</q>就會返回http status 304與遊覽器緩存的html內容，但server端會在背景重新產生html，然後當下一次請求進入(ex:重整頁面)時，因為etag的hash變了，所以會返回新的html，但若是用route轉導則不會更新內容的(rsc payload不會改變)</li>
            <li>若<q className="font-bold">沒有revalidate設定</q>就會看<q className="font-bold">dynamicParams設定</q>，為<b>true</b>時就會動態產生html並返回該html，為<b>false</b>就會轉跳到404頁面</li>
          </ul>
          <div>
            PS: 
            <a className="text-[blue]" href='https://github.com/cloudflare/next-on-pages/blob/main/packages/next-on-pages/docs/supported.md#incremental-static-regeneration' target='_blank'>Cloudflare not support <b>ISR</b></a>
            , only can test on local build & local start
          </div>
        </div>
      </div>
      <div>
        <div>CURL範例(revalidate=60)</div>
        <div className="mb-2 p-2 border-4">
          <div><b>(檢驗"ETag")未逾時的請求返回304，故使用上次緩存的html</b></div>
          <Image src={`/img/ISR01.png`} alt={'img'}  width="400" height="200"></Image>
        </div>
        <div className="mb-2 p-2 border-4">
          <div><b>(檢驗"ETag")已逾時的請求仍返回304，仍使用上次緩存的html，但服務器會在背景重新產生該html，response header有標記已過時</b></div>
          <Image src={`/img/ISR02.png`} alt={'img'}  width="400" height="200"></Image>
        </div>
        <div className="mb-2 p-2 border-4">
          <div><b>已重新產生html，故返回該html並更新"ETag"</b></div>
          <Image src={`/img/ISR03.png`} alt={'img'}  width="400" height="100"></Image>
        </div>
      </div>
      <div className="border-4 p-2">
        <div>{`Id: ${id}, revalidate:(${revalidate}s)`}</div>
        <div>(Server刷新時間)Timestamp: {Date.now()}</div>
      </div>
      <div className="my-4"><Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link></div>
    </div>
  )
}

// cloudflare not support ISR, only can test on local run build & local run start 
// https://github.com/cloudflare/next-on-pages/blob/main/packages/next-on-pages/docs/supported.md#incremental-static-regeneration

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

export const dynamicParams = true // or false, to 404 on unknown paths