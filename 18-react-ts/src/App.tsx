import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn GenAI')]

  return (
    <>
      <div>
        <Todos items={todos}></Todos>
      </div>
    </>
  )
}

export default App
