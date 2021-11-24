import React from "react";
import {FormAddingElements} from "./defaultComponents/FormAddingElements";
import {useDispatch} from "react-redux";
import {addToDoListAC} from "../redux/toDoList-reducer";
import {v1} from "uuid";


export const NewToDoList = React.memo(() => {

    const dispatch = useDispatch()
    const addToDoList = (newToDoListId: string, newToDoListTitle: string) => {
        dispatch(addToDoListAC(newToDoListId, newToDoListTitle))
    }
    return <div>
        <FormAddingElements addElements={addToDoList}
                            labelValue='Enter the name of the to-di list'
                            toDoListId={v1()}
        />
    </div>
})