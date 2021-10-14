import React, {useState} from "react";
import {SuperInputText} from "../SuperInputText";
import {SuperButton} from "../SuperButton";

type NewTaskPropsType = {
    addTask: (title: string, toDoListId: string) => void
    toDoListId: string
}
export const NewTask = (props: NewTaskPropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
    const onChangeHandler = (value: string) => setTitle(value)
    const onKeyPressHandler = (key: string) => {
        setError(null);
        if (key === 'Enter') {
            addTask();
        }
    }
    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim(), props.toDoListId);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }
    return (
        <div>
            <SuperInputText value={title}
                            styles={error ? "error" : ""}
                            callBackOnChange={onChangeHandler}
                            callBackOnKey={onKeyPressHandler}/>
            <SuperButton callBack={addTask} name={'+'}/>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}