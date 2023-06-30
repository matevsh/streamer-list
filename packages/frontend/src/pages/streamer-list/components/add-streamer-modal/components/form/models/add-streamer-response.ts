import { z } from 'zod'

export const addStreamerResponse = z.object({
  success: z.boolean(),
  data: z.object({
    streamerId: z.number(),
  }),
})

export type AddStreamerResponse = z.infer<typeof addStreamerResponse>
