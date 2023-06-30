import styles from './loader.module.css'

interface Props {
  color?: string
}

export function Loader({ color = 'white' }: Props) {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader} style={{ borderTopColor: color }}></div>
    </div>
  )
}
