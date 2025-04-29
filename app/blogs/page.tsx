'use client'

import { useState } from 'react'
import Image from 'next/image';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('../../components/Hello').then((mod) => mod.Hello))

export default function Blogs() {
    const [show, setShow] = useState(false)
    const router = useRouter();
    console.log('exec Blogs')

    const onClickGoto = () => {
        router.push('/')
    }

    
    return (
        <>
            <div className={`flex flex-col justify-center items-center ${styles.blogs}`}>
                <h5>[Blog]</h5>
                <Image className="border-4" src={`/img/test1.jpg`} alt={'img'}  width="100" height="100"></Image>
                <button className="m-2 rounded-xl p-2 bg-[#0000001d]" onClick={() => setShow((state) => !state)}>Load ClientComp</button>
                {show && <ClientComponent />}
                <button className="m-2 rounded-xl p-2 bg-[#0000001d]" onClick={onClickGoto}>Home</button>
            </div>
        </>
    )
}