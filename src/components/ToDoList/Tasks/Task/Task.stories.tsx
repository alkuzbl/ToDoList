import React from "react";

import {Task, TaskPropsType} from './Task';

// @ts-ignore
import {ComponentMeta, ComponentStory} from "@storybook/react/dist/ts3.9/client";


export default {
    title: 'Example/Task',
    component: Task,
    argTypes: {
        callBackChangeStatus: {
            action: () => {
            }
        },
        callBack: {
            action: () => {
            }
        },
        callBackClick: {
            action: () => {
            }
        }
    },

} as ComponentMeta<TaskPropsType>;


const Template: ComponentStory<TaskPropsType> = (args: JSX.IntrinsicAttributes & TaskPropsType) => {
    return <>
        <Task {...args}  />
        <Task {...args} checkStatus={true} />
    </>
};

export const Primary = Template.bind({});

Primary.args = {
    toDoListId: '1',
    taskId: '1',
    title: 'Test label',
};

