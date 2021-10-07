import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList";
import {v1} from "uuid";


export type FilterButtonsDataType = {
    id: string
    title: string
}
export type TasksDataType = {
    id: string
    task: string
    isDone: boolean
}

const filterButton = [
    {id: v1(), title: 'All'},
    {id: v1(), title: 'Active'},
    {id: v1(), title: 'Completed'}
]
const tasksData = [
    {id: v1(), task: 'HTML&CSS', isDone: false},
    {id: v1(), task: 'JS', isDone: true},
    {id: v1(), task: 'React', isDone: false},
    {id: v1(), task: 'View', isDone: true},
    {id: v1(), task: 'Pyton', isDone: true}
]

function App() {

    const [tasks, setTasks] = useState<Array<TasksDataType>>(tasksData)
    const [filter, setFilter] = useState('All')
    let filteredTasks = tasks

    if (filter === 'Active') filteredTasks = tasks.filter(t => !t.isDone)
    if (filter === 'Completed') filteredTasks = tasks.filter(t => t.isDone)


    const onCheckedTask = (status: boolean, taskId: string) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: status} : t))
    }
    const addNewTask = (newTaskValue: string) => {
        setTasks([{id: v1(), task: newTaskValue.trim(), isDone: false}, ...tasks])
    }
    const removeTask = (taskId: string) => setTasks(tasks.filter(t => t.id !== taskId))


    return (
        <div className="App">
            <ToDoList filterButton={filterButton}
                      addNewTask={addNewTask}
                      removeTask={removeTask}
                      onCheckedTask={onCheckedTask}
                      tasks={filteredTasks}
                      filter={filter}
                      setFilter={setFilter}/>
        </div>
    );
}

export default App;
