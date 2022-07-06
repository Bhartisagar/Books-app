import { MyTabs } from "./tabs";
import { ComponentStory,ComponentMeta } from "@storybook/react";

export default{
    title:'Organisms/Tabs',
    component:MyTabs
} as ComponentMeta<typeof MyTabs>

const Template:ComponentStory<typeof MyTabs>=()=>(<MyTabs></MyTabs>);

export const tabsDemo = Template.bind({});

tabsDemo.args={};
