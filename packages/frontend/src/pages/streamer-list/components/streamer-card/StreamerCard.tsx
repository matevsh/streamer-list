import styles from './streamer-card.module.css'

const COLORS = [
    "#e0ca36",
    "#c2c6cf",
    "#855628"
]

interface Props {
    idx: number
    name: string
}

export function StreamerCard({idx, name}: Props) {
    const style: Record<string, string> = {}

    if (COLORS[idx]) {
        style.color = COLORS[idx]
    }

    return (
        <div className={styles.card}>
            <p style={style} className={styles.cardNumber}>{idx + 1}</p>
            <h1>{name}</h1>
        </div>
    )
}