/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, 
the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function sumEvenFibo(num) {
  let sum = 0;
  for (let i = 1; sum < num; i++) {
    if (getFibo(i) >= num) break;
    else if (getFibo(i) % 2 === 0) sum += getFibo(i);
  }
  return sum;
}

function getFibo(n) {
  if (n <= 1) return 1;
  return getFibo(n - 2) + getFibo(n - 1);
}
