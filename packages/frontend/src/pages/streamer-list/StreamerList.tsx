import {useGetStreamers} from "./queries/use-get-streamers.ts";

import styles from './streamer-list.module.css'
import {Header} from "./components/header/Header.tsx";
import {StreamerCard} from "./components/streamer-card/StreamerCard.tsx";
import {Loader} from "../../common/components/loader/Loader.tsx";

export function StreamerList() {
    const {data, refetch, isLoading} = useGetStreamers()

    if (isLoading) return <Loader />

    return (
        <div className={styles.container}>
            <Header />
            {data && data.data.map((item, idx) => (
                <StreamerCard
                    name={item.name}
                    key={item.id}
                    idx={idx}
                    votes={item.vote}
                    refetch={refetch}
                    streamerId={item.id}
                />
            ))}
        </div>
    )
}