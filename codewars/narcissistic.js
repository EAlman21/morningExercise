/* A Narcissistic number is a number which is the sum of its own digits,
  each raised to the power of the number of digits. */
function narcissistic(value) {
    return value % this.addedDigits == 0;
}

this.addDigits = function(value) {
  var answer= 0;
  while(value > 10){
    answer = answer + value % 10;
    value = Math.floor(value/10);
  }
  answer += value;
  return answer;
}

console.log(narcissistic(153));
