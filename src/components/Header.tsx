import rocket from '../assets/rocket.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={rocket} alt='Ícone de foguete' />
      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </div>
  )
}