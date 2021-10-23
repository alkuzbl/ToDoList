import React, {ChangeEvent} from "react";

export type SuperInputPropsType = {
    callBackOnChange: (newValue: string)=> void
    callBackOnKey: (keyValue: string) => void
    newValue: string
    styleInput: string
}
export const SuperInputText = ({callBackOnChange, newValue, callBackOnKey, styleInput}:SuperInputPropsType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        callBackOnChange(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        callBackOnKey(e.key)
    }
    return <input onChange={onChangeHandler}
                  className={styleInput}
                  value={newValue}
                  onKeyPress={onKeyPressHandler}/>
}