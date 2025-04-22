'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import { useTest } from '@/hooks/useTest';
import type React from 'react'
import { SubClientComp1 } from './ClientComp1Child';
import { ServerComp2 } from './ServerComp2'

export function ClientComp1(props: React.PropsWithChildren<{ key?: string }>) {
  console.log('exec ClientComp1');

    const router = useRouter();
    const { state } = useTest()
    const onClickGoto = () => {
        router.push(`/blogs?name=${encodeURIComponent('abc過字edf')}`)
    }

    useEffect(() => {
        console.log('exec ClientComp1 effect')
        return () => {
            console.log('umount ClientComp1', state);
        }
    }, [state])
    return (
        <>
            <div className={`flex flex-col justify-center ${styles.blogs}`}>
                <h5>This is Profile page</h5>
                <div>{ `name:${state?.name}` }</div>
                <div>{ `age:${state?.age}` }</div>
                <button className="rounded-xl p-2 bg-[#0000001d]" onClick={onClickGoto}>go to blogs</button>
                <SubClientComp1 />
                <ServerComp2 key="test123" />
            </div>
            { props.children }
        </>
    )
}