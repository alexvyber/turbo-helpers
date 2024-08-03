import type { Camelize, Kebabtize } from "./types"

/**
 * Converts a string from `CamelCase` to `kebab-case`.
 *
 * @param input The string in `CamelCase` to be converted
 * @returns The `string` in `kebab-case`
 * @example
 * camelToKebab("SomeString") // "some-string"
 */
function camelToKebab<T extends string>(input: T): Kebabtize<T> {
  const inputTrimmed = input.trim()
  let str = inputTrimmed.charAt(0).toLowerCase()
  const { length } = inputTrimmed

  let char = ""

  for (let i = 1; i < length; i++) {
    char = inputTrimmed.charAt(i)

    if (char >= "A" && char <= "Z") {
      str += "-" + char.toLowerCase()
    } else {
      str += char
    }
  }

  return str as any
}

/**
 * Converts a string from `kebab-case` to `CamelCase`.
 *
 * @param input The string in `kebab-case` to be converted
 * @returns The string in `CamelCase`
 * @example
 * kebabToCamel("some-string") // "SomeString"
 */
function kebabToCamel<T extends string>(input: T): Camelize<T> {
  const inputTrimmed = input.trim()
  let str = inputTrimmed.charAt(0).toUpperCase()
  const { length } = inputTrimmed

  let char = ""

  for (let i = 1; i < length; i++) {
    char = inputTrimmed.charAt(i)

    if (char === "-") {
      str += inputTrimmed.charAt(++i).toUpperCase()
    } else {
      str += char
    }
  }
  return str as any
}

export { camelToKebab, kebabToCamel }
