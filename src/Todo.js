import React from 'react'
import { useToggleState } from './customHooks'
import {
  ListItem,
  ListItemText,
  // Divider,
  Checkbox,
  IconButton,
  ListItemSecondaryAction
} from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import TodoFormEdit from './TodoFormEdit'

function Todo({ id, task, completed, toggleTodo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useToggleState()

  return (
    <>
      <ListItem >
        {isEditing
          ? <TodoFormEdit task={task} id={id} updateTodo={updateTodo} setIsEditing={setIsEditing} />
          :
          <>
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
              <IconButton onClick={setIsEditing} aria-label="Editing">
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        }
      </ListItem>
      {/* <Divider /> */}
    </>
  )
}

export default Todo
