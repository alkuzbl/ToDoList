import React from "react";
import {NewTask} from "./NewTask/NewTask";
import {Tasks} from "./Tasks/Tasks";
import {FilterButtons} from "./FilterButtons/FilterButtons";
import {FilterButtonType, TaskType} from "../../App";
import {SuperButton} from "../defaultComponents/SuperButton";
import {ChangingSpanInInput} from "../defaultComponents/ChangingSpanInInput";


type ToDoListPropsType = {
    addTask: (toDoListId: string, newTask: string) => void
    toDoListId: string
    filterName: string
    toDoListTitle: string
    removeToDoList: (toDoListId: string) => void
    removeTask: (toDoListId: string, taskId: string) => void
    changeStatusTask: (checkStatus: boolean, toDoListId: string, taskId: string) => void
    tasks: Array<TaskType>
    filterButtons: Array<FilterButtonType>
    filterTasks: (toDoListId: string, filterValue: string) => void
    changeTask: (newTask: string, toDoListId: string, taskId: string) => void
    changeToDoListTitle: (newTask: string, toDoListId: string) => void
}

export const ToDoList = ({
                             addTask,
                             toDoListId,
                             filterName,
                             toDoListTitle,
                             filterTasks,
                             ...restProps
                         }: ToDoListPropsType) => {
// Filtering tasks
    let filteredTasks = restProps.tasks
    if (filterName === 'Active') filteredTasks = restProps.tasks.filter(f => !f.isDone)
    if (filterName === 'Completed') filteredTasks = restProps.tasks.filter(f => f.isDone)
    const filterTasksCallBack = (filterValue: string) => {
        filterTasks(toDoListId, filterValue)
    }
    const removeToDoListCallBack = () => {
        restProps.removeToDoList(toDoListId)
    }

    return <div>
        <h3>
            <ChangingSpanInInput title={toDoListTitle}
                                 taskId={toDoListId}
                                 callBack={restProps.changeToDoListTitle}
                                 styleSpan={''}/>
            <SuperButton name={'Delete'}
                         callBackClick={removeToDoListCallBack}/>
        </h3>
        <NewTask addTask={addTask}
                 toDoListId={toDoListId}/>
        <Tasks tasks={filteredTasks}
               changeStatusTask={restProps.changeStatusTask}
               toDoListId={toDoListId}
               changeTask={restProps.changeTask}
               removeTask={restProps.removeTask}/>
        <FilterButtons filterButtons={restProps.filterButtons}
                       filterTasksCallBack={filterTasksCallBack}
                       filterName={filterName}/>
    </div>
}
