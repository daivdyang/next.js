import Link from 'next/link'

export default async function Home() {
  console.log('this is app Home')
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <Link href={'/dashboard'}>Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link href={'/blogs'}>Blogs</Link>
          </li>
          <li className="mb-2">
            <Link href={'/blogs/xxx'}>Blogs/xxx</Link>
          </li>
          <li className="mb-2">
            <Link href={'/parallel-routes'}>Parallel Routes</Link>
          </li>
          <li className="mb-2">
            <Link href={'/isr'}>Incremental Static Regeneration</Link>
          </li>
          <li className="mb-2 mt-[2000px]">
            <Link href={'/profile'} prefetch={false}>Profile</Link>
          </li>
          <li className="mb-2">
            <Link href={'/server-action'} prefetch={true}>Server Action</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
