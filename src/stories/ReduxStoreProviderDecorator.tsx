import {Provider} from "react-redux";
import React from "react";
import { combineReducers, createStore} from "redux";
import {tasksReducer} from "../redux/tasks-reducer";
import {TO_DO_LIST_ID, toDoListReducer} from "../redux/toDoList-reducer";
import {v1} from "uuid";


const rootReducer = combineReducers({
    tasks: tasksReducer,
    toDoList: toDoListReducer

})

const initialStateForStories = {
    toDoList: [
        {id: TO_DO_LIST_ID, title: 'What to buy', filter: 'All'}
    ],
    tasks: {
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
}

export const storeForStories = createStore(rootReducer, initialStateForStories)

export const ReduxStoreProviderDecorator = (storyFn: any) => <Provider store={storeForStories}> {storyFn()}</Provider>