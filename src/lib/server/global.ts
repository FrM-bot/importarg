import { query } from "./strapi"
import type GlobalResponse from '$response/strapi/global.json'

export const getGlobalInfo = async () => {
  const response = await query<typeof GlobalResponse>('global?fields[0]=siteName&fields[1]=siteDescription&populate[favicon][fields][0]=url&populate[defaultSeo][fields][0]=metaTitle&populate[defaultSeo][fields][1]=metaDescription&populate[defaultSeo][populate][metaImage][fields][0]=url')
  const {
    siteName, 
    siteDescription,
    favicon,
    defaultSeo
   } = response.data
  return {
    title: siteName,
    description: siteDescription,
    favicon: favicon.url,
    meta: {
      title: defaultSeo.metaTitle,
      description: defaultSeo.metaDescription,
      image: defaultSeo.metaImage.url
    }
  }
}
