import Link from 'next/link'

export default async function Page() {
  console.log('exec Home page')
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <Link href={'/basic'}>Basic</Link>
          </li>
          <li className="mb-2">
            <Link href={'/lazy-load'}>Lazy Load Client Component</Link>
          </li>
          <li className="mb-2">
            <Link href={'/parallel-routes'}>Parallel Routes</Link>
          </li>
          <li className="mb-2">
            <Link href={'/isr/1'}>ISR [Build Time id(1|2|3)]</Link>
          </li>
          <li className="mb-2">
            <Link href={'/isr/777'}>ISR [Runtime Time id not (1|2|3)]</Link>
          </li>
          <li className="mb-2">
            <Link href={'/cookie-test'}>Cookie Test</Link>
          </li>
          <li className="mb-2">
            <Link href={'/route-streaming'}>Route Streaming</Link>
          </li>
          <li className="mb-2">
            <Link href={'/vibrate'}>Mobile Vibrate Test</Link>
          </li>
          {/* <li className="mb-2">
            <Link href={'/products/A'}>Test StaticParams Page</Link>
          </li>
          <li className="mb-2">
            <Link href={'/products/A/P1'}>Test StaticParams Page2</Link>
          </li>
          <li className="mb-2">
            <Link href={'/products/A3'}>Test DynamicParams Page</Link>
          </li>
          <li className="mb-2">
            <Link href={'/products/E/P4'}>Test DynamicParams Page2</Link>
          </li> */}
          <li className="mb-2 mt-[2000px]">
            <Link href={'/server-suspense'} prefetch={false}>Server Component + Suspense</Link>
          </li>
          <li className="mb-2">
            <Link href={'/server-action'} prefetch={true}>Server Action(if in viewport will fetch js + rsc)</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
