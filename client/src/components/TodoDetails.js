import { formatDate } from "../utils/helpers"

import {
  Stopwatch,
  ThreeDotsVertical,
  Star,
  StarFill,
  Bell,
  Plus,
  ArrowRepeat,
  Paperclip,
  Trash,
  Save
} from "react-bootstrap-icons"

import { Checkbox } from "./Checkbox"
import { useTodoContext } from "../hooks/useTodoContext"
import { ButtonTool } from "./ButtonTool"

export const TodoDetails = () => {
  const {
    state: { todos, currentTodoId },
    actions: { markImportant, markDone, removeTodo }
  } = useTodoContext()
  const [todo] = todos.filter(todo => todo._id === currentTodoId)

  return (
    <section className="todo-details--pane">
      <Checkbox checked={todo.is_done} onClick={() => markDone()} />
      <div className="todo-details--body">
        <header className="todo-details--header">
          <h1>{todo.title}</h1>
          <ButtonTool onClick={() => markImportant()}>
            {todo.is_important ? <StarFill /> : <Star />}
          </ButtonTool>
        </header>
        <div className="todo-meta">
          <span>
            <Stopwatch />
            <p>{formatDate.getDate(todo.reminder)}</p>
          </span>
          <span>
            <Bell />
            <p>Remind me at {formatDate.getUKTime(todo.reminder)}</p>
          </span>
        </div>
        <div className="todo-details--html" dangerouslySetInnerHTML={{ __html: todo.notes }} />
        <div className="todo-details--steps">
          <button className="btn--inline">
            <Plus /> Add step
          </button>
          <ul>
            {todo.step_list.map(step => (
              <li key={step.id}>
                <input type="checkbox" name={step.step_content} />
                <label htmlFor={step.step_content}>{step.step_content}</label>
              </li>
            ))}
          </ul>
        </div>
        <button className="btn--inline">
          <ArrowRepeat /> Repeat
        </button>
      </div>
      <footer className="todo-details--footer">
        <ButtonTool onClick={() => removeTodo(todo._id)}>
          <Trash /> <span>Remove</span>
        </ButtonTool>
        <ButtonTool>
          <Save /> <span>Save</span>
        </ButtonTool>
      </footer>
    </section>
  )
}
