import React from 'react'
import { Paper, List } from '@material-ui/core'

import Todo from './Todo'

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <Paper>
      <List>
        {
          todos.map(todo => <Todo
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />)
        }
      </List>
    </Paper>
  )
}

export default TodoList
