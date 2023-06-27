import {useGetStreamers} from "./queries/use-get-streamers.ts";

import styles from './streamer-list.module.css'
import {Header} from "./components/header/Header.tsx";
import {StreamerCard} from "./components/streamer-card/StreamerCard.tsx";

export function StreamerList() {
    const {data} = useGetStreamers()

    return (
        <div className={styles.container}>
            <Header />
            {data && data.data.map((item, idx) => (
                <StreamerCard name={item.name} key={idx} idx={idx}/>
            ))}
        </div>
    )
}