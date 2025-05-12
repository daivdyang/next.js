import { useState, useEffect } from "react"

type TestType = { name: string, count: number }

export const useTest = () => {
    const [state, setState] = useState<TestType>();
    console.log('render useTest', state?.name);

    useEffect(() => {
        if (state) return
        console.log('first exec useTest effect');
        setState({ name: 'qoo',count: 1 });

        return () => {
            console.log('clean up', state)
        }
    }, [state])

    function addCount() {
        setState((state) => {
            const s = state as TestType
            return { ...s, count: s.count + 1 }
        })
    }
    return {
        state,
        addCount,
    }
}