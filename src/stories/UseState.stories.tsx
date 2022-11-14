import React, {useState} from 'react';

export default {
    title: 'useState demo'
}

function dificultCounting (){
    let tempResultA = 1
    let a = 10
    for(let i = 1; i<=a; i++){
        let fake = 0
        while(fake < 1000){
            fake ++
            const fakeValue = Math.random()
        }
        tempResultA= tempResultA * i
    }
    return tempResultA
}
export const Example1 = () => {
    const [counter, setCounter] = useState(dificultCounting)

    const changer = (state: number) => {
        return state + 1
    }
    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}