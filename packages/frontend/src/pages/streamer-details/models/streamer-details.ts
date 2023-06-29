import {z} from 'zod';

export const streamerDetails = z.object({
    success: z.boolean(),
    data: z.object({
        id: z.number(),
        name: z.string(),
        platform: z.string(),
        description: z.string(),
        vote: z.object({
            up: z.object({
                voted: z.boolean(),
                amount: z.number()
            }),
            down: z.object({
                voted: z.boolean(),
                amount: z.number()
            })
        })
    })
})

export type StreamerDetails = z.infer<typeof streamerDetails>