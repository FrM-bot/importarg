import { QUERY } from '$lib/constants'
import { getExchangeRate } from '$lib/server/exchange-rate'
import { getNotionProducts, getProduct } from '$lib/server/products'
import type { PageServerLoad } from './$types'

export const config = {
  isr: {
    expiration: 43200
  },
}

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params


  const product = await getProduct(slug)

  const { venta } = await getExchangeRate()

  return {
    product: {
      ...product,
      price: product.price * venta
    }
  }
}
