import {useParams, Navigate, Link} from "react-router-dom";

import styles from './streamer-details.module.css'
import {IconArrowNarrowLeft} from "@tabler/icons-react";

export function StreamerDetails() {
    const {id: streamerId} = useParams()
    if(!streamerId) return <Navigate to={'/'} />

    return (
        <section className={styles.container}>
            <Link to={'/'} className={styles.navigation}>
                <IconArrowNarrowLeft />
                <span>Powróć do listy</span>
            </Link>
            <div className={styles.content}>
                <h1>Streamer Details</h1>
            </div>
        </section>
    )
}