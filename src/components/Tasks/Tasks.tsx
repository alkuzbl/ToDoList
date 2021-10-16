import {SuperInputCheckBox} from "../SuperInputCheckBox";
import {SuperButton} from "../SuperButton";
import React from "react";
import {TaskType} from "../../App";
import {ChangingSpanInInput} from "../ChangingSpanInInput";

type TasksPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string, toDoListId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, toDoListId: string) => void
    toDoListId: string
    changeTaskText: (taskId: string, toDoListId: string, newValue: string) => void
}
export const Tasks = ({tasks, removeTask, changeTaskStatus, toDoListId, changeTaskText}: TasksPropsType) => {

    const updateTaskText = (taskId: string, newValue: string) => {
        changeTaskText(taskId, toDoListId, newValue)
    }
    // const onClickHandler = (taskId: string) => removeTask(taskId, toDoListId)
    // const onChangeHandler = (checkStatus: boolean, taskId: string) => {
    //     changeTaskStatus(taskId, checkStatus, toDoListId);
    // }

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
                                callBackOnChange={()=>onChangeHandler}
                                checkStatus={t.isDone}/>
                            <ChangingSpanInInput title={t.title}
                                                 callBack={(newValue) => updateTaskText(t.id, newValue)}
                            />
                            <SuperButton callBack={onClickHandler}
                                         name={'x'}/>
                        </li>
                    }
                )
            }
        </ul>
    )
}

