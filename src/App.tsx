import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {ToDoList} from "./components/ToDoList/ToDoList";
import {NewToDoList} from "./components/NewToDoList";


const toDoListId_1: string = v1()

export type FilterButtonType = {
    id: string
    title: string
}
type ToDoListType = {
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
export type TasksDataType = TasksType
export type ToDoListsDataType = Array<ToDoListType>

const toDoListsData: ToDoListsDataType = [
    {id: toDoListId_1, title: 'What to buy', filter: 'All'},

]
const tasksData: TasksDataType = {
    [toDoListId_1]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "Beer", isDone: true},
        {id: v1(), title: "Bread", isDone: false},
        {id: v1(), title: "Meat", isDone: false},
        {id: v1(), title: "Potato", isDone: false},
    ]
}
const filterButtonsData: Array<FilterButtonType> = [
    {id: v1(), title: 'All'},
    {id: v1(), title: 'Active'},
    {id: v1(), title: 'Completed'}
]


const App = () => {
    const [toDoLists, setToDoLists] = useState<ToDoListsDataType>(toDoListsData)
    const [tasks, setTasks] = useState<TasksDataType>(tasksData)

    const removeToDoList = (toDoListId: string) => {
        setToDoLists(toDoLists.filter(tdl => tdl.id !== toDoListId))
    }
    const addToDoList = (newToDoListId: string, newToDoListTitle: string) => {
        const newToDoList: ToDoListType = {id: newToDoListId, title: newToDoListTitle, filter: 'All'}
        setToDoLists([...toDoLists, newToDoList])
        setTasks({...tasks, [newToDoListId]: []})
    }
    const filterTasks = (toDoListId: string, filterValue: string) => {
        setToDoLists(toDoLists.map(tdl => tdl.id === toDoListId ? {...tdl, filter: filterValue} : tdl))
    }
    const removeTask = (toDoListId: string, taskId: string) => {
        setTasks({...tasks, [toDoListId]: tasks[toDoListId].filter(t => t.id !== taskId)})
    }
    const addTask = (toDoListId: string, newTask: string) => {
        const newAddedTask: TaskType = {id: v1(), title: newTask, isDone: false}
        setTasks({...tasks, [toDoListId]: [newAddedTask, ...tasks[toDoListId]]})
    }
    const changeStatusTask = (checkStatus: boolean, toDoListId: string, taskId: string) => {
        setTasks({
                ...tasks,
                [toDoListId]:
                    tasks[toDoListId].map(tdl => tdl.id === taskId ? {...tdl, isDone: checkStatus} : tdl)
            }
        )
    }
    const changeTask = (newTask: string, toDoListId: string, taskId: string) => {
        setTasks({
                ...tasks,
                [toDoListId]:
                    tasks[toDoListId].map(tdl => tdl.id === taskId ? {...tdl, title: newTask} : tdl)
            }
        )
    }


    return (
        <div className="App">
            <NewToDoList addToDoList={addToDoList}
                         newToDoListId={v1()}
            />
            {
                toDoLists.map(t => {

                        return <ToDoList
                            addTask={addTask}
                            toDoListId={t.id}
                            filterName={t.filter}
                            toDoListTitle={t.title}
                            removeToDoList={removeToDoList}
                            removeTask={removeTask}
                            changeStatusTask={changeStatusTask}
                            tasks={tasks[t.id]}
                            filterButtons={filterButtonsData}
                            filterTasks={filterTasks}
                            changeTask={changeTask}
                        />
                    }
                )
            }
        </div>
    );
}

export default App;






