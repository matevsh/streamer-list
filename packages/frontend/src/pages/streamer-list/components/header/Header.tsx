import styles from './header.module.css'

export function Header(){
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>streamer list</h1>
            <button className={styles.button}>Dodaj</button>
        </div>
    )
}