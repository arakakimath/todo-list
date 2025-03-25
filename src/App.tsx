import styles from './App.module.css'
import { CreatedTasks } from './components/CreatedTasks'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <NewTask />
      <CreatedTasks />
    </>
  )
}

export default App
