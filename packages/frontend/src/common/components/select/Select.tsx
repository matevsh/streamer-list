import {Control, Controller, FieldValues, Path} from "react-hook-form";

import styles from './select.module.css'

interface SelectOption {
    value: string;
    label: string
}

interface Props<T extends FieldValues> {
    id: Path<T>
    label?: string
    error: string | undefined
    data: SelectOption[]
    control:  Control<T>
}

export function Select<T extends FieldValues>({data, id, error, label, control}: Props<T>) {
    return (
        <div className={`${styles.container} ${error ? styles.danger : ""}`}>
            <label htmlFor={id}>{label}</label>
            <Controller
                control={control}
                render={({field}) => (
                    <select id={id} {...field}>
                        {data.map(({value, label}) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                )} name={id}
            />
            {Boolean(error) && <span>{error}</span>}
        </div>
    )
}