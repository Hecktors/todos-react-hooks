import React from 'react'
import { Paper, List } from '@material-ui/core'

import Todo from './Todo'

function TodoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <Paper>
      <List>
        {
          todos.map(todo => <Todo
            key={todo.id}
            todo={todo}
            handleCheck={toggleCompleted}
            handleDelete={deleteTodo}
          />)
        }
      </List>
    </Paper>
  )
}

export default TodoList
