import React from "react";

// @ts-ignore
import {ComponentMeta, ComponentStory} from "@storybook/react/dist/ts3.9/client";
import {SuperButton, SuperButtonType} from "./SuperButton";


export default {
    title: 'Example/SuperButton',
    component: SuperButton,
    argTypes: {
        disabledButton: {action: true},
        styleButton: {action: true},
        iconButtonDeleteMUI: {action: true},
        callBackClick: {
            action: () => {
                alert('af')
            }
        },
    },

} as ComponentMeta<SuperButtonType>;


const Template: ComponentStory<SuperButtonType> = (args: JSX.IntrinsicAttributes & SuperButtonType) =>
    <SuperButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    name: 'Primary Button',
};