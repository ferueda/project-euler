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
