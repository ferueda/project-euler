/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const numbers = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  '00': 'hundred',
  '000': 'thousand'
}

function numberLetterCounts(num) {
  let sum = 0;
  let dividedNum = divideNum(num);
  
  for (let i = 1; i <= num; i++) {
    sum += numbers[String(i)].length
  }
  
  return sum;
}

function getNumWords(num) {
  if (num <= 20) return numbers[num];
  return divideNum(num).map(n => {
    if (n.length > 1) return n.split(0)
    numbers[n]
  });
}

function divideNum(num) {
  const len = String(num).length;
  let dividedNums = String(num).split('');
  
  for (let i = 0; i < len; i++) {
    dividedNums[i] += '0'.repeat(len - 1 - i)
  }
  
  return dividedNums.filter(n => n !== '0' && n !== '00' && n !== '000');
}

// console.log(numberLetterCounts(15));
console.log(getNumWords(101));
