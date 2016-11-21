/* find the longest palindrome in a given string s that is the same in reverse
As in example, the string "racecar" should return 7. If the length of the input is 0. it should return 0. */

var longestPalindrome = function(s){
	//write your code here
	var string = "";
	var possibilites ={};
	var answer =0;
	if (s.length < 2) {return s.length;}

	//grabs all the possible letters in the dictionary
	for (var i = 0; i < s.length; i++) {
		for (var j = i ; j < s.length; j++) {
			string += s.charAt(j);
			possibilites[string] = 1;
		}
		string = "";
	}

	//checks if the work exist backwards
	for(var i=s.length; i >= 0; i--){
		string = "";
		for (var j = i; j >= 0; j--) {
			string += s.charAt(j);
			if ((possibilites[string] != null) && (answer < string.length)) {
				answer = string.length;
			}
		}
	}
	return answer;
}

function testScripts(){
	if(longestPalindrome("racecar") == 7)
		console.log("good");
	if (longestPalindrome("aab") == 2) {
		console.log("good");
	}
	if (longestPalindrome("xxbaab") == 4) {
		console.log("good");
	}
	if (longestPalindrome("abcdefghba") == 2) {
		console.log("good");
	}
}
testScripts();
