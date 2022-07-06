import React from "react";
import SeacrhBar from "./SeacrhBar";
import { ComponentMeta,ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router";

export default{
    title:'organisms/EntrepreneurshipBooks',
    component:SeacrhBar
}as ComponentMeta<typeof SeacrhBar>

const Template:ComponentStory<typeof SeacrhBar>=()=>(
     <MemoryRouter>
       <SeacrhBar/>
    </MemoryRouter>
)
export const EntrepreneurshipBooksDemo = Template.bind({})

EntrepreneurshipBooksDemo.args={}