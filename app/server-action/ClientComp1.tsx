"use client"

import { useActionState, useEffect } from 'react'
import { createPost } from './actions'

const initialState = {
  message: '',
}

export function Form() {
  console.log('useActionState', useActionState)
  const [state, formAction, pending] = useActionState(createPost, initialState)
 
  useEffect(() => {
    console.log('useEffect Form', state)
  }, [state])

  return (
    <form className='flex flex-col items-center' action={formAction}>
      <div className='p-2'>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />
      </div>
      <div className='flex p-2'>
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" required />
      </div>
      {state?.message && <p>{state.message}</p>}
      <div>{ `loading status: ${pending.toString()}`}</div>
      <button className="px-4 py-2 rounded-xl bg-[#0000000d]" disabled={pending}>Create Post</button>
    </form>
  )
}