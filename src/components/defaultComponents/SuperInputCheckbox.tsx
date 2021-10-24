import React, {ChangeEvent} from "react";
import {Checkbox} from "@mui/material";

type SuperInputCheckboxPropsType = {
    checkStatus: boolean
    toDoListId: string
    taskId: string
    callBackChangeStatus: (checkStatus: boolean, toDoListId: string, taskId: string) => void
}
export const SuperInputCheckbox = ({
                                       checkStatus,
                                       callBackChangeStatus,
                                       toDoListId,
                                       taskId
                                   }: SuperInputCheckboxPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBackChangeStatus(e.currentTarget.checked, toDoListId, taskId)
    }
    return <Checkbox  defaultChecked checked={checkStatus} onChange={onChangeHandler} size={'small'}/>

}
//<input type="checkbox" checked={checkStatus} onChange={onChangeHandler}/>