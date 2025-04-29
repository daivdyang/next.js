import { connection } from 'next/server'

function delay(ms = 3000) {
  return new Promise((res) => setTimeout(res, ms))
}

export default async function Analytics() {
  await connection()
  await delay()
  const data = { name: 'analytics data: hello wold' }

  return (
    <div className="analytics-comp border-2 m-2 p-2">
      <h4>This is @analytics Comp</h4>
      <div>{ data.name }</div>
    </div>
  )
}