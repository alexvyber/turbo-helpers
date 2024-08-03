type KebabtizeWithDash<T> = T extends `${infer Head}${infer Tail}`
  ? Head extends Uppercase<Head>
    ? `-${Lowercase<Head>}${KebabtizeWithDash<Tail>}`
    : `${Head}${KebabtizeWithDash<Tail>}`
  : T

export type Kebabtize<T extends string> = T extends `${infer Head}${infer Tail}`
  ? Head extends Uppercase<Head>
    ? `${Lowercase<Head>}${KebabtizeWithDash<Tail>}`
    : `${Head}${KebabtizeWithDash<Tail>}`
  : T

export type Camelize<T extends string> = T extends `${infer Head}-${infer Tail}`
  ? `${Capitalize<Head>}${Camelize<Tail>}`
  : Capitalize<T>

/* Type tests
   ============================================ */

// type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
//   ? true
//   : false

// type Expect<T extends true> = T

// type KebStr = "SomeTextGoesHere"
// type KebStr1 = "someTextGoesHere"
// type KebRes = "some-text-goes-here"

// type CamStr = "some-text-goes-here"

// type CamStr1 = "--some-text-goes-here--"
// type CamRes = "SomeTextGoesHere"

// // @ts-ignore
// type testcases = [
//   Expect<Equal<Kebabtize<KebStr>, KebRes>>,
//   Expect<Equal<Kebabtize<KebStr1>, KebRes>>,
//   Expect<Equal<Camelize<CamStr>, CamRes>>,
//   Expect<Equal<Camelize<CamStr1>, CamRes>>
// ]
