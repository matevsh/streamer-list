import {useParams, Link} from "react-router-dom";

import styles from './streamer-details.module.css'
import {IconArrowNarrowLeft} from "@tabler/icons-react";
import {useStreamerDetails} from "./queries/use-streamer-details.ts";

export function StreamerDetails() {
    const {id: streamerId} = useParams()

    const {isLoading, data} = useStreamerDetails(streamerId)

    if(isLoading) return <>ładowanie...</>

    return (
        <section className={styles.container}>
            <Link to={'/'} className={styles.navigation}>
                <IconArrowNarrowLeft />
                <span>Powróć do listy</span>
            </Link>
            <div className={styles.content}>
                {data?.data.name}
            </div>
        </section>
    )
}