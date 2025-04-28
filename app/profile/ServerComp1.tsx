// import { redirect } from 'next/navigation'

import { genData } from "../lib/data";

function delay<T>(data: T, ms = 5000) {
  return new Promise<T>(res => {
    console.log(`延遲${ms}ms`)
    setTimeout(() => {
      console.log('送出資料', data)
      res(data)
    }, ms);
  })
}

export async function ServerComp1() {
  console.log('exec ServerComp1')
  await delay<unknown>(null)
  const data = await genData('cacheKey1')
  // redirect('/')
  return (
    <div>
      <h1>[Server Component]</h1>
      <div>name: { data.name }</div>
      <div>id: { data.id }</div>
    </div>
  )
}
