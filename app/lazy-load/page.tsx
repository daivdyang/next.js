'use client'

import { useState } from 'react'
import Image from 'next/image';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('../../components/Hello').then((mod) => mod.Hello))

export default function Page() {
    const [show, setShow] = useState(false)
    const router = useRouter();
    console.log('exec Blogs')

    const onClickGoto = () => {
        router.push('/nextjs')
    }

    
    return (
        <div className="p-4">
            <div className="text-[1.5rem]">[Lazy Load Client Component]</div>
            <div className="text-[1.2rem] font-bold">
                此頁面為client component，測試動態載入其他client component，點擊加載後會先加載js，然後才渲染至頁面．
            </div>
            <div className={`flex flex-col justify-center items-center ${styles.blogs}`}>
                <Image className="border-4" src={`/img/test1.jpg`} alt={'img'}  width="100" height="100"></Image>
                <button className="m-2 rounded-xl p-2 bg-[#0000001d]" onClick={() => setShow((state) => !state)}>Load ClientComp</button>
                {show && <ClientComponent />}
                <button className="m-2 rounded-xl p-2 bg-[#0000001d]" onClick={onClickGoto}>Back</button>
            </div>
        </div>
    )
}