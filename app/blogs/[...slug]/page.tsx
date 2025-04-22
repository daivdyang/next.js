export const runtime = 'edge'

export default async function Page({ params }: { params: Promise<{ slug: string[] }>}) {
  const item = await params
  console.log('slug', item.slug)
  return (
    <div>
      <h4>This is blog sub pages</h4>
      <div>{  item.slug }</div>
    </div>
  )
}