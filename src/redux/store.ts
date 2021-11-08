import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {toDoListReducer} from "./toDoList-reducer";



export type AppStateType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    tasks: tasksReducer,
    toDoList: toDoListReducer

})


export const store = createStore(rootReducer)

// @ts-ignore for dev
window.store = store

