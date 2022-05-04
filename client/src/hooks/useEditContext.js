import { useContext } from "react"
import { EditContext } from "../context/editContext"

export const useEditContext = () => useContext(EditContext)
