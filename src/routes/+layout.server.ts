import { getExchangeRate } from '$lib/server/exchange-rate'
import { getGlobalInfo } from '$lib/server/global'
import { getHomeInfo } from '$lib/server/home'
import { getProducts } from '$lib/server/products'
import type { LayoutServerLoad } from './$types'

export const config = {
  isr: {
    expiration: 43200
  },
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
