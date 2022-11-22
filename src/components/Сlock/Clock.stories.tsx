import React, {useState} from 'react';
import {ComponentMeta, Story} from "@storybook/react";
import {Clock, ClockPropsType} from "./Clock";


export default {
    title: 'Clock',
    component: Clock,

} as ComponentMeta<typeof Clock>

const Template: Story<ClockPropsType> = (args) => <Clock {...args} />

export const BaseExample = () => {
    return <Clock />
}