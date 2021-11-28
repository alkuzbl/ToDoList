import React from "react";


// @ts-ignore
import {ComponentMeta, ComponentStory} from "@storybook/react/dist/ts3.9/client";
import {TaskPropsType} from "./components/ToDoList/Tasks/Task/Task";
import App from "./App";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";


export default {
    title: 'Example/App todolist',
    component: App,
    decorators: [ReduxStoreProviderDecorator]

} as ComponentMeta<TaskPropsType>;


const Template: ComponentStory<TaskPropsType> = (args: JSX.IntrinsicAttributes) => <App />

export const Primary = Template.bind({});

Primary.args = {

};

