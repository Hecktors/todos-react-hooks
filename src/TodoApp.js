import React, { useEffect } from 'react'
import { useTodosState } from './customHooks'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'
import TodoList from './TodoList'
import TodoFormNew from './TodoFormNew'

function TodoApp() {
  const [todos, addTodo, deleteTodo, toggleTodo, updateTodo] = useTodosState(
    JSON.parse(window.localStorage.getItem("todos")).length > 0
      ? JSON.parse(window.localStorage.getItem("todos")) : [
        { id: 1, task: "Clean Bathroom", completed: false },
        { id: 2, task: "Get Groceries", completed: false },
        { id: 3, task: "Preparing Breakfast", completed: false }
      ]
  )

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa"
        }}
        elevation={0}
      >
        <AppBar color='primary' position='static' style={{ height: "64" }}>
          <Toolbar>
            <Typography color='inherit'>TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} sm={8} md={4}>
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
            <TodoFormNew addTodo={addTodo} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default TodoApp