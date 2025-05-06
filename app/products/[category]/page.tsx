import Link from "next/link"

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  console.log('category', category)
  return(
    <div className="flex flex-col items-center">
      <h5>[GenerateStaticParams] Category(A|B|C is static)</h5>
      <div>{`Category: ${category}`}</div>
      <Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link>
    </div>
  )
}