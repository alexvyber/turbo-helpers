export function getOptions<T extends object>(arg: T): Array<keyof T> {
  return Object.keys(arg) as Array<keyof T>
}

export function getFirstValue<T extends object>(variants: T): keyof T {
  return getOptions(variants)[0]
}
