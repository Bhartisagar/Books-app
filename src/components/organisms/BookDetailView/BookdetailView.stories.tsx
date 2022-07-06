import React from "react";
import BookdetailView from "./BookdetailView";
import { MemoryRouter } from "react-router";
import { ComponentStory,ComponentMeta } from "@storybook/react";

export default{
    title:'Organisms/BookDetailViewCompo',
    component:BookdetailView

} as ComponentMeta<typeof BookdetailView>

const Template:ComponentStory<typeof BookdetailView>=(args)=>(
<MemoryRouter><BookdetailView {...args}/></MemoryRouter>)

export const BookDetailPageDemo = Template.bind({});

BookDetailPageDemo.args={
    id:2
};