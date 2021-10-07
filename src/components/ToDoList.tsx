import React from "react";
import {Tasks} from "./Tasks/Tasks";
import {NewTask} from "./NewTask/NewTask";
import {FilterButtons} from "./FilterButtons/FilterButtons";
import {FilterButtonsDataType, TasksDataType} from "../App";

type ToDoListPropsType = {
    tasks: Array<TasksDataType>
    filterButton: Array<FilterButtonsDataType>
    addNewTask: (newTaskValue: string) => void
    removeTask: (taskId: string) => void
    onCheckedTask: (status: boolean, taskId: string) => void
    setFilter: (taskName: string) => void
    filter: string
}

export const ToDoList: React.FC<ToDoListPropsType> = ({
                                                          tasks,
                                                          filterButton,
                                                          addNewTask,
                                                          removeTask,
                                                          onCheckedTask,
                                                          setFilter,
    filter
                                                      }) => {

    return (
        <div>
            <h3>What to learn</h3>

            <NewTask addNewTask={addNewTask}/>

            <Tasks tasks={tasks}
                   onCheckedTask={onCheckedTask}
                   removeTask={removeTask}/>

            <FilterButtons filterButton={filterButton}
                           filter={filter}
                           setFilter={setFilter}/>

        </div>
    )
}