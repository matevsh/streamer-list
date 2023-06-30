import styles from './text-area.module.css'
import { forwardRef } from 'react'

interface Props {
  id: string
  label?: string
  error: string | undefined
  [x: string]: unknown
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ id, label, error, ...input }, ref) => {
    return (
      <div className={`${styles.container} ${error ? styles.danger : ''}`}>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} {...input} ref={ref} />
        {Boolean(error) && <span>{error}</span>}
      </div>
    )
  }
)
