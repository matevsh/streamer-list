import { useQuery } from '@tanstack/react-query'

import { fetcher } from '../../../common/utils/fetcher.ts'
import { API_URL } from '../../../common/constants/env.ts'
import { streamerDetails } from '../models/streamer-details.ts'

export function useStreamerDetails(streamerId: string | undefined) {
  return useQuery({
    queryKey: [`streamer-id-${streamerId}`],
    queryFn: () =>
      fetcher(`${API_URL}/streamer/${streamerId}`, streamerDetails),
  })
}
