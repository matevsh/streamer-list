import { z } from 'zod'

export const resultSchema = z.object({
  success: z.boolean(),
})
