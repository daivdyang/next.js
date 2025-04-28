import { genData } from '@/app/lib/data'

export async function ServerComp2() {
  console.log('exec ServerComp2')
  const data = await genData('cacheKey1')
  return (
    <div>
      <h1>[Server Component 2]</h1>
      <div>name: { data.name }</div>
      <div>id: { data.id }</div>
    </div>
  )
}