'use client'
import { useState } from 'react'

export default function ClientComp(props: { method: 'Get' | 'Post' }) {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState<string[]>([])

  function dumpData(reader: ReadableStreamDefaultReader<Uint8Array>) {
    reader.read().then((result) => {
      const { done, value } = result
      if (done) {
        console.log('load done', value)
        setLoading(false)
        window.setTimeout(() => {
          setList((arr) => [...arr, 'Done'])
        }, 2000)
        return
      }
      const decoder = new window.TextDecoder()
      console.log('value', value);
      setList((arr) => {
        const text = decoder.decode(value)
        return [...arr, text]

      })
      dumpData(reader)
    })
  }

  function onClick() {
    const { method } = props
    setLoading(true)
    fetch('/route-streaming/api', { method }).then(res => {
      const reader = res.body?.getReader()
      if (reader) {
        dumpData(reader)
      }
    })
  }

  return (
    <div className="border-4 m-4 p-2">
      <button
        className={`m-2 px-4 py-2 rounded-xl bg-[#0000000d] ${loading ? 'bg-[yellow]' : ''}`}
        onClick={onClick}
        disabled={loading}
      >
          Start Fetch Stream
      </button>
      {list.map((data, idx) => <p key={idx}>{data}</p>)}
    </div>
  )
}