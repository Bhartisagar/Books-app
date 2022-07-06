import React from "react";
import Cards from ".";
import { ComponentMeta,ComponentStory } from "@storybook/react";

export default{
    title:'Molecules/BookCard',
    component:Cards
} as ComponentMeta<typeof Cards>;

const Template:ComponentStory<typeof Cards>=args=>(
    <Cards {...args}/>
)

export const DemoCard = Template.bind({})

DemoCard.args={
    bookData:{
        "id": 1,
        "imgSrc": "card1.jpg",
        "imgAlt": "Bring Your Human to Work",
        "name": "Bring Your Human to Work",
        "author": "Erica Keswin",
        "readTime": "13-minute read",
        "readCount": "19.1k reads",
        "state": "CR",
        "category": "",
        "audio": true,
        "justAdded": false,
        "isTrending": false
    },
    btnText:'Finished'

};
