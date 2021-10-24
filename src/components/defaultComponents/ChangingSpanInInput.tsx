import React, {ChangeEvent, useState} from "react";
import {Input, TextField} from "@mui/material";

export type ChangingSpanInInputPropsType = {
    title: string
    taskId: string
    callBack: (newValue: string, taskId: string) => void
    styleSpan?: string
}
export const ChangingSpanInInput = ({title, callBack, taskId, styleSpan}: ChangingSpanInInputPropsType) => {
    const [replacement, setReplacement] = useState<Boolean>(false)
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onBlrHandler = () => {
        if (value.trim() !== '') {
            setReplacement(false)
            callBack(value, taskId)
        } else {
            return setReplacement(false)
        }

    }
    const onDblClickHandler = () => {
        setReplacement(true)
        setValue(title)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onBlrHandler()
    }
    return replacement ?
        <TextField id="standard-basic"
                   label="Введите сообщение"
                   value={value}
                   onBlur={onBlrHandler}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   autoFocus
                   variant="standard"/>

        : <span
            className={styleSpan}
            onDoubleClick={onDblClickHandler}>{title}</span>

}

// <input type="text"
//        value={value}
//        onBlur={onBlrHandler}
//        onChange={onChangeHandler}
//        onKeyPress={onKeyPressHandler}
//        autoFocus
// />