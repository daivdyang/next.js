"use server"

export async function createPost(prevState: unknown, formData: FormData) {
  console.log('createPost on server', prevState)
  const title = formData.get('title')
  const content = formData.get('content')

  const res = await new Promise<{ ok: boolean, title?: FormDataEntryValue, content?: FormDataEntryValue }>((resolve, reject) => {
    setTimeout(() => {
      if (title === 'err' || content === 'err') {
        reject(new Error('test error'))
      } else if (title && content) {
        resolve({ ok: true, title, content })
      } else {
        resolve({ ok: false })
      }
    }, 1000)
  })

  if (!res.ok) {
    return { message: 'Failed to create post' }
  }

  return { title: res.title, content: res.content }
}