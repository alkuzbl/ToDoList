import React from "react";
import {FormAddingElements} from "./defaultComponents/FormAddingElements";

type NewToDoListPropsType = {
    addToDoList: (newToDoListId: string, newToDoListTitle: string) => void
    newToDoListId: string
}
export const NewToDoList = ({addToDoList, newToDoListId}: NewToDoListPropsType) => {

    return <div>
        <FormAddingElements addElements={addToDoList}
                            labelValue={'Enter the name of the to-di list'}
                            toDoListId={newToDoListId}/>
    </div>
}