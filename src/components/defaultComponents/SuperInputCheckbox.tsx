import React, {ChangeEvent} from "react";
import {Checkbox} from "@mui/material";

type SuperInputCheckboxPropsType = {
    checkStatus: boolean
    toDoListId: string
    taskId: string
    callBackChangeStatus: (checkStatus: boolean, toDoListId: string, taskId: string) => void
}
export const SuperInputCheckbox = React.memo(({
                                                  checkStatus,
                                                  callBackChangeStatus,
                                                  toDoListId,
                                                  taskId
                                              }: SuperInputCheckboxPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBackChangeStatus(e.currentTarget.checked, toDoListId, taskId)
    }
    return <Checkbox checked={checkStatus} onChange={onChangeHandler} size={'small'}/>

})
