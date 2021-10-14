import {SuperInputCheckBox} from "../SuperInputCheckBox";
import {SuperButton} from "../SuperButton";
import React from "react";
import {TaskType} from "../../App";

type TasksPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string, toDoListId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, toDoListId: string) => void
    toDoListId: string
}
export const Tasks = ({tasks, removeTask, changeTaskStatus, toDoListId}: TasksPropsType) => {

    return (
        <ul>
            {
                tasks.map(t => {
                        const onClickHandler = () => removeTask(t.id, toDoListId)
                        const onChangeHandler = (checkStatus: boolean) => {
                            changeTaskStatus(t.id, checkStatus, toDoListId);
                        }

                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <SuperInputCheckBox
                                callBackOnChange={onChangeHandler}
                                checkStatus={t.isDone}/>
                            <span>{t.title}</span>
                            <SuperButton callBack={onClickHandler}
                                         name={'x'}/>
                        </li>
                    }
                )
            }
        </ul>
    )
}