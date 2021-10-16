import React from 'react';
import {ButtonsFilterType, FilterValuesType, TaskType} from './App';
import {SuperButton} from "./components/SuperButton";
import {Tasks} from "./components/Tasks/Tasks";
import {ButtonsFilter} from "./components/ButtonsFilter/ButtonsFilter";
import {NewTask} from "./components/NewTask/NewTask";


type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, toDoListId: string) => void
    changeFilter: (value: FilterValuesType, toDoListId: string) => void
    addTask: (title: string, toDoListId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, toDoListId: string) => void
    filter: FilterValuesType
    toDoListId: string
    removeToDoList: (toDoListId: string) => void
    buttonsFilter: Array<ButtonsFilterType>
    changeTaskText: (taskId: string, toDoListId: string, newValue: string)=> void
}

export function Todolist(props: TodolistPropsType) {
    let {buttonsFilter, changeTaskText} = props
    const onClickHandler = () => props.removeToDoList(props.toDoListId)
    const onFilterClickHandler = (btnTitle: FilterValuesType) => props.changeFilter(btnTitle, props.toDoListId)
    let tasksForTodolist = props.tasks;
    if (props.filter === "active") {
        tasksForTodolist = props.tasks.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone);
    }

    return <div>
        <h3>{props.title}
            <SuperButton callBack={onClickHandler} name={'x'}/>
        </h3>

        <NewTask addTask={props.addTask} toDoListId={props.toDoListId} />

        <Tasks tasks={tasksForTodolist}
               removeTask={props.removeTask}
               changeTaskStatus={props.changeTaskStatus}
               toDoListId={props.toDoListId}
               changeTaskText={changeTaskText}/>

        <ButtonsFilter buttonsFilter={buttonsFilter}
                       onFilterClickHandler={onFilterClickHandler}
                       filter={props.filter}/>

    </div>
}

