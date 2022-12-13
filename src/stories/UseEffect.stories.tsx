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
    }, [counter])

    return <>
        Hello, {counter}
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
    }, [counter])


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetInterval Example')

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])


    return <>
        Hello, {counter}
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
    }, [])


    return <>
        Hello, {clock}
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered with ' + counter)

    useEffect(() => {
        console.log('Effect occurred with ' + counter)

        return () => {
            console.log('RESET Effect with ' + counter)
        }
    }, [counter])

    const onIncrease = () => setCounter(counter + 1)

    return <>
        Hello, {counter}
        <button onClick={onIncrease}>+</button>
    </>
}

export const KeyTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.code)
            setText(state => state + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}