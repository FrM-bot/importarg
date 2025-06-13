export const routes = {
  home: '/',
  priceList: '/price-list',
  products: {
    details: (id: string) => `/products/${id}`
  }
} as const
