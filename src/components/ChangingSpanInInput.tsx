import React, {ChangeEvent, useState} from "react";


type ChangingSpanInInputPropsType = {
    title: string
    callBack: (newValue: string) => void
}
export const ChangingSpanInInput = ({title, callBack}: ChangingSpanInInputPropsType) => {
    const [replacement, setReplacement] = useState<Boolean>(false)
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onBlrHandler = () => {
        setReplacement(false)
        callBack(value)
    }
    const onDblClickHandler = () => {
        setReplacement(true)
        setValue(title)
    }
    return replacement ?
        <input type="text"
               value={value}
               onBlur={onBlrHandler}
               onChange={onChangeHandler}
               autoFocus/>
        : <span onDoubleClick={onDblClickHandler}>{title}</span>
}