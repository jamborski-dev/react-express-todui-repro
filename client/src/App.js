import { AppGrid, TopBar } from "./components/AppGrid"
import { Aside } from "./components/Aside"
import { TodoList } from "./components/TodoList"
import { TodoDetails } from "./components/TodoDetails"
import { TodoDetailsDefault } from "./components/TodoDetailsDefault"
import { useTodoContext } from "./hooks/useTodoContext"

const App = () => {
  const {
    state: { currentTodo }
  } = useTodoContext()

  // TODO: move to context

  return (
    <AppGrid>
      <Aside />
      <TopBar>topbar</TopBar>
      <TodoList />
      {currentTodo._id ? <TodoDetails /> : <TodoDetailsDefault />}
    </AppGrid>
  )
}

export default App
