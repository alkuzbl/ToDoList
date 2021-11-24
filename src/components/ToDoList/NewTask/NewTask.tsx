import React from "react";

import {FormAddingElements} from "../../defaultComponents/FormAddingElements";


export type NewTaskProps = {
    addTask: (toDoListId: string, newTask: string) => void
    toDoListId: string
}

export const NewTask = React.memo(({addTask, toDoListId}: NewTaskProps) => {
    return <FormAddingElements addElements={addTask} toDoListId={toDoListId} labelValue={'Enter the task'}/>
})