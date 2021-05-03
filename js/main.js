// 問題①
const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (value, index, array) {
  return array.indexOf(value) === index;
})

console.log(result);

// 問題②
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year}年はうるう年です`;
  } else {
    return `${year}年はうるう年ではないです`;
  }
}

console.log(leapYear(2020));
console.log(leapYear(2021));