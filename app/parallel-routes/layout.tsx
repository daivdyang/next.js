import { Suspense } from "react"

function TeamLoading () {
  return (<div>Loading Team Comp</div>)
}


export default function ParallelLayout(
  { children, team, analytics }: {
  children: Readonly<React.ReactNode>,
  team: Readonly<React.ReactNode>,
  analytics: Readonly<React.ReactNode>
}) {
  return (
    <div className="Parallel-Layout">
      {children}
      <Suspense fallback={<TeamLoading />}>
        {team}
      </Suspense>
      {analytics}
    </div>
  )
}