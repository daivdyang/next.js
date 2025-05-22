'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import { useTest } from '@/hooks/useTest';
import type React from 'react'
import { SubClientComp1 } from './ClientComp1Child';

export function ClientComp1(props: React.PropsWithChildren<{ key?: string, child2?: React.ReactNode }>) {
  console.log('exec ClientComp1');

    const router = useRouter();
    const { state, addCount } = useTest()
    const onClickGoto = () => {
        router.push('/nextjs')
    }

    useEffect(() => {
        console.log('exec ClientComp1 effect')
        return () => {
            console.log('umount ClientComp1', state);
        }
    }, [state])
    return (
        <>
            <div className={`m-2 flex flex-col gap-4 justify-center ${styles.blogs} border-4`}>
                <h5>[Client Component]</h5>
                <div>{ `name:${state?.name}` }</div>
                <div>{ `count:${state?.count}` }</div>
                <button className="rounded-xl p-2 bg-[#0000001d]" onClick={addCount}>Count+1</button>
                <button className="rounded-xl p-2 bg-[#0000001d]" onClick={onClickGoto}>Back</button>
                <SubClientComp1 />
                { props.child2 }
            </div>
            { props.children }
        </>
    )
}