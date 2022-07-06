import { ComponentStory,ComponentMeta } from "@storybook/react";
import LogoutButton from "./LogoutButton";

export default{
    title:"Atoms/LogoutButton",
    component:LogoutButton,
}as ComponentMeta<typeof LogoutButton>;

const Template:ComponentStory<typeof LogoutButton> =(args)=><LogoutButton ></LogoutButton>;

export const LogoutButtonDemo = Template.bind({});

LogoutButtonDemo.args = {
}