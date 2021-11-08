import React from 'react';
import './App.css';
import {v1} from "uuid";
import {ToDoList} from "./components/ToDoList/ToDoList";
import {NewToDoList} from "./components/NewToDoList";
import MenuAppBar from "./components/HeaderMui";
import {Container, Grid, Paper} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {
    addToDoListAC,
    changeToDoListTitleAC,
    filterTasksAC,
    InitialStateToDoListType,
    removeToDoListAC
} from "./redux/toDoList-reducer";
import {addTaskAC, changeStatusTaskAC, changeTaskAC, removeTaskAC} from "./redux/tasks-reducer";
import {AppStateType} from "./redux/store";

const App = () => {
    const addToDoList = (newToDoListId: string = v1(), newToDoListTitle: string) => {
        dispatch(addToDoListAC(newToDoListId, newToDoListTitle))
    }

    const {tasks, toDoList} = useSelector<AppStateType, AppStateType>(state => state)

    const dispatch = useDispatch()

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
            <MenuAppBar/>
            <Container fixed>
                <Grid container>
                    <Paper style={{margin: "10px 0 30px"}}>
                        <NewToDoList addToDoList={addToDoList}
                                     newToDoListId={v1()}
                        />
                    </Paper>
                </Grid>
                <Grid container spacing={3}>
                    {
                        toDoList.map(t => {
                                return <Grid item key={t.id}>
                                    <Paper style={{padding: "10px"}}>
                                        <ToDoList
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
                                    </Paper>
                                </Grid>
                            }
                        )
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default App;






