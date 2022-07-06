import React from "react";
import ExploreDropDownComponent from "./ExploreDropDownComponent";
import { ComponentMeta,ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router";

export default{
  title:'Organisms/ExploreDropDownComponent',
  component:ExploreDropDownComponent

} as ComponentMeta<typeof ExploreDropDownComponent>;

const Template:ComponentStory<typeof ExploreDropDownComponent>=()=>(<MemoryRouter><ExploreDropDownComponent></ExploreDropDownComponent></MemoryRouter>);

export const ExploreDropDownComponentDemo = Template.bind({});
ExploreDropDownComponentDemo.args={};



