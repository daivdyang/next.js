import Link from "next/link";
import Vibration from "./Vibration";

export default async function Page() {
  return (
    <div className='p-4'>
      <div className="text-[1.5rem]">[Mobile Vibration]</div>
      <div className="text-[1.2rem] font-bold">測試手機觸發震動功能</div>
      <div className="text-[blue] underline"><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate" target="_blank">Ref: MDN</Link></div>
      <Vibration />
      <div className="my-4"><Link className="rounded-xl p-2 bg-[#0000001d]" href={'/nextjs'}>Back</Link></div>
    </div>
  )
}