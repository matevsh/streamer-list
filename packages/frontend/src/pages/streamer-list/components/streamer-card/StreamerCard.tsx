import styles from './streamer-card.module.css'
import {
    IconArrowBigDownFilled,
    IconArrowBigUpFilled,
} from "@tabler/icons-react";

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
            <div className={styles.flex}>
                <p style={style} className={styles.cardNumber}>{idx + 1}</p>
                <h1>{name}</h1>
            </div>
            <div className={styles.votes}>
                <div>
                    <IconArrowBigUpFilled size={30}/>
                </div>
                <div>
                    <IconArrowBigDownFilled size={30}/>
                </div>
            </div>
        </div>
    )
}