import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { env } from '././config/env'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
  ref?: U | null
}

export const formatDate = (
  date: number | Date | undefined,
  {
    locales = 'es-ES',
    option = { dateStyle: 'long' },
  }: {
    locales?: string | string[] | undefined
    option?: Intl.DateTimeFormatOptions | undefined
  } = {}
) => {
  try {
    return new Intl.DateTimeFormat(locales, option).format(date)
  } catch (error) {
    console.error(error)
  }
}

export const formatNumber = (
  value: number | bigint,
  {
    locales = 'de-DE',
    option = { currency: 'ARS', style: 'currency' },
  }: {
    locales?: string | string[] | undefined
    option?: Intl.NumberFormatOptions | undefined
  } = {}
) => {
  try {
    return new Intl.NumberFormat(locales, option).format(value)
  } catch (error) {
    console.error(error)
    return null
  }
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const whatsAppUrlBaseUrl = `https://wa.me/${env.PHONE_NUMBER}`

export const getWhatsAppUrl = ({ text }: { text?: string } = {}) => {
  const url = new URL(whatsAppUrlBaseUrl)
  if (text) {
    url.searchParams.set('text', text)
  }
  return url.toString()
}
