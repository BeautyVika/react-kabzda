import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,

} as ComponentMeta<typeof UncontrolledOnOff>;

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback} />
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback} />
