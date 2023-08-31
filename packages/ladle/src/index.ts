export function getOptions<T extends Record<string, string>>(arg: T): Array<keyof T> {
  return (Object.keys(arg) as Array<keyof typeof arg>).map((key) => key)
}

export function getFirstValue<T extends object>(variants: T): keyof T {
  return (Object.keys(variants) as Array<keyof T>)[0]
}
