import React from "react";

import {SuperInputCheckbox} from "../../defaultComponents/SuperInputCheckbox";
import {SuperButton} from "../../defaultComponents/SuperButton";

import {ChangingSpanInInput} from "../../defaultComponents/ChangingSpanInInput";

type TasksPropsType = {
    tasks: Array<{ id: string, title: string, isDone: boolean }>
    toDoListId: string
    changeStatusTask: (checkStatus: boolean, toDoListId: string, taskId: string) => void
    removeTask: (toDoListId: string, taskId: string) => void
    changeTask: (newTask: string, toDoListId: string, taskId: string) => void
}

export const Tasks = ({tasks, changeStatusTask, toDoListId, removeTask, changeTask}: TasksPropsType) => {
    const removeTaskCallBack = (taskId: string) => {
        removeTask(toDoListId, taskId)
    }
    const changeTaskCallBack = (newTask: string, taskId: string) => {
        changeTask(newTask, toDoListId, taskId)
    }

    return <ul className={'tasks__list'}>
        {
            tasks.map(t => <li key={t.id}>
                <SuperInputCheckbox checkStatus={t.isDone}
                                    toDoListId={toDoListId}
                                    taskId={t.id}
                                    callBackChangeStatus={changeStatusTask}
                />
                <ChangingSpanInInput title={t.title}
                                     taskId={t.id}
                                     styleSpan={t.isDone ? 'checked' : ''}
                                     callBack={changeTaskCallBack}/>
                <SuperButton name={'x'}
                             iconButtonDeleteMUI={true}
                             callBackClick={() => removeTaskCallBack(t.id)}/></li>)
        }
    </ul>
}


