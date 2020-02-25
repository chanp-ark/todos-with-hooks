import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"

import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import useTodoState from "./hooks/useTodoState"


function TodoApp() {
    
    const initialTodos = [ {id: 1, task: "Walk the Dog", completed: false}]
    const { todos, addTodo, removeTodo, editTodo, toggleTodo} = useTodoState(initialTodos)
    
    
    
    return (  
        <Paper 
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <ToolBar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </ToolBar>
            </AppBar>
            
            <Grid container justify='center' style={ { marginTop: "1rem"}}>
                <Grid  item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList 
                        editTodo={editTodo} 
                        todos={todos} 
                        removeTodo={removeTodo} 
                        toggleTodo={toggleTodo}
                        />  
                </Grid>

            </Grid>
            
        </Paper>
    )
}

export default TodoApp;

// - TodoApp -this component will manage the state
    // - TodoForm
    // - TodoList
    //     - TodoItem

// each todo will have id, task, completed (true or false)