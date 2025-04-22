'use client'
import { useState, useEffect } from 'react'

export function Hello() {
  const [text, setText] = useState('')

  useEffect(() => {
    setText('AAA')
  }, [])

  return <div onClick={() => setText('Qoo')}>Hello { text }</div>
}

export function Hello2() {
    const [text, setText] = useState('')
  
    useEffect(() => {
      setText('BBB')
    }, [])
    return <div>Hello { text }</div>
  }