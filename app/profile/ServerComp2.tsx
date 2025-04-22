export function ServerComp2() {
  console.log('exec ServerComp2')
  const data = { name: 's2', age: 888 }
  return (
    <div>
      <h1>This is Server Component 2</h1>
      <div>name: { data.name }</div>
      <div>age: { data.age }</div>
    </div>
  )
}