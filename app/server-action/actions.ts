"use server"

export async function createPost(prevState: { title?: string, content?: string }, formData: FormData) {
  console.log('createPost on server', prevState)
  const title = formData.get('title')
  const content = formData.get('content')

  const res = await new Promise<{ ok: boolean, title?: FormDataEntryValue, content?: FormDataEntryValue }>((resolve, reject) => {
    setTimeout(() => {
      if (!title) {
        reject(new Error('test error'))
      } else if (title && content) {
        resolve({ ok: true, title, content })
      } else {
        resolve({ ok: false })
      }
    }, 1000)
  }).catch(err => console.error('Post failed, err', err))

  if (!res?.ok) {
    return { message: 'Failed Post' }
  }

  return { title: res.title?.toString(), content: res.content?.toString(), message: 'Success', last: { ...prevState } }
}