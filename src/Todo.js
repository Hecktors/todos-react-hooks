import React from 'react'
import {
  ListItem,
  ListItemText,
  Divider,
  Checkbox,
  IconButton,
  ListItemSecondaryAction
} from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'


function Todo({ id, task, completed, toggleTodo, deleteTodo }) {
  return (
    <>
      <ListItem >
        <Checkbox
          onChange={() => toggleTodo(id)}
          checked={completed}
          tabIndex={-1}
        />
        <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
          {task}
        </ListItemText>
        <ListItemSecondaryAction >
          <IconButton onClick={() => deleteTodo(id)} aria-label="Delete">
            <Delete />
          </IconButton>
          <IconButton onClick={() => deleteTodo(id)} aria-label="Edit">
            <Edit />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  )
}

export default Todo
