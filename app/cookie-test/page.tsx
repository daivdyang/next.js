import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function CookieTest() {
  const cookie = await cookies()
  const data = cookie.get('key')
  if (!data) {
    // throw a next.js error 'NEXT_REDIRECT' then response 307 for redirect to url
    redirect('/cookie-test/api')
  }

  console.log('cookie test page data', data)
  return (
    <div className="flex flex-col just-center items-center">
      <h5>[Cookie Test]</h5>
      <div>{`Cookie 'key' data:${data.value}`}</div>
      <Link className="m-2 rounded-xl p-2 bg-[#0000001d]" href={'/'}>Home</Link>
    </div>
  )
}

export const runtime = 'edge';