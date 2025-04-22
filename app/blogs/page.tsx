'use client'

import { useState, Suspense } from 'react'
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
        router.push('/dashboard')
    }

    
    return (
        <>
            <div className={`flex justify-center ${styles.blogs}`}>
                <h5>This is blogs page</h5>
                <Image className="border-4" src={`/img/test1.jpg`} alt={'img'}  width="64" height="64"></Image>
                <button onClick={onClickGoto}>go to dashboard</button>
                <button onClick={() => setShow((state) => !state)}>Load ClientComp</button>
                {show && <ClientComponent />}
            </div>
        </>
    )
}