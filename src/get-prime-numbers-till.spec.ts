import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"

import { getPrimeNumbersTill } from "./get-prime-numbers-till.ts"


Deno.test("should provide prime numbers till x", async () => {

    assertEquals(getPrimeNumbersTill(11), [2, 3, 5, 7, 11])

})


