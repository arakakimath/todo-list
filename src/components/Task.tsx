import { Trash } from 'phosphor-react'

import styles from './Task.module.css'
import { ChangeEvent, useState } from 'react'

export interface TaskType {
  id: string
  content: string
  completed: boolean
}

export interface TaskProps {
  task: TaskType
  onDeleteTask: (id: string) => void
  onToggleCheckbox: (id: string) => void
}

export function Task({ task, onDeleteTask, onToggleCheckbox }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxSelection(event: ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked)
    onToggleCheckbox(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <div className={styles.task}>
      <div>
        <div>
          <input 
            checked={isChecked} 
            onChange={handleCheckboxSelection} 
            type='checkbox' title='Marcar tarefa como concluída'
          />
        </div>
      </div>
      <p className={isChecked ? styles.lineThrough : styles.none}>{task.content}</p>
      <button 
        title='Deletar tarefa'
        onClick={handleDeleteTask}
      >
        <Trash size={20} />
      </button>
    </div>
  )
}