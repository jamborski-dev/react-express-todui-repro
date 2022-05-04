import { createContext, useState, useEffect } from "react"
import { useTodoContext } from "../hooks/useTodoContext"

export const EditContext = createContext(null)

export const EditProvider = ({ children }) => {
  const [todo, setTodo] = useState({})

  // const toggleEditMode = () => setEditMode(!editMode)
  const handleChange = e => {
    const { value, name } = e.target
    setTodo(prev => ({ ...prev, [name]: value }))
  }

  const {
    state: { todos, currentTodo }
  } = useTodoContext()

  const contextObject = {
    state: { todo },
    actions: { setTodo, handleChange }
  }
  return <EditContext.Provider value={contextObject}>{children}</EditContext.Provider>
}
