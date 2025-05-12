import { Suspense } from "react"

function Loading (props: { name: string }) {
  return (<div className="p-4 border-4">Loading {props.name} Comp ...</div>)
}


export default function ParallelLayout(
  { children, team, analytics }: {
  children: Readonly<React.ReactNode>,
  team: Readonly<React.ReactNode>,
  analytics: Readonly<React.ReactNode>
}) {
  return (
    <div className="Parallel-Layout m-2 p-2 border-4">
      {children}
      <div className="flex gap-4">
        <Suspense fallback={<Loading name="Team" />}>
          {team}
        </Suspense>
        <Suspense fallback={<Loading name="Analytics" />}>
          {analytics}
        </Suspense>
      </div>
    </div>
  )
}