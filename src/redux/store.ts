import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {toDoListReducer} from "./toDoList-reducer";
import thankMiddleware from "redux-thunk"


export type AppStateType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    tasks: tasksReducer,
    toDoList: toDoListReducer

})


export const store = createStore(rootReducer, applyMiddleware(thankMiddleware))

// @ts-ignore for dev
window.store = store

