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


function Todo({ todo, handleCheck, handleDelete }) {
  const { id, task, completed } = todo
  return (
    <>
      <ListItem >
        <Checkbox
          onChange={() => handleCheck(id)}
          checked={completed}
          tabIndex={-1}
        />
        <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
          {task}
        </ListItemText>
        <ListItemSecondaryAction >
          <IconButton onClick={() => handleDelete(id)} aria-label="Delete">
            <Delete />
          </IconButton>
          <IconButton onClick={() => handleDelete(id)} aria-label="Edit">
            <Edit />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  )
}

export default Todo
