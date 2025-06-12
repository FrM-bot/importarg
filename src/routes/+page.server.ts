import { getExchangeRate } from '$lib/server/exchange-rate'
import { getHomeInfo } from '$lib/server/home'
import { getProducts } from '$lib/server/products'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const { title, description, image } = await getHomeInfo()
  const { products } = await getProducts()
  const { venta } = await getExchangeRate()
  return {
    title,
    description,
    image,
    products: products.map((product) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price * venta,
      image: product.image,
    })),
  }
}
