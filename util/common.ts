export function delay(ms: number, fn?: () => void) {
  return new Promise<void>((res, rej) => window.setTimeout(() => {
    try {
      fn?.()
      res()
    } catch (err) {
      rej(err)
    }
  }, ms))
}