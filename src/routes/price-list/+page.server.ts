import { QUERY } from '$lib/constants'
import { getExchangeRate } from '$lib/server/exchange-rate'
import { getNotionProducts } from '$lib/server/products'
import type { PageServerLoad } from './$types'

export const config = {
  isr: {
    expiration: 1800,
    allowQuery: [QUERY.brand, QUERY.cursor]
  }
}

export const load: PageServerLoad = async ({ url }) => {
  const cursor = url.searchParams.get(QUERY.cursor)

  const q = url.searchParams.get(QUERY.brand)

  const { data, pagination } = await getNotionProducts({
    pageSize: 10,
    cursor: cursor || undefined,
    filter: {
      field: 'brand',
      q
    }
  })

  const { venta } = await getExchangeRate()

  return {
    products: data.map((product) => ({
      ...product,
      price: product.totalPrice * venta
    })),
    pagination
  }
}
