/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

function primeNumbers(n) {
  const primes = [2];
  for (let i = 2; primes.length < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) break;
      if (j === i - 1) primes.push(i);
    }
  }
  return primes.pop();
}
