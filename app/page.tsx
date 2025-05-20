// import Link from 'next/link'
import HomeClient from '@/components/type-writer/Client'

const messages = [
  'This is Knock Space.',
  'Just For Fun.'
]

export default async function Home() {
  console.log('exec Home page')
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HomeClient messages={messages} fontSize='5rem' />
      </main>
    </div>
  );
}
