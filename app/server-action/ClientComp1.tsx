"use client"

import { useActionState, useEffect } from 'react'
import { createPost } from './actions'

const initialState = {
  message: '',
  title: undefined,
  content: undefined
}

export function Form() {
  console.log('useActionState', useActionState)
  const [state, formAction, pending] = useActionState(createPost, initialState)

  useEffect(() => {
    console.log('useEffect Form', state)
  }, [state])

  return (
    <form action={formAction}>
      <div className="flex">
        <div className='m-2 p-2 border-2'>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className=' flex m-2 p-2 border-2'>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" required />
        </div>
      </div>
      <div>{ `Loading: ${pending.toString()}`}</div>
      <button className="m-2 px-4 py-2 rounded-xl bg-[#0000000d]" disabled={pending}>Create Post</button>
      <div className="border-4 p-2">
        <div><b>Response:</b></div>
        <div className="px-2">{`Message: ${state?.message}`}</div>
        <div className="px-2">{`上次請求Title: ${state?.title ?? ''}`}</div>
        <div className="px-2">{`上次請求Content: ${state?.content ?? ''}`}</div>
        <div className="px-2">{`上上次請求Title: ${state?.last?.title ?? ''}`}</div>
        <div className="px-2">{`上上次請求Content: ${state?.last?.content ?? ''}`}</div>
      </div>
    </form>
  )
}