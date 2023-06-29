import {z} from "zod";

export async function fetcher<T>(url: string, schema: z.ZodType<T>) {
    const response = await fetch(url, {
        headers: { Accept: 'application/json+queries' },
        method: "GET",
        credentials: "include"
    })

    if(!response.ok) {
        throw new Error(`Response with status ${response.status} is not ok.`)
    }

    const data = await response.json();
    return schema.parse(data)
}