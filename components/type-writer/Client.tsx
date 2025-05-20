'use client'

import { useState, useEffect } from 'react'
import { delay } from '@/util/common'

async function* typeWriter(messages: string[]): AsyncGenerator<string, undefined, boolean> {
  let acc = ''
  let stop = false
  while (!stop) {
    // accumulate message for display
    for(const message of messages) {
      acc = ''
      for(const ch of message) {
        acc += ch
        stop = yield acc
        if (stop) {
          return
        }
        await delay(300)
      }
    }
  }

  return
}

export default function TypeWriterClient(props: { messages: string[], fontSize: string }) {

  const [content, setContent] = useState<string>()

  useEffect(() => {
    const genContent = typeWriter(props.messages)

    function start() {
      genContent.next().then(result => {
        const { done, value } = result
        setContent(value)
        if (!done) {
          start()
        }
      })
    }

    start()
  }, [props.messages])

  return (
    <div style={{ fontSize: props.fontSize }}>{content}</div>
  )
}
