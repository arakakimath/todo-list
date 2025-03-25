import clipboard from '../assets/clipboard.svg'

import styles from './CreatedTasks.module.css'
import { Task, TaskType } from './Task'

export function CreatedTasks() {
  const tasks: TaskType[] = [
    { id: '1', content: 'Task 01' },
    { id: '2', content: 'Task 02' },
  ]

  return (
    <>
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