import React, {useState} from 'react';
import { ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

const GetCategoryObj = (categoryName: 'Color' | 'Main' | 'Event') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'component/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')}
    }

} as ComponentMeta<typeof Accordion>;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />; //это функция

const callback = action('accordion change event fired')

const callbacksProps = {
    onChange: callback,
    onClick: callback
}

export const MenuCollapsedMode = Template.bind({}) //создаем копию
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue:'Menu',
    collapsed: true,
    items: []
}
export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callbacksProps,
    titleValue:'Users',
    collapsed: false,
    items: [{title: 'Dimych', value: 1}, {title: 'Valera', value: 2},
        {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}]
}

export  const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false)

    return <Accordion {...args} collapsed={value} onChange={()=>setValue(!value)}
                      onClick={(value)=> alert(`user with ID ${value} should be happy`)}/>
}
ModeChanging.args = {
    titleValue: 'Users',
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}]
}
