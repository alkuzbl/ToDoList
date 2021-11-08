import React from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList/ToDoList";
import {NewToDoList} from "./components/NewToDoList";
import MenuAppBar from "./components/HeaderMui";
import {Container, Grid, Paper} from '@mui/material';
import { useSelector} from "react-redux";
import {AppStateType} from "./redux/store";

const App = () => {

    const {tasks, toDoList} = useSelector<AppStateType, AppStateType>(state => state)

    return (
        <div className="App">
            <MenuAppBar/>
            <Container fixed>

                <Grid container>
                    <Paper style={{margin: "10px 0 30px"}}>
                        <NewToDoList />
                    </Paper>
                </Grid>

                <Grid container spacing={3}>
                    {
                        toDoList.map(t => {
                                return <Grid item key={t.id}>
                                    <Paper style={{padding: "10px"}}>
                                        <ToDoList
                                            toDoListId={t.id}
                                            filterName={t.filter}
                                            toDoListTitle={t.title}
                                            tasks={tasks.tasksData[t.id]}
                                            filterButtons={tasks.filterButtonsData}
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






