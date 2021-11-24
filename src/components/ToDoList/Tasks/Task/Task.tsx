import {SuperInputCheckbox} from "../../../defaultComponents/SuperInputCheckbox";
import {ChangingSpanInInput} from "../../../defaultComponents/ChangingSpanInInput";
import {SuperButton} from "../../../defaultComponents/SuperButton";
import React from "react";

export type TaskPropsType = {
    checkStatus: boolean
    callBackChangeStatus: (checkStatus: boolean, toDoListId: string, taskId: string) => void
    callBack: (newTask: string, taskId: string) => void
    callBackClick: (taskId: string) => void
    toDoListId: string
    taskId: string
    title: string
}
export const Task = (props: TaskPropsType) => {
    const {taskId, toDoListId, callBackChangeStatus, callBackClick, checkStatus, callBack, title} = props

    return <li>
        <SuperInputCheckbox checkStatus={checkStatus}
                            toDoListId={toDoListId}
                            taskId={taskId}
                            callBackChangeStatus={callBackChangeStatus}
        />
        <ChangingSpanInInput title={title}
                             taskId={taskId}
                             styleSpan={checkStatus ? 'checked' : ''}
                             callBack={callBack}/>
        <SuperButton name={'x'}
                     iconButtonDeleteMUI={true}
                     callBackClick={() => callBackClick(taskId)}/>
    </li>
}