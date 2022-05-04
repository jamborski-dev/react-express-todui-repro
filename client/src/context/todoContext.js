import { createContext, useState, useEffect } from "react"
import { formatDate } from "../utils/helpers"
// import { RenderCount } from "../components/RenderCount"
import { useAppContext } from "../hooks/useAppContext"

export const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
  const {
    actions: { setEditMode }
  } = useAppContext()

  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrentTodo] = useState({})
  const [filtered, setFiltered] = useState([])
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

  const toggleTodo = id => setCurrentTodo(todos.find(todo => todo._id === id))

  const markImportant = (id = currentTodo._id) => {
    setTodos(todos =>
      todos.map(todo => (todo._id === id ? { ...todo, is_important: !todo.is_important } : todo))
    )

    setFiltered(todos =>
      todos.map(todo => (todo._id === id ? { ...todo, is_important: !todo.is_important } : todo))
    )
  }

  const markDone = id => {
    setTodos(todos =>
      todos.map(todo => (todo._id === id ? { ...todo, is_done: !todo.is_done } : todo))
    )
    if (id === currentTodo._id) {
      setCurrentTodo(prev => ({ ...prev, is_done: !prev.is_done }))
    }
  }

  const removeTodo = id => {
    fetch(`/api/todos/${id}`, { method: "DELETE" })
      .then(res => {
        if (!res.ok) throw new Error(res.message)
        return res.json()
      })
      .then(res => {
        console.log(res)
        setCurrentTodo({})
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
    const date = new Date()
    const insertData = {
      title: `test todo ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      isDone: false,
      isImportant: false,
      notes: "Lorem bla bla bla bla...",
      reminder: null,
      stepList: []
    }

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
        if (!res.ok) throw new Error(`There was en error: ${res.status} / ${res.statusText}`)
        return res.json()
      })
      .then(data => {
        console.log("success insert")
        console.log(data)
        console.log(todos)
        const newList = [...todos, { ...data }]
        setTodos(newList)
      })
      .catch(err => console.error(err))
  }

  const saveTodo = () => {
    const { _id } = currentTodo
    setTodos(todos => todos.map(item => (item._id === _id ? { ...currentTodo } : item)))
    fetch(`/api/todos/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(currentTodo)
    })
      .then(res => {
        if (!res.ok) throw new Error(`There was en error: ${res.status} / ${res.statusText}`)
        return res.json()
      })
      .then(json => {
        setTodos(todos =>
          todos.map(item => (item._id === json._id ? { ...item, updatedAt: json.updatedAt } : item))
        )
        setEditMode(false)
      })
      .catch(err => {
        console.error(err)
      })
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

  useEffect(() => {
    setEditMode(false)
  }, [todos.length])

  return (
    <TodoContext.Provider
      value={{
        state: {
          todos,
          currentTodo,
          filtered,
          currentFilter
        },
        actions: {
          setTodos,
          setCurrentTodo,
          toggleTodo,
          markImportant,
          markDone,
          addTodo,
          removeTodo,
          setFiltered,
          applyFilter,
          toggleFilter,
          markAllDone,
          markAllImportant,
          saveTodo
        }
      }}
    >
      {/* <RenderCount message="TodoContext" /> */}

      {children}
    </TodoContext.Provider>
  )
}
