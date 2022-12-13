import React from "react";
import {ClockViewPropsType, get2digitsString} from "./Clock";

export const DigitalClockView: React.FC <ClockViewPropsType> = ({date}) => {
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}