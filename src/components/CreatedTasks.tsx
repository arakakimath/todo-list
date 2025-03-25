import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import clipboard from '../assets/clipboard.svg'

import styles from './CreatedTasks.module.css'
import { Task } from './Task'

export function CreatedTasks() {
  const [tasks, setTasks] = useState([
    { id: '1', content: 'Task 01' },
    { id: '2', content: 'Task 02' },
  ])

  const [newTaskText, setNewTaskText] = useState('')

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()

    setTasks([...tasks, {
      id: (new Date()).toString(),
      content: newTaskText,
    }])
    setNewTaskText('')
  }

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  const handleNewInvalidTask = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <input 
          type='text' 
          name='newTask'
          value={newTaskText}
          onChange={handleNewTaskChange}
          required
          onInvalid={handleNewInvalidTask}
          id='newTask'
          placeholder='Adicione uma nova tarefa'
        />
        <button type='submit'>
          Criar
          <div><span>+</span></div>
        </button>
      </form>
      <header className={styles.header}>
        <div>
          <span>Tarefas criadas</span>
          <span>{0}</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>{0}</span>
        </div>
      </header>
      <main className={styles.main}>
        {
          tasks.length ?
          tasks.map((task) => <Task key={task.id} task={task} />) :
          (
            <div className={styles.noTasks}>
              <img src={clipboard} alt="ícone de prancheta" />
              <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          ) 
        }
      </main>
    </>
  )
}