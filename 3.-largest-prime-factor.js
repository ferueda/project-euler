function largestPrimeFactor(n) {
  const primeNumbers = [];
  let divNum = n;
 
  for (let i = 2; divNum > 1; i++) {
    if (checkPrime(i) && divNum % i === 0) {
      divNum /= i;
      primeNumbers.push(i);
    }
  }
  return primeNumbers.pop();
}

function checkPrime(num) {
  if (num < 1) return false;
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  
  return true;
}
