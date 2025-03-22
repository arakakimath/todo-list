import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <form className={styles.form}>
      <input 
        type='text' 
        name='newTask' 
        id='newTask'
        placeholder='Adicione uma nova tarefa'
      />
      <button type='submit'>
        Criar
        <div><span>+</span></div>
      </button>
    </form>
  )
}