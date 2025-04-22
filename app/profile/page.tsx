import { Suspense } from "react";
import { ClientComp1 } from "./ClientComp1";
import { ServerComp1 } from './ServerComp1'

const Loading = () => '<div>Loading Server Comp1</div>'

export default function Profile() {
    console.log('exec Profile');

    return (
        <>
            <div>
                [Profile]This is Server Component
            </div>
            <Suspense fallback={<Loading />}>
                <ServerComp1 />
            </Suspense>
            <ClientComp1 key={"ProfileKey"}>
                <div>Test123</div>
            </ClientComp1>
        </>
    )
}