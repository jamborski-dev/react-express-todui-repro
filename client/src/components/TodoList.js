import { useEffect } from "react"
import { Bell, Star, StarFill, ArrowDownUp, FileEarmark, Stopwatch } from "react-bootstrap-icons"

import { formatDate } from "../utils/helpers"

import { useTodoContext } from "../hooks/useTodoContext"
import { ButtonTool } from "./ButtonTool"
import { Checkbox } from "./Checkbox"

export const TodoList = () => {
  const {
    state: { currentFilter, filtered },
    actions: { toggleTodo, markDone, markImportant }
  } = useTodoContext()

  return (
    <section className="todo-list--pane">
      <header className="todo-list--header">
        <h3>{currentFilter ? currentFilter : "Overview"}</h3>
        <span>
          <ButtonTool className="right">
            <ArrowDownUp />
          </ButtonTool>
        </span>

        {/* TODO: add dropdown */}
      </header>
      <ul>
        {filtered.length === 0 ? (
          <EmptyList />
        ) : (
          filtered.map(todo => (
            <li className="todo-list--item" key={todo._id} onClick={() => toggleTodo(todo._id)}>
              <Checkbox checked={todo.is_done} onClick={() => markDone(todo._id)} />
              <div className="todo-list--item-content">
                <h4>{todo.title}</h4>
                <div className="todo-meta">
                  {todo.reminder && (
                    <span>
                      <Stopwatch />
                      <span>{formatDate.getDate(todo.reminder)}</span>
                    </span>
                  )}
                  {todo.attachments && (
                    <span>
                      <FileEarmark />
                    </span>
                  )}
                  {todo.reminder && (
                    <span>
                      <Bell />
                    </span>
                  )}
                </div>
              </div>
              <ButtonTool onClick={() => markImportant(todo.id)}>
                {todo.is_important ? <StarFill /> : <Star />}
              </ButtonTool>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

const EmptyList = () => (
  <div className="todo-list--empty">
    <p>There are no todos to display...</p>
  </div>
)
