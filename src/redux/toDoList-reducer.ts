import {v1} from "uuid";
import {ADD_TO_DO_LIST, CHANGE_TITLE_TO_DO_LIST, FILTER_TASKS, REMOVE_TO_DO_LIST} from "./const";
import {Dispatch} from "redux";
import {authAPI} from "../dal/api";

export const TO_DO_LIST_ID: string = v1()

export type InitialStateToDoListType = typeof initialState
const initialState = [
    {id: TO_DO_LIST_ID, title: 'What to buy', filter: 'All'}
]

export const toDoListReducer = (state: InitialStateToDoListType = initialState, action: ActionType) => {
    switch (action.type) {
        case REMOVE_TO_DO_LIST:
            return state.filter(s => s.id !== action.toDoListId)
        case ADD_TO_DO_LIST:
            const newToDoList = {
                id: action.newToDoListId,
                title: action.newToDoListTitle,
                filter: 'All'
            }
            return [...state, newToDoList]
        case CHANGE_TITLE_TO_DO_LIST:
            return state.map(s => s.id === action.toDoListId ? {...s, title: action.newTask} : s)
        case FILTER_TASKS:
            return state.map(s => s.id === action.toDoListId ? {...s, filter: action.filterValue} : s)
        default:
            return state
    }
}

type ActionType = RemoveToDoListACType | AddToDoListACType | ChangeToDoListTitleACType | FilterTasksACType

export type RemoveToDoListACType = ReturnType<typeof removeToDoListAC>
export type AddToDoListACType = ReturnType<typeof addToDoListAC>
export type ChangeToDoListTitleACType = ReturnType<typeof changeToDoListTitleAC>
export type FilterTasksACType = ReturnType<typeof filterTasksAC>


export const filterTasksAC = (toDoListId: string, filterValue: string) => ({
    type: FILTER_TASKS,
    toDoListId,
    filterValue
} as const)

export const removeToDoListAC = (toDoListId: string) => ({type: REMOVE_TO_DO_LIST, toDoListId} as const)

export const addToDoListAC = (newToDoListId: string, newToDoListTitle: string) => ({
    type: ADD_TO_DO_LIST,
    newToDoListId,
    newToDoListTitle
} as const)

export const changeToDoListTitleAC = (newTask: string, toDoListId: string) => ({
    type: CHANGE_TITLE_TO_DO_LIST,
    newTask,
    toDoListId
} as const)

export const getToDoList = () => (dispatch: Dispatch) => {
    authAPI.getAuthMe()
        .then(data => data)
}