import { createContext, useState } from "react"

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false)

  const contextObject = {
    state: { isLoading },
    actions: { setLoading }
  }
  return <AppContext.Provider value={{ contextObject }}>{children}</AppContext.Provider>
}
