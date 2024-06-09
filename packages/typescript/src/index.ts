export function typedKeys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as any
}
