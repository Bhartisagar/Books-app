import React from "react";
import ImageDisplay from "./ImageDisplay";
import { ComponentStory,ComponentMeta } from "@storybook/react";


export default{
    title:"Atoms/ImageDisplay",
    component:ImageDisplay,
}as ComponentMeta<typeof ImageDisplay>;

const Template:ComponentStory<typeof ImageDisplay> =(args)=><ImageDisplay {...args}></ImageDisplay>;

export const CardImageDisplayComponent = Template.bind({});



CardImageDisplayComponent.args = {
   path:"card1.jpg",
   alt:'Bring Human to Work bookcard',
   height:350,
   width:300

   
};

   
