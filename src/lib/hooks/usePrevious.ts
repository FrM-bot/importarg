// lib/usePrevious.ts
export function usePrevious<T>(initial?: T) {
  let previous: T | undefined = initial
  return (current: T): T | undefined => {
    const temp = previous
    previous = current
    return temp
  }
}
