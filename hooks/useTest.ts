import { useState, useEffect } from "react"

export const useTest = () => {
    const [state, setState] = useState<{ name: string, age: number, likes: { habit: string, id: number }[]}>();
    console.log('render useTest', state?.name);

    useEffect(() => {
        if (state) return
        console.log('first exec useTest effect');
        setState({ name: 'qoo', age: 123, likes: [{ habit: 'qq', id: 1 }] });

        return () => {
            console.log('clean up', state)
        }
    }, [state])

    useEffect(() => {
        console.log('state.name changed', state?.name);
    }, [state?.name]);

    return {
        state 
    }
}