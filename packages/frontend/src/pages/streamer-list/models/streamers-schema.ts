import { z } from 'zod'

const votesSchema = z.object({
  up: z.object({
    voted: z.boolean(),
    amount: z.number(),
  }),
  down: z.object({
    voted: z.boolean(),
    amount: z.number(),
  }),
})

export const streamersSchema = z.object({
  success: z.literal(true),
  data: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      platform: z.string(),
      description: z.string(),
      vote: votesSchema,
    })
  ),
})

export type StreamersResponse = z.infer<typeof streamersSchema>

export type StreamerVotes = z.infer<typeof votesSchema>
