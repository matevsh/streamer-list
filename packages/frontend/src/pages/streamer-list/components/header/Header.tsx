import styles from './header.module.css'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  setModal: Dispatch<SetStateAction<boolean>>
}

export function Header({ setModal }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>streamer list</h1>
      <button className={styles.button} onClick={() => setModal(true)}>
        Dodaj
      </button>
    </div>
  )
}
