import React from "react";
import {Task} from "./Task/Task";

type TasksPropsType = {
    tasks: Array<{ id: string, title: string, isDone: boolean }>
    toDoListId: string
    changeStatusTask: (checkStatus: boolean, toDoListId: string, taskId: string) => void
    removeTask: (toDoListId: string, taskId: string) => void
    changeTask: (newTask: string, toDoListId: string, taskId: string) => void
}

export const Tasks = React.memo((props: TasksPropsType) => {

    const {tasks, changeStatusTask, toDoListId, removeTask, changeTask} = props

    const removeTaskCallBack = (taskId: string) => {
        removeTask(toDoListId, taskId)
    }
    const changeTaskCallBack = (newTask: string, taskId: string) => {
        changeTask(newTask, toDoListId, taskId)
    }

    return <ul className={'tasks__list'}>
        {
            tasks.map(t => <Task checkStatus={t.isDone}
                                 toDoListId={toDoListId}
                                 taskId={t.id}
                                 callBackChangeStatus={changeStatusTask}
                                 title={t.title}
                                 callBack={changeTaskCallBack}
                                 callBackClick={() => removeTaskCallBack(t.id)}/>
            )
        }
    </ul>
})


