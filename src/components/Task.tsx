import { Trash } from 'phosphor-react'

import styles from './Task.module.css'
import { ChangeEvent, useState } from 'react'

export interface TaskType {
  id: string
  content: string
}

export interface TaskProps {
  task: TaskType
}

export function Task({ task }) {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxSelection(event: ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked)
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
      <button title='Deletar tarefa'><Trash size={20} /></button>
    </div>
  )
}