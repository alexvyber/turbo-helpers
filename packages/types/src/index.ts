// Copied from type-challenges utils types
export type Expect<T extends true> = T
export type ExpectTrue<T extends true> = T
export type ExpectFalse<T extends false> = T
export type IsTrue<T extends true> = T
export type IsFalse<T extends false> = T

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T,>() => T extends Y ? 1 : 2
  ? true
  : false
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true

// https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
export type IsAny<T> = 0 extends 1 & T ? true : false
export type NotAny<T> = true extends IsAny<T> ? false : true

export type MergeInsertions<T> = T extends object ? { [K in keyof T]: MergeInsertions<T[K]> } : T

export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>
export type Debug<T> = { [K in keyof T]: T[K] }

export type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false
export type ExpectValidArgs<
  FUNC extends (...args: any[]) => any,
  ARGS extends any[]
> = ARGS extends Parameters<FUNC> ? true : false

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never

// --

export type Prettify<T> = MergeInsertions<T>
export type Cast<T, U> = T extends U ? T : U

export type SetPartialByKeys<Obj, Keys extends keyof Obj = keyof Obj> = Prettify<
  Partial<Pick<Obj, Keys>> & Omit<Obj, Keys>
>

export type SetRequiredByKeys<Obj, Keys extends keyof Obj = keyof Obj> = Prettify<
  Required<Pick<Obj, Keys>> & Omit<Obj, Keys>
>

type Merge<Left, Right> = {
  [Prop in keyof Left | keyof Right]: Prop extends keyof Right
    ? Right[Prop]
    : Left[Cast<Prop, keyof Left>]
}

export type MergeObjects<Args extends readonly [...any]> = Args extends [infer Left, ...infer Right]
  ? Merge<Left, MergeObjects<Right>>
  : unknown

export type WithClassName<T> = T & {
  className?: string
}
