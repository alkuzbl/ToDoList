import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"


type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}
const toDoList1 = v1()
const toDoList2 = v1()

const App = () => {
    let [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
        {id: toDoList1, title: 'What to learn', filter: 'all'},
        {id: toDoList2, title: 'What to buy', filter: 'all'},
    ])
    let [tasks, setTasks] = useState({
        [toDoList1]: [
            {id: v1(), title: "Chocolate", isDone: true},
            {id: v1(), title: "Beer", isDone: true},
            {id: v1(), title: "Milk", isDone: false},
        ],
        [toDoList2]: [
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "React", isDone: false},
        ]
    })

    const removeTask = (taskID: string, toDoListId: string) => {
        setTasks({...tasks, [toDoListId]: tasks[toDoListId].filter(t => t.id !== taskID)})
    }
    const changeFilter = (filter: FilterValuesType, toDoListId: string) => {
        setTodoLists(todoLists.map(tdl => tdl.id === toDoListId ? {...tdl, filter: filter} : tdl))
    }
    const addTask = (title: string, toDoListId: string) => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [toDoListId]: [newTask, ...tasks[toDoListId]]})
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, toDoListId: string) => {
        setTasks({...tasks, [toDoListId]: tasks[toDoListId].map(t => t.id === taskID ? {...t, isDone: isDone} : t)})
    }

    return (
        <div className="App">
            {
                todoLists.map(tdl => {
                        let tasksForTodoList = tasks[tdl.id]
                        if (tdl.filter === "active") {
                            tasksForTodoList = tasks[tdl.id].filter(t => !t.isDone)
                        }
                        if (tdl.filter === "completed") {
                            tasksForTodoList = tasks[tdl.id].filter(t => t.isDone)
                        }
                        return (
                            <TodoList
                                key={tdl.id}
                                id={tdl.id}
                                title={tdl.title}
                                tasks={tasksForTodoList}
                                filter={tdl.filter}
                                addTask={addTask}
                                removeTask={removeTask}
                                changeFilter={changeFilter}
                                changeTaskStatus={changeTaskStatus}
                            />
                        )
                    }
                )
            }
        </div>
    );
}

export default App;
