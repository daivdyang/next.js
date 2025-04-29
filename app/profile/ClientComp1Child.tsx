'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
export function SubClientComp1() {
  const router = useRouter()

  console.log('render SubClientComp1')
  const [data, setData] = useState({ count: 0 })

  useEffect(() => {
    console.log('[useEffect] count changed', data.count)
  }, [data])

  function onClick() {
    console.log('click add Count, current count', data.count)
    setData((data) => {
      return { count: data.count + 1 }
    })
  }

  function onClickBackHome() {
    console.log('pushState to home page')
    // window.history.pushState(null, '', '/')
    router.push('/')
  }

  return (
    <div className='m-2 flex flex-col border-4'>
      <h5>[Client Component Child]</h5>
      <div onClick={onClick}>{ `Count:${data.count}` }</div>
      <button className="rounded-xl p-2 bg-[#0000001d]" onClick={onClickBackHome}>Home</button>
    </div>
  )
}