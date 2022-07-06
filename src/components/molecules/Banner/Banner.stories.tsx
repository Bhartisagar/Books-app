import React from "react";
import Banner from "./Banner";
import { ComponentMeta,ComponentStory } from "@storybook/react";

export default{
  title:'Molecules/Banner',
  component:Banner

} as ComponentMeta<typeof Banner>;

const Template:ComponentStory<typeof Banner>=()=>(<Banner></Banner>);

export const BannerDemo = Template.bind({});
BannerDemo.args={};



