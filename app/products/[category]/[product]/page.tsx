import Link from "next/link"

// 'category' param is from parent 'generateStaticParams' function in build time
export async function generateStaticParams(args: {
  params: { category: string }
}) {
  console.log('[product]gen static params, category:', args)
  return Promise.resolve([{ product: 'P1' } , { product:  'P2' }, { product: 'P3' }])
}

export default async function Page({ params }: { params: Promise<{ product: string, category: string }> }) {
  const { category, product } = await params
  return(
    <div className="flex flex-col items-center">
      <h5>[GenerateStaticParams] Category(A|B|C is static)/Product(P1|P2|P3 is static)</h5>
      <div>{`Category: ${category}, Product: ${product}`}</div>
      <Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link>
    </div>
  )
}