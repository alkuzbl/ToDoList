import React from "react";
import {NewTask} from "./NewTask/NewTask";
import {Tasks} from "./Tasks/Tasks";
import {FilterButtons} from "./FilterButtons/FilterButtons";
import {SuperButton} from "../defaultComponents/SuperButton";
import {ChangingSpanInInput} from "../defaultComponents/ChangingSpanInInput";
import {useDispatch} from "react-redux";
import {addTaskAC, changeStatusTaskAC, changeTaskAC, removeTaskAC} from "../../redux/tasks-reducer";
import {changeToDoListTitleAC, filterTasksAC, removeToDoListAC} from "../../redux/toDoList-reducer";


type ToDoListPropsType = {
    toDoListId: string
    filterName: string
    toDoListTitle: string
    tasks: Array<{ id: string, title: string, isDone: boolean }>
    filterButtons: Array<{ id: string, title: string }>
}

export const ToDoList = ({toDoListId, filterName, toDoListTitle, tasks, filterButtons}: ToDoListPropsType) => {

    const dispatch = useDispatch()

    const removeToDoList = (toDoListId: string) => {
        dispatch(removeToDoListAC(toDoListId))
    }
    const filterTasks = (toDoListId: string, filterValue: string) => {
        dispatch(filterTasksAC(toDoListId, filterValue))
    }
    const removeTask = (toDoListId: string, taskId: string) => {
        dispatch(removeTaskAC(toDoListId, taskId))
    }
    const addTask = (toDoListId: string, newTask: string) => {
        dispatch(addTaskAC(toDoListId, newTask))
    }
    const changeStatusTask = (checkStatus: boolean, toDoListId: string, taskId: string) => {
        dispatch(changeStatusTaskAC(checkStatus, toDoListId, taskId))
    }
    const changeTask = (newTask: string, toDoListId: string, taskId: string) => {
        dispatch(changeTaskAC(newTask, toDoListId, taskId))
    }
    const changeToDoListTitle = (newTask: string, toDoListId: string) => {
        dispatch(changeToDoListTitleAC(newTask, toDoListId))}


    let filteredTasks = tasks
    if (filterName === 'Active') filteredTasks = tasks.filter(f => !f.isDone)
    if (filterName === 'Completed') filteredTasks = tasks.filter(f => f.isDone)
    const filterTasksCallBack = (filterValue: string) => {
        filterTasks(toDoListId, filterValue)
    }
    const removeToDoListCallBack = () => {
        removeToDoList(toDoListId)
    }

    return <div>
        <h3>
            <ChangingSpanInInput title={toDoListTitle}
                                 taskId={toDoListId}
                                 callBack={changeToDoListTitle}
                                 styleSpan={''}/>
            <SuperButton name={'Delete'}
                         iconButtonDeleteMUI={true}
                         callBackClick={removeToDoListCallBack}/>
        </h3>
        <NewTask addTask={addTask}
                 toDoListId={toDoListId}/>
        <Tasks tasks={filteredTasks}
               changeStatusTask={changeStatusTask}
               toDoListId={toDoListId}
               changeTask={changeTask}
               removeTask={removeTask}/>
        <FilterButtons filterButtons={filterButtons}
                       filterTasksCallBack={filterTasksCallBack}
                       filterName={filterName}/>
    </div>
}