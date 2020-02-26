/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

function lexicographicPermutations(pos) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let position = pos - 1;
  let solution = '';

  for (let i = digits.length - 1; i >= 0; i--) {
    let temp = position / getFactorial(i) | 0;
    position %= getFactorial(i);
    solution += digits[temp];
    digits.splice(temp, 1);
  }

  return solution;
}

function getFactorial(num) {
  if (num <= 1) return 1;
  else return num * getFactorial(num - 1);
}

console.log(lexicographicPermutations(1000000))
