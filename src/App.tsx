import React from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList/ToDoList";
import {NewToDoList} from "./components/NewToDoList";
import {Container, Grid, Paper} from '@mui/material';
import { useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {HeaderMui} from "./components/HeaderMui";
import {InitialStateToDoListType} from "./redux/toDoList-reducer";

const App = () => {

    const toDoList = useSelector<AppStateType, InitialStateToDoListType>(state => state.toDoList)

    return (
        <div className="App">
            <HeaderMui/>
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






