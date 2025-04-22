
function delay(ms = 3000) {
  return new Promise((res) => setTimeout(res, ms))
}
export default async function Team() {
  await delay()

  const data = { name: 'lg' }
  return (
    <div className="team-comp">
      <h4>This is @team Comp</h4>
      <div>{ data.name }</div>
    </div>
  )
}