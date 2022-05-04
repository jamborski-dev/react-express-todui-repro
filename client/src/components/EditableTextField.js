import { useAppContext } from "../hooks/useAppContext"
import { useTodoContext } from "../hooks/useTodoContext"

export const EditableTextField = ({ keyName }) => {
  const {
    state: { currentTodo },
    actions: { setCurrentTodo }
  } = useTodoContext()

  const {
    state: { editMode }
  } = useAppContext()

  const handleInputChange = e => {
    const { value, name } = e.target
    setCurrentTodo(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      {!editMode ? (
        <div
          className="todo-details--text-content"
          dangerouslySetInnerHTML={{ __html: currentTodo[keyName] }}
        />
      ) : (
        <input
          type="text"
          className="todo-details--text-input"
          value={currentTodo[keyName]}
          name={keyName}
          onChange={handleInputChange}
        />
      )}
    </>
  )
}
