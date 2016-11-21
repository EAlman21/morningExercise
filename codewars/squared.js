/*
  write a function that checks whether all the elements in a array are squared
  numbers. the function should be able to take any number of array elements.
  your function should return true if all elements in the array are squared
  numbers and false if not. An empty array should return undefined. you can
  assume that all array elements will be positive integers.

  example:
  isSquared[(1,4,9,16)];
  returns true
  isSquared[(3,4,7,9)];
  returns false
  isSquared[()]
  returns undefined
*/


var isSquared = function(numbers){
  if(numbers.length == 0){
    return undefined;
  }
  for (var i = 0; i < numbers.length; i++) {
    if (Number.isInteger(Math.sqrt(numbers[i])) == false ) {
      return false;
    }
  }
  return true;
};

var test = function(){
  if(isSquared([1,4,9,6]) == true){
    console.log("good");
  }
  if (isSquared([3,4,7,9]) == false) {
    console.log("good");
  }
};

console.log(isSquared([1,4,9,16]));
console.log(isSquared([3,4,7,9]));
console.log(isSquared([]));
//test();
