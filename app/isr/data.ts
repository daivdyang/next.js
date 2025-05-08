import { cache } from 'react'

export const mockList = [
  { id: '1', content: 'this is item 1' },
  { id: '2', content: 'this is item 2' },
  { id: '3', content: 'this is item 3' },
]

export const cache1 = cache(async () => {
  console.log('[exec cache1]')
  return await Promise.resolve({ data: 'cache1 data' })
})

export const cache2 = cache(() => {
  console.log('[exec cache2]')

  return Promise.resolve(mockList)
})

console.log('type', typeof cache1)