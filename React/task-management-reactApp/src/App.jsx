import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './TaskInput'
import TaskLists from './TaskLists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainContainer'>
      <h6>Task Management System</h6>
      <TaskInput />
      <TaskLists />
    </div>
  )
}

export default App
