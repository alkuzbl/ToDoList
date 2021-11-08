import React, {ChangeEvent} from "react";
import {TextField} from "@mui/material";

export type SuperInputPropsType = {
    callBackOnChange: (newValue: string) => void
    callBackOnKey: (keyValue: string) => void
    newValue: string
    styleInput: string
    labelValue?: string
    error?: string
}
export const SuperInputText = ({
                                   callBackOnChange,
                                   newValue,
                                   callBackOnKey,
                                   styleInput,
                                   labelValue,
                                   error
                               }: SuperInputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBackOnChange(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        callBackOnKey(e.key)
    }

    return <TextField
        error={!!error}
        id="standard-basic"
        label={labelValue}
        variant="outlined"
        onChange={onChangeHandler}
        className={styleInput}
        value={newValue}
        onKeyPress={onKeyPressHandler}/>
}
// <input onChange={onChangeHandler}
//        className={styleInput}
//        value={newValue}
//        onKeyPress={onKeyPressHandler}/>
