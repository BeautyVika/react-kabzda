import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,

} as ComponentMeta<typeof UncontrolledAccordion>;

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

const callback = action('accordion change event fired')

export const MenuCollapsedMode = () => <UncontrolledAccordion titleValue={'Menu'} onChange={callback} />
export const UsersUnCollapsedMode = () => <UncontrolledAccordion titleValue={'Users'} onChange={callback}/>
