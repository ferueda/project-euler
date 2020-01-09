/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

function summationOfPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) sum += i;
  }
  return sum;
}

function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }  
  return num > 1
}
