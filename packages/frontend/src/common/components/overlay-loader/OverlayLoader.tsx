import styles from './overlay-loader.module.css'
import { Loader } from '../loader/Loader.tsx'

interface Props {
  visible: boolean
  color?: string
}

export function OverlayLoader({ visible, color }: Props) {
  if (!visible) return null

  return (
    <div className={styles.background}>
      <Loader color={color} />
    </div>
  )
}
