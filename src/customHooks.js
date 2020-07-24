import { useState } from 'react'
import { v4 as uuid } from 'uuid'


export const useInputState = (initState = '') => {
  const [value, setValue] = useState(initState)
  const handleChange = (e) => setValue(e.target.value)
  const reset = () => setValue('')
  return [value, handleChange, reset]
}

export const useToggleState = (initState = false) => {
  const [state, setState] = useState(initState)
  const handleChange = () => setState(!state)
  return [state, handleChange]
}

export const useTodosState = (initState = []) => {
  const [todos, setTodos] = useState(initState)
  const addTodo = (task) => setTodos([...todos, { id: uuid(), task, completed: false }])
  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id))
  const toggleTodo = (id) => setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  const updateTodo = (id, task) => setTodos(todos.map(todo => todo.id === id ? { ...todo, task } : todo))
  return [todos, addTodo, deleteTodo, toggleTodo, updateTodo]
}