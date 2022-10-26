import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";
import { AccordionPropsType} from "../Accordion/Accordion";



export default {
    title: 'component/Select',
    component: Select,

} as ComponentMeta<typeof Select>;

const Template: Story<SelectPropsType> = (args) => <Select {...args} />

const callback = action('Value changed')

const callbacksProps = {
    onChange: callback,
}

export const WithValue = Template.bind({})
WithValue.args = {
    ...callbacksProps,
    value: 2,
    items: [{value: 1, title: 'Minsk'},{value: 2, title: 'Moscow'},{value: 3, title: 'Barselona'}]
}

export const WithValueChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<any>(2)

    return <Select {...args} value={value}
                   items={[{value: 1, title: 'Minsk'}, {value: 2, title: 'Moscow'}, {value: 3, title: 'Barselona'}]}
                   onChange={setValue}/>
}

export const WithoutValue = Template.bind({})
WithoutValue.args = {
    ...callbacksProps,
    items: [{value: 1, title: 'Minsk'},{value: 2, title: 'Moscow'},{value: 3, title: 'Barselona'}]
}

export const WithoutValueChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<any>(null)

    return <Select {...args} value={value}
                   items={[{value: 1, title: 'Minsk'}, {value: 2, title: 'Moscow'}, {value: 3, title: 'Barselona'}]}
                   onChange={setValue}/>
}

// export default {
//     title: 'Select',
//     component: Select,
//
// } as ComponentMeta<typeof Select>;
//
// const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
//
// export const WithValue = () => <Select value={'2'} onChange={action('Value changed')}
//                 items={[
//                     {value: 1, title: 'Minsk'},
//                     {value: 2, title: 'Moscow'},
//                     {value: 3, title: 'Barselona'}
//                 ]}/>
//
//
// export const WithoutValue = () => <Select onChange={action('Value changed')}
//                                           items={[
//                                               {value: 1, title: 'Minsk'},
//                                               {value: 2, title: 'Moscow'},
//                                               {value: 3, title: 'Barselona'}
//                                           ]}/>