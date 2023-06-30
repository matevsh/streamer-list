import {z} from 'zod'

export const formSchema = z.object({
    name: z.string({required_error: "Name is required"}).min(1, "Name is required"),
    platform: z.string({required_error: "You need to select platform"}).min(1, "You need to select platform"),
    description: z.string({required_error: "Tell us something about this streamer."}).min(1, "Tell us something about this streamer."),
})

export type FormSchema = z.infer<typeof formSchema>