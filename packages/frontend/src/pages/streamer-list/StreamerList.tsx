import {useGetStreamers} from "./queries/use-get-streamers.ts";

import styles from './streamer-list.module.css'
import {Header} from "./components/header/Header.tsx";

export function StreamerList() {
    const {data} = useGetStreamers()

    return (
        <div className={styles.container}>
            <Header />
            {data && data.data.map((item, idx) => <h1 key={idx}>{item.name}</h1>)}
        </div>
    )
}