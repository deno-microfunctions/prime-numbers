// import { isPrime } from "https://deno.land/x/isprime/mod.ts"
import { isPrime } from "https://raw.githubusercontent.com/michael-spengler/deno-module-isprime/main/src/is-prime.ts"

export function getPrimeNumbersTill(maxNumber: number): number[] {

    let counter = 2
    let primeNumbers = []

    while (counter <= maxNumber) {

        if (isPrime(counter)) {
            primeNumbers.push(counter)
        }

        counter++

    }

    return primeNumbers
}
