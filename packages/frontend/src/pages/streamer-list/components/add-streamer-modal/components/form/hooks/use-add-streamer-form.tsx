import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {type FormSchema, formSchema} from "../models/form-schema.ts";

export function useAddStreamerForm() {
    const {register, handleSubmit, formState: {errors}, control} = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            platform: "twitch",
        }
    })

    return {register, handleSubmit, errors, control}
}