import { query } from '$lib/server/strapi'

export const getHomeInfo = async () => {
  const response = await query('home?fields[0]=title&fields[1]=description&populate[cover][fields][0]=url')
  const { title, description, cover } = response.data
  return {
    title: title as string,
    description: description as string,
    image: cover.url as string,
  }
}
