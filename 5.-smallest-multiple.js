/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
  
function smallestMultiple() {
  for (i = 2520; i; i++) {
    for (j = 20; j >= 2; j--) {
      if (i % j) break;
      if (j === 2) return i;
    }
  }
}
