import {z} from 'zod';

export const streamersSchema = z.object({
    success: z.literal(true),
    data: z.array(z.object({
        id: z.number(),
        name: z.string(),
        platform: z.string(),
        description: z.string(),
    }))
})

export type StreamersResponse = z.infer<typeof streamersSchema>