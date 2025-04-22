'use client'

import { useState, useEffect } from 'react'
export function SubClientComp1() {
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

  return (
    <div>
      <h5>This is Client Comp1 Child</h5>
      <div onClick={onClick}>{ `Count:${data.count}` }</div>
    </div>
  )
}