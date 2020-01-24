/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

function countingSundays(from, to) {
  const initYear = new Date(from).getFullYear();
  const finalYear = new Date(to).getFullYear();
  let sundays = 0;

  for (let year = initYear; year <= finalYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const currDate = new Date(year, month, 1).getDay()
      if (currDate === 0) sundays += 1;
    }
  }

  return sundays;
}

console.log(countingSundays('1 Jan 1901', '31 Dec 2000'))
