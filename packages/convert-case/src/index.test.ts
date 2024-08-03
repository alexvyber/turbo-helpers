import { camelToKebab, kebabToCamel } from "."
import { it, expect, describe } from "vitest"

type Tuple = [a: string, b: string]

describe("camelToKebab", () => {
  const cases: Array<Tuple> = [
    ["", ""],
    ["a", "a"],
    ["A", "a"],
    ["some", "some"],
    ["someWord", "some-word"],
    ["someCamelWord", "some-camel-word"],
    ["SomeCamelWord", "some-camel-word"],
    ["SOME", "s-o-m-e"],
    ["rANdOm", "r-a-nd-om"],
    ["   ShouldBeTrimmed   ", "should-be-trimmed"],
    // ["   Figure Out This Case   ", "??"],
  ]

  describe.each<Tuple>(cases)("camelToKebab(%o)", (camel, kebab) => {
    it(`converts ${camel} into ${kebab}`, () => {
      expect(camelToKebab(camel)).toBe(kebab)
    })
  })
})

describe("kebabToCamel", () => {
  const cases: Array<Tuple> = [
    ["", ""],
    ["a", "A"],
    ["A", "A"],
    ["some", "Some"],
    ["some-word", "SomeWord"],
    ["some-kebab-word", "SomeKebabWord"],
    ["s-o-m-e", "SOME"],
    ["r-a-nd-om", "RANdOm"],
    ["   should-be-trimmed   ", "ShouldBeTrimmed"],
    // ["---figure-out-this-case---", "??"],
  ]

  describe.each<Tuple>(cases)("kebabToCamel(%o)", (kebab, camel) => {
    it(`converts ${kebab} into ${camel}`, () => {
      expect(kebabToCamel(kebab)).toBe(camel)
    })
  })
})
