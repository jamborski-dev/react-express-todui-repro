import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/scss/app.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { TodoProvider } from "./context/todoContext"
import { AppProvider } from "./context/appContext"
import { RenderCount } from "./components/RenderCount"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AppProvider>
      <TodoProvider>
        <RenderCount message="App" />
        <App />
      </TodoProvider>
    </AppProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
