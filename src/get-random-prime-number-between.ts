
// import { isPrime } from "https://deno.land/x/isprime/mod.ts"
import { isPrime } from "https://raw.githubusercontent.com/michael-spengler/deno-module-isprime/main/src/is-prime.ts"

export function getRandomPrimeNumberBetween(min: number, max: number): number {

    let counter = 2
    let primeNumbers = []

    while (counter <= max) {

        if (counter >= min && isPrime(counter)) {
            primeNumbers.push(counter)
        }

        counter++

    }

    const randomIndex = Math.floor(Math.random() * primeNumbers.length - 1);

    return primeNumbers[randomIndex]
}
