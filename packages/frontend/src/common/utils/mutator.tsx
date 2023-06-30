import { z } from 'zod'

export async function mutator<T, B extends object>(
  url: string,
  body: B,
  schema: z.ZodType<T>,
  method = 'POST'
) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json+queries',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    method,
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error(`Response with status ${response.status} is not ok.`)
  }

  const data = await response.json()
  return schema.parse(data)
}
