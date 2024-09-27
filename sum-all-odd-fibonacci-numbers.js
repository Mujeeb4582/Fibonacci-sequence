module.exports = function (num) {
  // write your code here
  // first get the fibonacci squence using for loop
  // then take out odd numbers from series
  // sum the odd numbers

  let n1 = 0;
  let n2 = 1;
  let temp = 0;
  let sum = 1;
  for (let i = 0; i < num; i++) {
    temp = n1 + n2;
    if (temp <= num) {
      if (temp % 2 != 0) {
        sum += temp;
      }
      n1 = n2;
      n2 = temp;
    } else {
      break;
    }
  }
  return sum;
};