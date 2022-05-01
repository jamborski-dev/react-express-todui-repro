import { createContext, useState, useEffect } from "react"
import { todos as initialData } from "../data/__mock-data"
import { formatDate } from "../utils/helpers"
import { RenderCount } from "../components/RenderCount"

export const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [filtered, setFiltered] = useState([])
  const [currentTodoId, setCurrentTodoId] = useState(null)
  const [currentFilter, setFilter] = useState("")

  const fetchTodos = async () => {
    fetch("/api/todos", { method: "GET" })
      .then(res => {
        if (!res.ok) throw new Error("There was an error")

        return res.json()
      })
      .then(data => setTodos(data))
      .catch(err => console.error(err))
  }

  const toggleTodo = id => {
    setCurrentTodoId(id)
  }

  const markImportant = (id = currentTodoId) => {
    setTodos(todos =>
      todos.map(todo => (todo._id === id ? { ...todo, is_important: !todo.is_important } : todo))
    )

    setFiltered(todos =>
      todos.map(todo => (todo._id === id ? { ...todo, is_important: !todo.is_important } : todo))
    )
  }

  const markDone = (id = currentTodoId) => {
    setTodos(todos =>
      todos.map(todo => (todo._id === id ? { ...todo, is_done: !todo.is_done } : todo))
    )

    setFiltered(todos =>
      todos.map(todo => (todo._id === id ? { ...todo, is_done: !todo.is_done } : todo))
    )
  }

  const removeTodo = id => {
    fetch(`/api/todos/${id}`, { method: "DELETE" })
      .then(res => {
        if (!res.ok) throw new Error(res.message)
        return res.json()
      })
      .then(res => {
        console.log(res)
        setCurrentTodoId(null)
        fetchTodos()
      })
      .catch(err => {
        console.error(`There was deletion error`, err)
      })
  }

  const toggleFilter = filterValue => setFilter(filterValue)

  const applyFilter = (allTodos = todos) => {
    if (currentFilter === "") {
      setFiltered(allTodos)
      return
    }

    if (currentFilter === "done") {
      setFiltered(allTodos.filter(todo => todo.is_done === true))
      return
    }

    if (currentFilter === "today") {
      setFiltered(
        allTodos.filter(
          todo => formatDate.getDate(todo.reminder) === formatDate.getDate(Date.now())
        )
      )
      return
    }

    if (currentFilter === "important") {
      setFiltered(allTodos.filter(todo => todo.is_important === true))
      return
    }

    if (currentFilter === "scheduled") {
      setFiltered(allTodos.filter(todo => todo.reminder !== null))
      return
    }

    if (
      currentFilter === "design" ||
      currentFilter === "marketing" ||
      currentFilter === "development"
    ) {
      setFiltered(allTodos.filter(todo => todo.category === currentFilter))
      return
    }
  }

  const markAllDone = () => {
    const ids = []
    setFiltered(todos =>
      todos.map(todo => {
        let updatedTodo
        if (!todo.is_done) {
          updatedTodo = { ...todo, is_done: true }
          ids.push(todo._id)
          return updatedTodo
        }
        return todo
      })
    )

    ids.forEach(id => {
      setTodos(todos => todos.map(todo => (todo._id === id ? { ...todo, is_done: true } : todo)))
    })
  }

  const markAllImportant = () => {
    const ids = []
    setFiltered(todos =>
      todos.map(todo => {
        let updatedTodo
        if (!todo.is_important) {
          updatedTodo = { ...todo, is_important: true }
          ids.push(todo._id)
          return updatedTodo
        }
        return todo
      })
    )

    ids.forEach(id => {
      setTodos(todos =>
        todos.map(todo => (todo._id === id ? { ...todo, is_important: true } : todo))
      )
    })
  }

  const addTodo = () => {
    const insertData = {
      title: "test todo " + new Date().getSeconds(),
      isDone: false,
      isImportant: false,
      notes: "Lorem bla bla bla bla...",
      reminder: null,
      stepList: []
    }

    console.log(insertData)

    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(insertData)
    })
      .then(res => {
        console.log(res)
        if (!res.ok) throw new Error("There was en error")
        return res.json()
      })
      .then(data => {
        console.log("success insert")
        console.log(data)
        fetchTodos()
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    applyFilter()
  }, [currentFilter])

  useEffect(() => {
    fetchTodos()
  }, [])

  useEffect(() => {
    if (!filtered.length) setFiltered(todos)

    // re-render after deletion
    applyFilter()
  }, [todos])

  return (
    <TodoContext.Provider
      value={{
        state: {
          todos,
          currentTodoId,
          filtered,
          currentFilter
        },
        actions: {
          setTodos,
          setCurrentTodoId,
          toggleTodo,
          markImportant,
          markDone,
          addTodo,
          removeTodo,
          setFiltered,
          applyFilter,
          toggleFilter,
          markAllDone,
          markAllImportant
        }
      }}
    >
      {/* <RenderCount message="TodoContext" /> */}

      {children}
    </TodoContext.Provider>
  )
}
