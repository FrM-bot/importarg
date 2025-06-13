import { getGlobalInfo } from '$lib/server/global'
import type { LayoutServerLoad } from './$types'

export const config = {
  isr: {
    expiration: 43200
  }
}

export const load: LayoutServerLoad = async () => {
  const { title, description, favicon, meta } = await getGlobalInfo()

  return {
    head: {
      title,
      description,
      favicon,
      meta
    }
  }
}
