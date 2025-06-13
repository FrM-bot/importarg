import type NotionDatabaseResponse from '$response/notion/products.json'

export function formatNotionDatabase(data: (typeof NotionDatabaseResponse)['results']) {
  const products = data?.map((item) => {
    return {
      brand: item.properties.brand.select.name,
      storage: item.properties.storage.select.name,
      ram: item.properties.ram.select.name,
      price: item.properties.price.number,
      model: item.properties.model.title[0].plain_text,
      totalPrice: item.properties.total_price.formula.number
    }
  })

  return products
}
