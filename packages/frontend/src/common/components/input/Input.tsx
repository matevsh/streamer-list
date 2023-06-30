import styles from './input.module.css'
import { forwardRef } from 'react'

interface Props {
  id: string
  label?: string
  error: string | undefined
  [x: string]: unknown
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ id, label, error, ...input }, ref) => {
    return (
      <div className={`${styles.container} ${error ? styles.danger : ''}`}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" {...input} ref={ref} />
        {Boolean(error) && <span>{error}</span>}
      </div>
    )
  }
)
