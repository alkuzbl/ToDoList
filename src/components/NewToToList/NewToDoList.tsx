import React from "react";

import {NewTask} from "../NewTask/NewTask";

type NewToDoListPropsType = {
    addToDoList: (title: string, toDoListId: string)=> void
    toDoListId: string
}


export const NewToDoList = ({addToDoList,toDoListId}:NewToDoListPropsType)=>{

    return <div>
        <h3>Add a new task list </h3>
        <NewTask addTask={addToDoList} toDoListId={toDoListId}/>
    </div>
}