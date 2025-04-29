import { connection } from "next/server"

function delay(ms = 3000) {
  return new Promise((res) => setTimeout(res, ms))
}
export default async function Team() {
  await connection()
  await delay()

  const data = { name: 'team data: test123' }
  return (
    <div className="team-comp border-2 m-2 p-2">
      <h4>This is @team Comp</h4>
      <div>{ data.name }</div>
    </div>
  )
}