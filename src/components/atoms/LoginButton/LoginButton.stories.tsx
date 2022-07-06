import { ComponentStory,ComponentMeta } from "@storybook/react";
import LoginButton from "./LoginButton";


export default{
    title:"Atoms/LoginButton",
    component:LoginButton,
}as ComponentMeta<typeof LoginButton>;

const Template:ComponentStory<typeof LoginButton> =(args)=><LoginButton ></LoginButton>;

export const LoginButtonDemo = Template.bind({});



LoginButtonDemo.args = {
}