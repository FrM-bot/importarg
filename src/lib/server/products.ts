import { formatNotionDatabase } from '$lib/adapters'
import { env } from '$lib/server/env'
import type NotionDatabaseResponse from '$response/notion/products.json'
import type ProductsResponse from '$response/strapi/products.json'
import type ProductResponse from '$response/strapi/product.json'
import { query } from './strapi'

const properties = {
  model: 'title',
  brand: 'select',
} as const

const propertiesQuery = {
  model: 'contains',
  brand: 'equals',
} as const

type Properties = keyof typeof properties

type Body = {
  page_size?: number
  start_cursor?: string
  filter?: {
    property: Properties
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    [key: string]: any
  }
}

export async function getNotionProducts({
  cursor,
  pageSize,
  filter,
}: {
  cursor?: string
  pageSize?: number
  filter?: {
    field: Properties
    q?: string | null
  }
}) {
  const body = { page_size: pageSize } as Body

  if (cursor && cursor !== 'null') {
    body.start_cursor = cursor
  }

  if (filter?.q && filter.field) {
    const fieldAsProperty = filter.field as Properties
    body.filter = {
      property: fieldAsProperty,
      [properties[fieldAsProperty]]: {
        [propertiesQuery[fieldAsProperty]]: filter.q,
      },
    }
  }

  const response = await fetch(`https://api.notion.com/v1/databases/${env.NOTION_DATABASE_ID}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.NOTION_TOKEN}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      ...body,
      sorts: [
        {
          property: 'brand',
          direction: 'ascending',
        },
      ],
    }),
  })

  const data = (await response.json()) as typeof NotionDatabaseResponse

  return {
    data: formatNotionDatabase(data.results),
    pagination: {
      current: cursor,
      next: data.next_cursor,
      hasMore: data.has_more,
    },
  }
}
export const getProducts = ({ page = 1, pageSize = 10 } = {}) =>
  query<typeof ProductsResponse>(
    `products?fields[0]=name&fields[1]=slug&fields[2]=price&populate[images][fields][0]=url&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  ).then((res) => {
    const { data, meta } = res

    const products = data?.map((product) => ({
      id: product.documentId,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.images[0].url,
      // image: `${STRAPI_URL}${product.images[0].url}`
    }))

    return { products, pagination: meta.pagination }
  })

export const getProduct = (id: string) =>
  query<typeof ProductResponse>(`products/${id}?populate[images][fields][0]=url`).then((res) => {
    const product = res.data

    return {
      id: product.documentId,
      name: product.name,
      slug: product.slug,
      price: product.price,
      // images: product.images.map((image) => `${STRAPI_URL}${image.url}`),
      images: product.images.map((image) => image.url),
      description: product.description_md
    }
  })
