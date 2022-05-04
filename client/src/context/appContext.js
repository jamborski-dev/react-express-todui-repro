import { createContext, useState } from "react"

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState(false)

  const toggleEditMode = () => setEditMode(!editMode)

  const contextObject = {
    state: { isLoading, error, editMode },
    actions: { setLoading, setError, toggleEditMode, setEditMode }
  }
  return <AppContext.Provider value={contextObject}>{children}</AppContext.Provider>
}
