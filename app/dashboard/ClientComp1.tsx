'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import { useTest } from '@/hooks/useTest';
import type React from 'react'

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
            <div className={`m-2 p-2 flex flex-col justify-center items-center ${styles.blogs}`}>
                <h5>[Dashboard]</h5>
                <div>{ JSON.stringify(state) }</div>
                <button className="rounded-xl p-2 bg-[#0000001d]" onClick={onClickGoto}>Blog</button>
            </div>
            { props.children }
        </>
    )
}