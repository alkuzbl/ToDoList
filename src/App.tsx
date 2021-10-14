import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {NewTask} from "./components/NewTask/NewTask";
import {NewToDoList} from "./components/NewToToList/NewToDoList";

//Typification
export type FilterValuesType = "all" | "active" | "completed" & string;
type ToDoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type ButtonsFilterType = {
    id: string
    title: FilterValuesType
}
// Data array of filtering buttons
const buttonsFilter: Array<ButtonsFilterType> = [
    {id: v1(), title: 'all'},
    {id: v1(), title: 'active'},
    {id: v1(), title: 'completed'},
]
// Id todolist
const todolistID1: string = v1();
const todolistID2: string = v1();

function App() {
    const [todoLists, setTodoLists] = useState<Array<ToDoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])
    const [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });
    const addToDoList = (title: string, toDoListId: string) => {
        let newToDoList: ToDoListsType = {id: toDoListId, title: title, filter: 'all'}
        setTodoLists([...todoLists, newToDoList])
        setTasks({...tasks, [newToDoList.id]:[]})
    }
    const addTask = (title: string, toDoListId: string) => {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [toDoListId]: [task, ...tasks[toDoListId]]})
    }
    const removeTask = (id: string, toDoListId: string) => {
        setTasks({...tasks, [toDoListId]: tasks[toDoListId].filter(t => t.id != id)})
    }
    const removeToDoList = (toDoListId: string) => {
        setTodoLists(todoLists.filter(tdl => tdl.id !== toDoListId))
    }
    const changeStatus = (taskId: string, isDone: boolean, toDoListId: string) => {
        setTasks({...tasks, [toDoListId]: tasks[toDoListId].map(t => t.id === taskId ? {...t, isDone: isDone} : t)})
    }
    const changeFilter = (value: FilterValuesType, toDoListId: string) => {
        setTodoLists(todoLists.map(m => m.id === toDoListId ? {...m, filter: value} : m))
    }


    return (
        <div className="App">
            <NewToDoList addToDoList={addToDoList}
                         toDoListId={v1()}/>
            {
                todoLists.map(tdl => {
                        return (
                            <Todolist key={tdl.id}
                                      title={tdl.title}
                                      tasks={tasks[tdl.id]}
                                      removeTask={removeTask}
                                      changeFilter={changeFilter}
                                      addTask={addTask}
                                      changeTaskStatus={changeStatus}
                                      filter={tdl.filter}
                                      toDoListId={tdl.id}
                                      removeToDoList={removeToDoList}
                                      buttonsFilter={buttonsFilter}
                            />
                        )
                    }
                )
            }
        </div>
    );
}

export default App;
