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
            <div className={`flex justify-center ${styles.blogs}`}>
                <h5>This is dashboard page</h5>
                <div>{ JSON.stringify(state) }</div>
                <button onClick={onClickGoto}>go to blogs</button>
            </div>
            { props.children }
        </>
    )
}