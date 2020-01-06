function largestPalindromeProduct() {
  let palindromes = [];
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      let product = (i * j).toString();
      if (
        product ===
        product
          .split('')
          .reverse()
          .join('')
      )
        palindromes.push(Number(product));
    }
  }
  return Math.max(...palindromes);
}
