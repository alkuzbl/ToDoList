import React from "react";
import {TasksDataType} from "../../App";
import {Button} from "../form/Button";
import {SuperInputCheckBox} from "../form/SuperInputCheckBox";

type TasksPropsType = {
    tasks: Array<TasksDataType>
    removeTask: (taskId: string) => void
    onCheckedTask: (status: boolean, taskId: string) => void
}

export const Tasks: React.FC<TasksPropsType> = ({tasks, removeTask, onCheckedTask}) => {

    const callBackOnCheckedTask = (status: boolean, taskId: string) => onCheckedTask(status, taskId)
    const callBackRemoveTask = (taskId: string) => removeTask(taskId)

    const stylesItem = 'item__completed'

    return (
        <ul className={'todoList'}>
            {
                tasks.map(t => <li key={t.id} className={t.isDone ? stylesItem : ''}>
                        <SuperInputCheckBox
                            checked={t.isDone}
                            callBackOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                callBackOnCheckedTask(e.currentTarget.checked, t.id)}
                        />
                        {t.task}
                        <Button title={'x'} callBack={() => callBackRemoveTask(t.id)}/>
                    </li>
                )
            }
        </ul>

    )
}