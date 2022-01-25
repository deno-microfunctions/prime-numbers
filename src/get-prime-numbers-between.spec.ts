import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { getPrimeNumbersBetween } from "./get-prime-numbers-between.ts"


Deno.test("should provide prime numbers till x", async () => {

    assertEquals(getPrimeNumbersBetween(11, 29), [11, 13, 17, 19, 23, 29])

})
