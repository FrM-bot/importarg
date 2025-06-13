import type { Snippet } from 'svelte'

export type WithoutChild<T> = T extends { child?: Snippet } ? Omit<T, 'child'> : T
export type WithoutChildren<T> = T extends { children?: Snippet } ? Omit<T, 'children'> : T
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
  ref?: U | null
}
