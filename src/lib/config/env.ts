import { env as publicEnv } from '$env/dynamic/public'
import { object, string } from 'zod'
console.log({ publicEnv })

const publicSchema = object({
  PUBLIC_PHONE_NUMBER: string().min(1, {
    message: 'PHONE_NUMBER is required',
  }),
})

type PublicEnv = typeof publicSchema._type

let publicEnvResult: PublicEnv

try {
  publicEnvResult = publicSchema.parse(publicEnv)
} catch (error) {
  console.error(error)
  throw new Error(`Error validating environment variables: ${error}`)
}

export const env = {
  PHONE_NUMBER: publicEnvResult.PUBLIC_PHONE_NUMBER,
}
