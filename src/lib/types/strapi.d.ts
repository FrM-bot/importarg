export type FeaturedProduct = {
  id: string
  name: string
  slug: string
  price: number
  image: string
}

export type Product = {
  id: string
  name: string
  slug: string
  price: number
  image: string[]
  description: string
}
