import React from "react";

import {FormAddingElements} from "../../defaultComponents/FormAddingElements";


type NewTaskProps = {
    addTask: (toDoListId: string, newTask: string) => void
    toDoListId: string
}

export const NewTask = ({addTask, toDoListId}: NewTaskProps) => {
    return <FormAddingElements addElements={addTask} toDoListId={toDoListId}/>
}