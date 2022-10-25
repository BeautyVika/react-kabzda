import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Rating, {RatingValueType} from "./Rating";


export default {
    title: 'Rating stories',
    component: Rating,

} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStars = () => <Rating value={0} onClick={()=>{}} />
export const Rating1 = () => <Rating value={1} onClick={()=>{}} />
export const Rating2 = () => <Rating value={2} onClick={()=>{}} />
export const Rating3 = () => <Rating value={3} onClick={()=>{}} />
export const Rating4 = () => <Rating value={4} onClick={()=>{}} />
export const Rating5 = () => <Rating value={5} onClick={()=>{}} />

export  const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={setRating} />

}
