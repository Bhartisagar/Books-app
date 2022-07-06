import React from "react";
import AppBars from "./AppBars";
import { ComponentStory,ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router";

export default{
    title:'Organisms/AppBarHeader',
    component:AppBars
} as ComponentMeta <typeof AppBars>

const Template:ComponentStory<typeof AppBars>=()=>(<MemoryRouter><AppBars></AppBars></MemoryRouter>);

export const AppBarHeaderDemo = Template.bind({});

AppBarHeaderDemo.args={};