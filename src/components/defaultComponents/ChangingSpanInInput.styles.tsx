import React, {ChangeEvent, useState} from "react";
import {ChangingSpanInInput, ChangingSpanInInputPropsType} from "./ChangingSpanInInput";
import {SuperInputPropsType, SuperInputText} from "./SuperInputText";


// export default {
//     title: 'Changing span',
//     component: ChangingSpanInInput,
//     argTypes: {
//         title: 'string',
//         taskId: 'string',
//         callBack: (newValue: string, taskId: string) => {},
//             styleSpan: 'string'
//     },
// };


// const Template:React.FC<ChangingSpanInInputPropsType> = (args) => {
//     const [replacement, setReplacement] = useState<Boolean>(false)
//     const [value, setValue] = useState('')
//
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setValue(e.currentTarget.value)
//     }
//     const onBlrHandler = () => {
//         if (value.trim() === '') return
//         setReplacement(false)
//         callBack(value, taskId)
//     }
//     const onDblClickHandler = () => {
//         setReplacement(true)
//         setValue(title)
//     }
//     const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') onBlrHandler()
//     }
//     return (
//         <SuperInputText {...args} />)
// };

// export const Span = Template.bind({});
//
// Span.args = {
//
// };
