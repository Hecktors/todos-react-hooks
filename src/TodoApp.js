import React, { useState } from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean Bathroom", completed: false },
    { id: 2, task: "Get Groceries", completed: false },
    { id: 3, task: "Preparing Breakfast", completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = task => {
    setTodos([...todos, { id: todos.length + 1, task, completed: false }])
  }

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id))

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
            <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
            <TodoForm addTodo={addTodo} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default TodoApp