'use client'
import { useState, useEffect } from 'react'

export function Hello() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    console.log('init Hello comp state')
    setCount(1)
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div>{`Count:${count}`}</div>
      <button className="m-2 rounded-xl p-2 bg-[#0000001d]" onClick={() => setCount((state) => state + 1)}>Count+1</button>
    </div>
  )
}

export function Hello2() {
    const [text, setText] = useState('')
  
    useEffect(() => {
      setText('BBB')
    }, [])
    return <div>Hello { text }</div>
  }