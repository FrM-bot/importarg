import { env } from '$lib/server/env'

export function query(url: string) {
  return fetch(`${env.STRAPI_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${env.STRAPI_TOKEN}`,
    },
    method: 'GET',
  }).then((res) => res.json())
}
