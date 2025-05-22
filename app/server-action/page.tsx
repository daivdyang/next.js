import Link from 'next/link'
import Image from 'next/image'
import { Form } from './ClientComp1'

export default function Page() {
  return (
    <div className='p-4'>
      <div className="text-[1.5rem]">[Server Action]</div>
      <div className="text-[1.2rem] font-bold">測試發送React Server Action請求到服務器上並返回結果</div>
      <div className="p-2">由服務器來處理各種邏輯，類似aspx的做法，當發送請求後，會在頁面form上產生一些隱藏的input且是後端能辨識的id，透過此方式來達成後端處理的動作，後端會記錄其狀態，所以開多個頁面送出的請求也是各自的狀態紀錄在後端，互不影響，其目標是讓Server component也能與服務器有互動行為，而不限定只能Client component才能做互動．</div>
      <div className="mb-2 p-2 border-4"><Image src={`/img/server-action01.png`} alt={'img'}  width="400" height="100"></Image></div>
      <div className="mb-2 p-2 border-4"><Image src={`/img/server-action02.png`} alt={'img'}  width="400" height="100"></Image></div>
      <div className="p-2 border-4">
        <div>Form表單</div>
        <Form />
      </div>
      <div className="my-4"><Link className="rounded-xl p-2 bg-[#0000001d]" href={'/nextjs'}>Back</Link></div>
    </div>
  )
}

export const runtime = 'edge'