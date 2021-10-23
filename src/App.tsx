import React, {useReducer} from 'react';
import './App.css';
import {v1} from "uuid";
import {ToDoList} from "./components/ToDoList/ToDoList";
import {NewToDoList} from "./components/NewToDoList";
import {
    ADD_TASK,
    ADD_TO_DO_LIST,
    CHANGE_STATUS_TASK, CHANGE_TASK, CHANGE_TITLE_TO_DO_LIST,
    FILTER_TASKS,
    REMOVE_TASK,
    REMOVE_TO_DO_LIST
} from "./redux/const";
import {
    ActionsType,
    addTaskAC,
    addToDoListAC,
    changeStatusTaskAC, changeTaskAC, changeToDoListTitleAC,
    filterTasksAC,
    removeTaskAC,
    removeToDoListAC
} from "./redux/reducer";
//The initial ID of the toDoList and the task
export const TO_DO_LIST_ID: string = v1()
//Typification
export type FilterButtonType = {
    id: string
    title: string
}
export type ToDoListType = {
    id: string
    title: string
    filter: string
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksType = {
    [key: string]: Array<TaskType>
}
export type ToDoListsDataType = ToDoListType[]
export type FilterButtonsDataType = FilterButtonType[]
export type RootStateType = {
    toDoListsData: ToDoListsDataType
    tasksData: TasksType
    filterButtonsData: FilterButtonsDataType
}
//Object DATA - initial state
const initialState: RootStateType = {
    toDoListsData: [
        {id: TO_DO_LIST_ID, title: 'What to buy', filter: 'All'},],
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
export const reducer = (state: RootStateType = initialState, action: ActionsType): RootStateType => {
    switch (action.type) {
        case REMOVE_TO_DO_LIST:
            return {...state, toDoListsData: state.toDoListsData.filter(tdl => tdl.id !== action.toDoListId), tasksData: {...state.tasksData, [action.toDoListId]:[]}}
        case ADD_TO_DO_LIST:
            const newToDoList: ToDoListType = {
                id: action.newToDoListId,
                title: action.newToDoListTitle,
                filter: 'All'
            }
            return {
                ...state,
                toDoListsData: [...state.toDoListsData, newToDoList],
                tasksData: {...state.tasksData, [action.newToDoListId]: []}
            }
        case FILTER_TASKS:
            console.log('fff')
            return {
                ...state, toDoListsData:
                    state.toDoListsData.map(tdl => tdl.id === action.toDoListId ?
                        {...tdl, filter: action.filterValue} : tdl)
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasksData: {
                    ...state.tasksData,
                    [action.toDoListId]: state.tasksData[action.toDoListId].filter(t => t.id !== action.taskId)
                }
            }
        case ADD_TASK:
            const newAddedTask: TaskType = {id: v1(), title: action.newTask, isDone: false}
            return {
                ...state,
                tasksData: {
                    ...state.tasksData,
                    [action.toDoListId]: [newAddedTask, ...state.tasksData[action.toDoListId]]
                }
            }
        case CHANGE_STATUS_TASK:
            return {
                ...state, tasksData:
                    {
                        ...state.tasksData, [action.toDoListId]:
                            state.tasksData[action.toDoListId].map(tdl => tdl.id === action.taskId ?
                                {...tdl, isDone: action.checkStatus} : tdl)
                    }
            }
        case CHANGE_TASK:
            return {
                ...state, tasksData:
                    {
                        ...state.tasksData, [action.toDoListId]:
                            state.tasksData[action.toDoListId].map(tdl => tdl.id === action.taskId ? {
                                ...tdl,
                                title: action.newTask
                            } : tdl)
                    }
            }
        case CHANGE_TITLE_TO_DO_LIST:
            return {
                ...state, toDoListsData:
                    state.toDoListsData.map(tdl => tdl.id === action.toDoListId ?
                        {...tdl, title: action.newTask} : tdl)
            }
        default:
            return state
    }
}

const App = () => {
    let [tasks, dispatch] = useReducer(reducer, initialState)
    const addToDoList = (newToDoListId: string, newToDoListTitle: string) => {
        dispatch(addToDoListAC(newToDoListId, newToDoListTitle))
    }
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
        dispatch(changeToDoListTitleAC(newTask, toDoListId))
    }

    return (
        <div className="App">
            <NewToDoList addToDoList={addToDoList}
                         newToDoListId={v1()}
            />
            {
                tasks.toDoListsData.map(t => {
                        return <ToDoList key={t.id}
                                         addTask={addTask}
                                         toDoListId={t.id}
                                         filterName={t.filter}
                                         toDoListTitle={t.title}
                                         removeToDoList={removeToDoList}
                                         removeTask={removeTask}
                                         changeStatusTask={changeStatusTask}
                                         tasks={tasks.tasksData[t.id]}
                                         filterButtons={tasks.filterButtonsData}
                                         filterTasks={filterTasks}
                                         changeTask={changeTask}
                                         changeToDoListTitle={changeToDoListTitle}
                        />
                    }
                )
            }
        </div>
    );
}

export default App;






