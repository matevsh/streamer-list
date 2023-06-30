import { z } from 'zod'

export const userSessionSchema = z.object({
  success: z.boolean(),
})
