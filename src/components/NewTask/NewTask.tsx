import React, {useState} from "react";
import {SuperInputText} from "../form/SuperInputText";
import {Button} from "../form/Button";

type NewTaskPropsType = {
    addNewTask: (newTaskValue: string) => void
}

export const NewTask: React.FC<NewTaskPropsType> = ({addNewTask}) => {
    let [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('')
        setInputValue(e.currentTarget.value)
    }
    const callBackAddTask = () => {
        if (inputValue.trim() === '') return setError('This field is required')
        addNewTask(inputValue)
        setInputValue('')
    }
    const callBackOnKey = (key: string) => {
        if (key === 'Enter') callBackAddTask()
    }


    return (
        <div>
            <SuperInputText callBackOnChange={onChangeValue}
                            callBackOnKeyPress={callBackOnKey}
                            styleInput={error && 'error'}
                            placeholderValue={error && error}
                            value={inputValue}/>
            <Button title={'+'}
                    callBack={callBackAddTask}
                    disabledBtn={!!error}/>
        </div>
    )
}