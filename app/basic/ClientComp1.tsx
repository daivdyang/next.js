'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTest } from '@/hooks/useTest';
import type React from 'react'

export function ClientComp1(props: React.PropsWithChildren<{ key?: string }>) {
  console.log('exec ClientComp1');

    const router = useRouter();
    const { state, addCount } = useTest()
    const onClickGoto = () => {
        router.push(`/`)
    }

    useEffect(() => {
        console.log('exec ClientComp1 effect')
        return () => {
            console.log('umount ClientComp1', state);
        }
    }, [state])
    return (
        <div className="flex">
            <div className={`m-2 p-2 flex flex-col gap-4 justify-center items-center border-4`}>
                <h5>[Client Component]</h5>
                <div>{ `Name:${state?.name}` }</div>
                <div>{ `Count:${state?.count}` }</div>
                <button className="rounded-xl p-2 bg-[#0000001d]" onClick={addCount}>Count+1</button>
                <button className="rounded-xl p-2 bg-[#0000001d]" onClick={onClickGoto}>Home</button>
            </div>
            { props.children }
        </div>
    )
}