import React, {useState} from "react";
import {SuperInputText} from "./SuperInputText";
import {SuperButton} from "./SuperButton";


type FormAddingElementsPropsType = {
    addElements: (toDoListId: string, newToDoListTitle: string)=>void
    toDoListId: string
    labelValue?: string
}


export const FormAddingElements = ({addElements, toDoListId, labelValue}:FormAddingElementsPropsType) => {
    const [error, setError] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const onChangeValue = (newValue: string) => {
        setError('')
        setValue(newValue)
    }
    const callBackAddElements = () => {
        if (value.trim() === '') return setError('Title is required')
        addElements(toDoListId, value.trim())
        setValue('')
    }
    const onKeyAddElements = (keyValue: string)=>{
        if (keyValue === 'Enter') callBackAddElements()
    }
    const styleInput = error ? 'error' : ''

    return <div>
        <SuperInputText callBackOnChange={onChangeValue}
                        newValue={value}
                        styleInput={styleInput}
                        labelValue={labelValue}
                        error={error}
                        callBackOnKey={onKeyAddElements}/>
        <SuperButton name={'+'}
                     iconButtonDeleteMUI={false}
                     callBackClick={callBackAddElements}
                     disabledButton={!!error}/>
        <span  className={'formAddingElements__span'}>{error}</span>
    </div>
}