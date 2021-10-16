import React from "react";
import {FormAddingElements} from "./defaultComponents/FormAddingElements";

type NewToDoListPropsType = {
    addToDoList: (newToDoListId: string, newToDoListTitle: string) => void
    newToDoListId: string
}
export const NewToDoList = ({addToDoList, newToDoListId}: NewToDoListPropsType) => {

    return <div>
        <span>Add a new task list</span>
        <FormAddingElements addElements={addToDoList}
                            toDoListId={newToDoListId}/>
    </div>
}