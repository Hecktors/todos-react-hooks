import React, { Fragment } from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'

function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }) {
  return todos.length
    ? (
      <Paper>
        <List>
          {
            todos.map((todo, i) =>
              <Fragment key={todo.id}>
                <Todo
                  {...todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                />
                {todos.length - 1 !== i && <Divider />}
              </Fragment>
            )
          }
        </List>
      </Paper>
    )
    : null
}

export default TodoList
