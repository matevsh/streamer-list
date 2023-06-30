import styles from './streamer-card.module.css'
import {
  IconArrowBigDownFilled,
  IconArrowBigUpFilled,
} from '@tabler/icons-react'
import { StreamerVotes } from '../../models/streamers-schema.ts'
import { usePutVote } from '../../../../common/mutations/use-put-vote.ts'
import { Link } from 'react-router-dom'

const COLORS = ['#e0ca36', '#c2c6cf', '#855628']

interface Props {
  idx: number
  name: string
  votes: StreamerVotes
  refetch: () => void
  streamerId: number
}

export function StreamerCard({ idx, name, votes, refetch, streamerId }: Props) {
  const { mutate } = usePutVote(refetch)

  const style: Record<string, string> = {}

  if (COLORS[idx]) {
    style.color = COLORS[idx]
  }

  function vote(positive: boolean) {
    return () => {
      mutate({ streamerId, positive })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.flex}>
          <p style={style} className={styles.cardNumber}>
            {idx + 1}
          </p>
          {/*<a href=""><h1>{name}</h1></a>*/}
          <Link to={`/details/${streamerId}`} className={styles.anchor}>
            <h1>{name}</h1>
          </Link>
        </div>
        <div className={styles.votes}>
          <div onClick={vote(true)} className={styles.voteContainer}>
            {votes.up.amount}
            <IconArrowBigUpFilled
              size={30}
              style={{ color: votes.up.voted ? 'green' : 'unset' }}
            />
          </div>
          <div onClick={vote(false)} className={styles.voteContainer}>
            {votes.down.amount}
            <IconArrowBigDownFilled
              size={30}
              style={{ color: votes.down.voted ? 'red' : 'unset' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
