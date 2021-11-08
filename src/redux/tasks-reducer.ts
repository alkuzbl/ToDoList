import {v1} from "uuid";
import {ADD_TASK, ADD_TO_DO_LIST, CHANGE_STATUS_TASK, CHANGE_TASK, REMOVE_TASK, REMOVE_TO_DO_LIST} from "./const";
import {AddToDoListACType, RemoveToDoListACType, TO_DO_LIST_ID} from "./toDoList-reducer";


export type InitialStateType = typeof initialState
const initialState = {
    tasksData: {
        [TO_DO_LIST_ID]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Beer", isDone: true},
            {id: v1(), title: "Bread", isDone: false},
            {id: v1(), title: "Meat", isDone: false},
            {id: v1(), title: "Potato", isDone: false},
        ]
    },
    filterButtonsData: [
        {id: v1(), title: 'All'},
        {id: v1(), title: 'Active'},
        {id: v1(), title: 'Completed'}
    ]
}
export const tasksReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case REMOVE_TASK:
            return {
                ...state, tasksData: {
                    ...state.tasksData,
                    [action.toDoListId]: state.tasksData[action.toDoListId].filter(t => t.id !== action.taskId)
                }
            }
        case ADD_TASK:
            const newAddedTask = {id: v1(), title: action.newTask, isDone: false}
            return {
                ...state, tasksData: {
                    ...state.tasksData, [action.toDoListId]:
                        [newAddedTask, ...state.tasksData[action.toDoListId]]
                }
            }
        case CHANGE_STATUS_TASK:
            return {
                ...state, tasksData: {
                    ...state.tasksData, [action.toDoListId]:
                        state.tasksData[action.toDoListId].map(t => t.id === action.taskId ? {
                            ...t, isDone: action.checkStatus
                        } : t)
                }
            }
        case CHANGE_TASK:
            return {
                ...state, tasksData: {
                    ...state.tasksData, [action.toDoListId]:
                        state.tasksData[action.toDoListId].map(t => t.id === action.taskId ? {
                            ...t, title: action.newTask
                        } : t)
                }
            }
        case ADD_TO_DO_LIST:
            return {
                ...state, tasksData: {
                    ...state.tasksData, [action.newToDoListId]: []
                }
            }
        case REMOVE_TO_DO_LIST:
            const copyState = {...state, tasksData: {...state.tasksData}}
            delete copyState.tasksData[action.toDoListId]
            return copyState
        default:
            return state
    }
}

type ActionType = RemoveTaskACType | AddTaskACType | ChangeStatusTaskACType | ChangeTaskACType | AddToDoListACType | RemoveToDoListACType


type RemoveTaskACType = ReturnType<typeof removeTaskAC>
type AddTaskACType = ReturnType<typeof addTaskAC>
type ChangeStatusTaskACType = ReturnType<typeof changeStatusTaskAC>
type ChangeTaskACType = ReturnType<typeof changeTaskAC>


export const removeTaskAC = (toDoListId: string, taskId: string) => ({
    type: REMOVE_TASK, toDoListId, taskId
} as const)

export const addTaskAC = (toDoListId: string, newTask: string) => ({
    type: ADD_TASK, toDoListId, newTask
} as const)

export const changeStatusTaskAC = (checkStatus: boolean, toDoListId: string, taskId: string) => ({
    type: CHANGE_STATUS_TASK, checkStatus, toDoListId, taskId
} as const)

export const changeTaskAC = (newTask: string, toDoListId: string, taskId: string) => ({
    type: CHANGE_TASK, newTask, toDoListId, taskId
} as const)

