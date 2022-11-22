import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Simple example')

    useEffect(() => {
        console.log('UseEffect')
        document.title = counter.toString()
    },[counter])

    return <>
        Hello,  {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetTimeout Example')

    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    },[counter])


    return <>
        Hello,  {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetInterval Example')

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    },[])


    return <>
        Hello,  {counter}
    </>
}

export const ClockExample = () => {

    const [clock, setClock] = useState(Date.now().toString())


    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Clock')
            setClock(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    },[])


    return <>
        Hello,  {clock}
    </>
}