import React from "react";
import {NewTask} from "./NewTask/NewTask";
import {Tasks} from "./Tasks/Tasks";
import {FilterButtons} from "./FilterButtons/FilterButtons";
import {SuperButton} from "../defaultComponents/SuperButton";
import {ChangingSpanInInput} from "../defaultComponents/ChangingSpanInInput";
import {useDispatch, useSelector} from "react-redux";
import {addTaskAC, changeStatusTaskAC, changeTaskAC, InitialStateType, removeTaskAC} from "../../redux/tasks-reducer";
import {changeToDoListTitleAC, filterTasksAC, removeToDoListAC} from "../../redux/toDoList-reducer";
import {AppStateType} from "../../redux/store";


type ToDoListPropsType = {
    toDoListId: string
    filterName: string
    toDoListTitle: string
}

export const ToDoList = ({toDoListId, filterName, toDoListTitle}: ToDoListPropsType) => {
    const {tasksData, filterButtonsData} = useSelector<AppStateType, InitialStateType>(state=> state.tasks)
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


    let filteredTasks = tasksData[toDoListId]
    if (filterName === 'Active') filteredTasks = tasksData[toDoListId].filter(f => !f.isDone)
    if (filterName === 'Completed') filteredTasks = tasksData[toDoListId].filter(f => f.isDone)

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

        <FilterButtons filterButtons={filterButtonsData}
                       filterTasksCallBack={filterTasksCallBack}
                       filterName={filterName}/>
    </div>
}