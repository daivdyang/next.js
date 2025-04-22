import { ClientComp1 } from './ClientComp1';
import { ServerComp1 } from './ServerComp1';


export default function Dashboard() {
    console.log('exec Dashboard');

    return (
        <>
            {/* <ServerComp1 /> */}
            <ClientComp1>
                <ServerComp1 />
            </ClientComp1>
        </>
    )
}