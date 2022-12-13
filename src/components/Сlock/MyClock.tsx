import React, {useEffect, useState} from 'react';
import s from './MyClock.module.css'
export type MyClockPropsType = {

}

export const MyClock: React.FC<MyClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className={s.clock}>
            <div className={s.hours}>
                <div className={s.hour}
                     style={{transform: `rotateZ(${(date.getHours() * 30) + ((date.getMinutes() * 6) / 12)}deg)`}}>
                </div>
            </div>

            <div className={s.minutes}>
                <div className={s.minute}
                     style={{transform: `rotateZ(${date.getMinutes() * 6}deg)`}}>

                </div>
            </div>

            <div className={s.seconds}>
                <div className={s.second}
                     style={{transform: `rotateZ(${date.getSeconds() * 6}deg)`}}>
                </div>
            </div>

        </div>
    )
}