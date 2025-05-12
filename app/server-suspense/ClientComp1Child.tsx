'use client'

import { useState, useEffect } from 'react'

export function SubClientComp1() {
  const [data, setData] = useState({ count: 0 })
  console.log('render SubClientComp1')

  useEffect(() => {
    console.log('[useEffect] count changed', data.count)
  }, [data])

  function onClickAdd() {
    setData((state) => ({ count: state.count + 1 }))
  }

  return (
    <div className='m-2 flex flex-col border-4'>
      <h5>[Client Component Child]</h5>
      <div>{ `Count:${data.count}` }</div>
      <button className="rounded-xl p-2 bg-[#0000001d]" onClick={onClickAdd}>Count+1</button>
    </div>
  )
}