import { useParams, Link } from 'react-router-dom'
import {
  IconArrowBigDownFilled,
  IconArrowBigUpFilled,
  IconArrowNarrowLeft,
} from '@tabler/icons-react'

import styles from './streamer-details.module.css'
import { useStreamerDetails } from './queries/use-streamer-details.ts'
import { DEFAULT_IMAGE } from '../../common/constants/default-image.ts'
import { getPlatformIcon } from '../../common/data/platform-icons.ts'
import { usePutVote } from '../../common/mutations/use-put-vote.ts'
import { Loader } from '../../common/components/loader/Loader.tsx'

export function StreamerDetails() {
  const { id: streamerId } = useParams()
  const { isLoading, data, refetch } = useStreamerDetails(streamerId)
  const { mutate } = usePutVote(refetch)

  if (isLoading) return <Loader />

  const [Icon, color] = getPlatformIcon(data?.data.platform)

  function vote(positive: boolean) {
    return () => {
      mutate({ streamerId: Number(streamerId), positive })
    }
  }

  return (
    <section className={styles.container}>
      <Link to={'/'} className={styles.navigation}>
        <IconArrowNarrowLeft />
        <span>Powróć do listy</span>
      </Link>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <div className={styles.icon}>
            <Icon />
          </div>
          <img src={DEFAULT_IMAGE} alt="streamer image" />
        </div>
        <div className={styles.textContent}>
          <div>
            <p style={{ color }} className={styles.platform}>
              {data?.data.platform}
            </p>
            <p className={styles.title}>{data?.data.name}</p>
            <span>{data?.data.description}</span>
          </div>

          <div className={styles.votes}>
            <div onClick={vote(true)}>
              <IconArrowBigUpFilled
                style={{ color: data?.data.vote.up.voted ? 'green' : 'unset' }}
              />
              <span>{data?.data.vote.up.amount}</span>
            </div>
            <div onClick={vote(false)}>
              <IconArrowBigDownFilled
                style={{ color: data?.data.vote.down.voted ? 'red' : 'unset' }}
              />
              <span>{data?.data.vote.down.amount}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
