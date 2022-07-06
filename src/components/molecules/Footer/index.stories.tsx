import React from "react";
import FooterComp from ".";
import { ComponentMeta,ComponentStory } from "@storybook/react";

export default{
  title:'Molecules/FooterCompo',
  component:FooterComp

} as ComponentMeta<typeof FooterComp>;

const Template:ComponentStory<typeof FooterComp>=()=>(<FooterComp></FooterComp>);

export const FooterComponent = Template.bind({});
FooterComponent.args={};



