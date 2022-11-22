import React, {useState} from 'react';
import {ComponentMeta, Story} from "@storybook/react";

import {MyClock, MyClockPropsType} from "./MyClock";


export default {
    title: 'MyClock',
    component: MyClock,

} as ComponentMeta<typeof MyClock>

const Template: Story<MyClockPropsType> = (args) => <MyClock {...args} />

export const BaseExample2 = () => {
    return <MyClock />
}
