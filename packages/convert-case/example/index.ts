import { camelToKebab, kebabToCamel } from "../src"

console.log(camelToKebab("SomeString")) // => some-string
console.log(camelToKebab("otherString")) // => other-string

console.log(kebabToCamel("some-string")) // => SomeString
console.log(kebabToCamel("other-string")) // => OtherString
