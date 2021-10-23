import {
    ADD_TASK,
    ADD_TO_DO_LIST,
    CHANGE_STATUS_TASK, CHANGE_TASK, CHANGE_TITLE_TO_DO_LIST,
    FILTER_TASKS,
    REMOVE_TASK,
    REMOVE_TO_DO_LIST
} from "./const";


export type RemoveToDoListACType = { type: 'REMOVE_TO_DO_LIST', toDoListId: string }
export type AddToDoListACType = { type: 'ADD_TO_DO_LIST', newToDoListId: string, newToDoListTitle: string }
export type FilterTasksACType = { type: 'FILTER_TASKS', toDoListId: string, filterValue: string }
export type RemoveTaskACType = { type: 'REMOVE_TASK', toDoListId: string, taskId: string }
export type AddTaskACType = { type: 'ADD_TASK', toDoListId: string, newTask: string }
export type ChangeStatusTaskACType = { type: 'CHANGE_STATUS_TASK', checkStatus: boolean, toDoListId: string, taskId: string }
export type ChangeTaskACType = { type: 'CHANGE_TASK', newTask: string, toDoListId: string, taskId: string }
export type ChangeToDoListTitleACType = { type: 'CHANGE_TITLE_TO_DO_LIST', newTask: string, toDoListId: string }

export type ActionsType =
    RemoveToDoListACType
    | AddToDoListACType
    | FilterTasksACType
    | RemoveTaskACType
    | AddTaskACType
    | ChangeStatusTaskACType
    | ChangeTaskACType
    | ChangeToDoListTitleACType

export const removeToDoListAC = (toDoListId: string): RemoveToDoListACType => ({type: REMOVE_TO_DO_LIST, toDoListId})
export const addToDoListAC = (newToDoListId: string, newToDoListTitle: string): AddToDoListACType => ({
    type: ADD_TO_DO_LIST,
    newToDoListId,
    newToDoListTitle
})
export const filterTasksAC = (toDoListId: string, filterValue: string): FilterTasksACType => ({
    type: FILTER_TASKS,
    toDoListId,
    filterValue
})
export const removeTaskAC = (toDoListId: string, taskId: string): RemoveTaskACType => ({
    type: REMOVE_TASK,
    toDoListId,
    taskId
})
export const addTaskAC = (toDoListId: string, newTask: string): AddTaskACType => ({type: ADD_TASK, toDoListId, newTask})
export const changeStatusTaskAC = (checkStatus: boolean, toDoListId: string, taskId: string): ChangeStatusTaskACType => ({
    type: CHANGE_STATUS_TASK,
    checkStatus,
    toDoListId,
    taskId
})
export const changeTaskAC = (newTask: string, toDoListId: string, taskId: string): ChangeTaskACType => ({
    type: CHANGE_TASK,
    newTask,
    toDoListId,
    taskId
})
export const changeToDoListTitleAC = (newTask: string, toDoListId: string): ChangeToDoListTitleACType => ({
    type: CHANGE_TITLE_TO_DO_LIST,
    newTask,
    toDoListId
})