import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,

} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

const callback = action('on or off clicked')

export const OnMode = () => <OnOff switchOn={true} onChange={callback} />
export const OffMode = () => <OnOff switchOn={false} onChange={callback} />

export  const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff switchOn={value} onChange={setValue} />

}
