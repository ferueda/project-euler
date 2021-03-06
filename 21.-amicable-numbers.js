/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

function amicableNumbersSum(num) {
  let amicableSum = 0;
  for (let i = 1; i < num; i++) {
    if (isAmicable(i)) amicableSum += i;
  }
  return amicableSum;
}

function isAmicable(num) {
  let num1 = getProperDivisorsSum(num);
  let num2 = getProperDivisorsSum(num1);
  return num2 === num && num2 !== num1;
}

function getProperDivisorsSum(num) {
  let sum = 1;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num / i === i) sum += i;
      else sum += i + (num / i);
    }
  }
  return sum;
}

console.log(amicableNumbersSum(10000))
