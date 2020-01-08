/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function specialPythagoreanTriplet() {
  let a, b;
  for (b = 1; b < 1000; b++) {
    a = (500000 - 1000 * b) / (1000 - b); //initial equations rearranged using algebra
    
    if (a % 1 === 0) return a * b * (1000 - (b + a));
  }
}

/*
We initially have 2 formulas:
  a^2 + b^2 = c^2
  a + b + c = 1000

First, rearrange c to left in the second formula
  c = 1000 - (a + b)

Insert c in the first formula
  a^2 + b^2 = (1000 - (a + b))^2

After multiplying we get
  a^2 + b^2 = 1000000 - 2000 * (a + b) + a^2 + 2 * a * b + b^2

Rearrange formula to simplify and divide by 2
  1000 * (a + b) - a * b = 500000

Leave a to the left
  a = (500000 - 1000 * b) / (1000 - b)
*/
