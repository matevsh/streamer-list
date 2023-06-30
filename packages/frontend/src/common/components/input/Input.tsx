import styles from './input.module.css'

interface Props {
    textarea: boolean
    id: string
    label?: string
    error: string | undefined
    [x: string]: unknown
}

export function Input({textarea, id, label, error, ...input}: Props) {
    const element = textarea
        ? <textarea id={id} {...input}/>
        : <input id={id} type="text" {...input}/>

    return (
        <div className={`${styles.container} ${error ? styles.danger : ""}`}>
            <label htmlFor={id}>{label}</label>
            {element}
            {Boolean(error) && <span>{error}</span>}
        </div>
    )
}