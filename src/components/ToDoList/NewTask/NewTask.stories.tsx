import React from "react";



// @ts-ignore
import {ComponentMeta, ComponentStory} from "@storybook/react/dist/ts3.9/client";
import {NewTask, NewTaskProps} from "./NewTask";


export default {
    title: 'Example/New Task',
    component: NewTask,
    argTypes: {
        addTask: {
            action: () => {
            }
        },
    },

} as ComponentMeta<NewTaskProps>;


const Template: ComponentStory<NewTaskProps> = (args: JSX.IntrinsicAttributes & NewTaskProps) => <NewTask {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    name: 'Test Label',
};