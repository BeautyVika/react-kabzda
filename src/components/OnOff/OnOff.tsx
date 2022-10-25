import React, {} from 'react';

type OnOffType = {
    switchOn: boolean
    onChange: (switchOn: boolean) => void
}
export const OnOff = (props: OnOffType) => {

    const onStyle ={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.switchOn ? 'green' : 'white'
    }
    const offStyle ={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.switchOn ? 'white' : 'red'
    }
    const indicatorStyle ={
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.switchOn ? 'green' : 'red'
    }

    return <div>
        <div style={onStyle} onClick={()=> props.onChange(true)}>On</div>
        <div style={offStyle} onClick={()=> props.onChange(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}
