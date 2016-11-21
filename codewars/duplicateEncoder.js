/*
  The goal of this exercise is to convert a string where each character in the
  new string is '(' if that character appears only once in the original string
  or ')' if that character appears more than once in the original string. Ignore
  capitalization when determining if the character is a duplicate.

  example:
    din -> )))
    recede -> ()()()
    Success -> )())())
*/

var duplicateEncoder = function (value){
    value = value.toLowerCase();
    var letters = {};
    var string ="";
    for (var i = 0; i < value.length; i++) {
      if(letters[value.charAt(i)] != null){
        letters[value.charAt(i)] = '(';
      }
      else {
        letters[value.charAt(i)] = ')';
      }
    }
    for (var i=0; i < value.length; i++){
      string += letters[value.charAt(i)];
    }
    return string;
};
var testing = function(){
  console.log(duplicateEncoder('din'));
  console.log(duplicateEncoder('recede'));
  console.log(duplicateEncoder('Success'));
};

testing();
