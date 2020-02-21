/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

function nonAbundantSum() {
  const abundantsSum = generateAbundantNumbersSum();
  let nonAbundants = 0;
  for (let i = 1; i < 28123; i++) {
    if (!abundantsSum.includes(i)) nonAbundants += i;
  }
  return nonAbundants;
}

function generateAbundantNumbersSum() {
  const abundants = generateAbundantNumbers();
  let abudantsSums = [];
  for (let i = 0; i < abundants.length; i++) {
    for (let j = i; j < abundants.length; j++) {
      if (abundants[i] + abundants[j] < 28123) {
        abudantsSums.push(abundants[i] + abundants[j])
      }
    }
  }
  return abudantsSums;
}

function generateAbundantNumbers() {
  let abundants = [];
  for (let i = 2; i < 28123; i++) {
    if (isAbundant(i)) abundants.push(i)
  }
  return abundants;
}

function isAbundant(num) {
  return getDivisors(num).reduce((acc, n) => acc + n, 0) > num;
}

function getDivisors(num) {
  let divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if ((num / i) === i || (num / i) === num) divisors.push(i);
      else divisors.push(i, num / i);
    }
  }
  return divisors;
}

console.log(nonAbundantSum());
