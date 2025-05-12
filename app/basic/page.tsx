import { ClientComp1 } from './ClientComp1';
import { ServerComp1 } from './ServerComp1';


export default function Page() {
    console.log('exec basic');

    return (
        <div className="p-4">
            <div className="text-[1.5rem]">
                [Server Component & Client Component]
            </div>
            <div className="p-2">延遲Server Component 2秒且無Suspense，進入此頁不管是從html或從rsc payload取得內容，均會延遲2秒才顯示內容．</div>
            <ClientComp1>
                <ServerComp1 />
            </ClientComp1>
        </div>
    )
}