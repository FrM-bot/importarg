import { NOTION_DATABASE_ID, NOTION_TOKEN, STRAPI_TOKEN, STRAPI_URL } from '$env/static/private'
import { object, string } from 'zod'

const privateSchema = object({
  STRAPI_TOKEN: string().min(1, {
    message: 'STRAPI_TOKEN is required'
  }),
  STRAPI_URL: string().min(1, {
    message: 'STRAPI_URL is required'
  }),
  NOTION_TOKEN: string().min(1, {
    message: 'NOTION_TOKEN is required'
  }),
  NOTION_DATABASE_ID: string().min(1, {
    message: 'NOTION_DATABASE_ID is required'
  })
})

type PrivateEnv = typeof privateSchema._type

let privateEnvResult: PrivateEnv

try {
  privateEnvResult = privateSchema.parse({
    STRAPI_TOKEN,
    STRAPI_URL,
    NOTION_TOKEN,
    NOTION_DATABASE_ID
  })
} catch (error) {
  console.error(error)
  throw new Error(`Error validating environment variables: ${error}`)
}

export const env = {
  STRAPI_TOKEN: privateEnvResult.STRAPI_TOKEN,
  STRAPI_URL: privateEnvResult.STRAPI_URL,
  NOTION_TOKEN: privateEnvResult.NOTION_TOKEN,
  NOTION_DATABASE_ID: privateEnvResult.NOTION_DATABASE_ID
}
