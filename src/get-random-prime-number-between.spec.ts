import { fail } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { getRandomPrimeNumberBetween } from "./get-random-prime-number-between.ts"
import { isPrime } from "https://raw.githubusercontent.com/michael-spengler/deno-module-isprime/main/src/is-prime.ts"



Deno.test("should provide a random prime number between 10 and 30", async () => {

    const randomPrimeNumberBetween10And30 = getRandomPrimeNumberBetween(10, 30)

    if (randomPrimeNumberBetween10And30 < 10 ||
        randomPrimeNumberBetween10And30 > 30 ||
        (!isPrime(randomPrimeNumberBetween10And30))) {

        fail(`${randomPrimeNumberBetween10And30} seems not to be a prime number between 10 and 30.`)

    }

})
