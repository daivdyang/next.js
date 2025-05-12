import { Suspense } from "react";
import { ClientComp1 } from "./ClientComp1";
import { ServerComp1 } from './ServerComp1'
import { ServerComp2 } from './ServerComp2'

const Loading = () => <div className="box m-2 p-2">Loading Server Comp1 ...</div>

export default function Page() {
    console.log('exec Profile');

    return (
        <div className="p-4">
            <div className="text-[1.5rem]">[Server Component + Suspense]</div>
            <div className="text-[1.2rem] font-bold">測試同時間加載Server Component(延遲)與操作Client Component(無延遲)</div>
            <div className="p-2">進入後，開始加載Server Component(5秒,3秒)，此時Client Component會先加載完，Client Component的操作不會影響Server Component．</div>
            <div className="flex">
                <Suspense fallback={<Loading />}>
                    <ServerComp1 key="s1" ms={5000} />
                </Suspense>
                <Suspense fallback={<Loading />}>
                    <ServerComp1 key="s2" ms={3000}/>
                </Suspense>
            </div>
            <ClientComp1 key={"ProfileKey"} child2={<ServerComp2 />}>
                <div className="m-2 border-4 p-2">Client component slot content</div>
            </ClientComp1>
        </div>
    )
}

// need add this for build time using 
export const runtime = 'edge'