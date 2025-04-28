import { Suspense } from "react";
import { ClientComp1 } from "./ClientComp1";
import { ServerComp1 } from './ServerComp1'
import { ServerComp2 } from './ServerComp2'

const Loading = () => '<div>Loading Server Comp1</div>'

export default function Profile() {
    console.log('exec Profile');

    return (
        <>
            <h5>[Profile]</h5>
            <Suspense fallback={<Loading />}>
                <ServerComp1 />
            </Suspense>
            <ClientComp1 key={"ProfileKey"} child2={<ServerComp2 />}>
                <div>Client component slot content</div>
            </ClientComp1>
        </>
    )
}