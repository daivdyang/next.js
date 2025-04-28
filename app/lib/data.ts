import { cache } from 'react'

// cache data by 'id'
export const genData = cache(async (id: string) => {
  console.log('gen data', id)
  return await Promise.resolve({ id, name: 'test data', content: 'data1' })
})