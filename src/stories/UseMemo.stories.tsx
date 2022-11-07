import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'UseMemo demo'

}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=> {
        let tempResultA = 1
        for(let i = 1; i<=a; i++){
            let fake = 0
            while(fake < 100000000){
                fake ++
                const fakeValue = Math.random()
            }
            tempResultA= tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i<=b; i++) {
        resultB = resultB * i
    }
    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

 const UsersSecret = (props: {users: Array<string>}) => {
    return <div>{props.users.map((u, index)=> <div key={index}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Vika', 'Max', 'Andrew'])

    const newArray = useMemo(()=> {
        return users.filter(u => u.toLowerCase().indexOf('a')>-1)
    }, [users])

    const adduser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter((counter + 1))}>+</button>
        {counter}
        <button onClick={adduser}>add user</button>
        <Users users={newArray}/>
    </>
}


export const LikeUseCallBack = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Css', 'HTML', 'JS'])


    const memoizedAddBook = useCallback(() => {
            const newBooks = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter((counter + 1))}>+</button>
        {counter}

        <Books addBook={memoizedAddBook}/>
    </>
}
type BooksSecretPropsType = {

    addBook: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}
const Books = React.memo(BooksSecret)