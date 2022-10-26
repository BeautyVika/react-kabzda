import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'


export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}
type ItemType = {
    title: string
    value: any
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const toggleItems = () => setActive(!active)

    const selectedItems = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
            for(let i=0; i<props.items.length; i++) {
                if(props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i+1] : props.items[i-1]
                    if (pretendentElement ) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if(!selectedItems) {
                props.onChange(props.items[0].value)
            }
        }

        if(e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }
    }

    return (
        <div>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItems && selectedItems.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map(i => <div key={i.value}
                                                   onMouseEnter={()=> setHoveredElementValue(i.value)}
                                                   onClick={()=>onItemClick(i.value)}
                                                   className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}>
                            {i.title}
                        </div>)}
                    </div>}
            </div>

        </div>
    )
}