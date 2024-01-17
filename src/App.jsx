import todos from "./assets/data/todo"
import './App.css'
import TodoList from "./assets/components/todolist/TodoList"

function App() {

  return (
    <>
    <TodoList todos={todos}/>
    </>
  )
}

export default App
