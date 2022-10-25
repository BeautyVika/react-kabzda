import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,

} as ComponentMeta<typeof UncontrolledRating>;

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;
const callback = action('rating changed inside component')
export const EmptyStars = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>

