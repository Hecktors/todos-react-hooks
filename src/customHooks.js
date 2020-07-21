import { useState } from 'react'

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