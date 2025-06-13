import { env } from '$lib/config/env'
export const whatsAppUrlBaseUrl = `https://wa.me/${env.PHONE_NUMBER}`

export const getWhatsAppUrl = ({ text }: { text?: string } = {}) => {
  const url = new URL(whatsAppUrlBaseUrl)
  if (text) {
    url.searchParams.set('text', text)
  }
  return url.toString()
}
