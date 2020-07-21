import React from 'react'
import { TextField } from '@material-ui/core'
import { useInputState } from './customHooks'

function TodoEditForm({ id, task, updateTodo, setIsEditing }) {
  const [editTask, handleChange] = useInputState(task)

  const handleSubmit = (e) => {
    e.preventDefault()
    updateTodo(id, editTask)
    setIsEditing(false)
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "0 1rem" }}>
      < TextField
        value={editTask}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
    </form>
  )
}

export default TodoEditForm
