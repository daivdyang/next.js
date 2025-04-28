import { cache } from 'react'

export const cache1 = cache(async () => {
  console.log('[exec cache1]')
  return await Promise.resolve({ data: 'cache1 data' })
})

console.log('type', typeof cache1)