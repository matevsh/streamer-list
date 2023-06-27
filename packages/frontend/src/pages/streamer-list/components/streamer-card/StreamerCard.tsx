import styles from './streamer-card.module.css'
import {
    IconArrowBigDownFilled,
    IconArrowBigUpFilled,
} from "@tabler/icons-react";
import {StreamerVotes} from "../../models/streamers-schema.ts";
import {usePutVote} from "../../mutations/use-put-vote.ts";

const COLORS = [
    "#e0ca36",
    "#c2c6cf",
    "#855628"
]

interface Props {
    idx: number
    name: string
    votes: StreamerVotes
    refetch: () => void
    streamerId: number
}

export function StreamerCard({idx, name, votes, refetch, streamerId}: Props) {
    const {mutate} = usePutVote(refetch)

    const style: Record<string, string> = {}

    if (COLORS[idx]) {
        style.color = COLORS[idx]
    }

    function vote(positive: boolean) {
        return () => {
            mutate({streamerId, positive})
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.flex}>
                <p style={style} className={styles.cardNumber}>{idx + 1}</p>
                <h1>{name}</h1>
            </div>
            <div className={styles.votes}>
                <div onClick={vote(true)}>
                    <IconArrowBigUpFilled size={30} color={votes.up.voted ? "green": undefined}/>
                </div>
                <div onClick={vote(false)}>
                    <IconArrowBigDownFilled size={30} color={votes.down.voted ? "red": undefined}/>
                </div>
            </div>
        </div>
    )
}