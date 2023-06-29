import {useParams, Link} from "react-router-dom";
import {IconArrowNarrowLeft} from "@tabler/icons-react";

import styles from './streamer-details.module.css'
import {useStreamerDetails} from "./queries/use-streamer-details.ts";
import {DEFAULT_IMAGE} from "../../common/constants/default-image.ts";
import {getPlatformIcon} from "../../common/data/platform-icons.ts";

export function StreamerDetails() {
    const {id: streamerId} = useParams()
    const {isLoading, data} = useStreamerDetails(streamerId)

    if(isLoading) return <>ładowanie...</>

    const [Icon, color] = getPlatformIcon(data?.data.platform)

    return (
        <section className={styles.container}>
            <Link to={'/'} className={styles.navigation}>
                <IconArrowNarrowLeft />
                <span>Powróć do listy</span>
            </Link>
            <div className={styles.content}>
                <div className={styles.headerContent}>
                    <div className={styles.imageContainer}>
                        <div className={styles.icon}><Icon /></div>
                        <img src={DEFAULT_IMAGE} alt="streamer image"/>
                    </div>
                    <div>
                        <p style={{color}} className={styles.platform}>{data?.data.platform}</p>
                        <p className={styles.title}>{data?.data.name}</p>
                        <span>{data?.data.description}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}