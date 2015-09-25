var nums1 = new Array[10, 20, 30];
var nums2 = new Array(3); // init
nums2[0] = 10;
nums2[1] = 20;
nums2[2] = 30;

console.log(nums2.length); //3
console.log(nums2[0]);
console.log(nums2[nums2.length-1]);//last element
nums2[1] = 5;//replacing 20 w/ 5

//Iterating through an array
for (var i = 0; i < nums2.length; i++) {
  console.log(nums2[i]);
}
// or 
for (var i in nums2){
  console.log(nums2[i]);
}
nums2[3] = 40; // simply increase index to append

var names = [];
names.push('David');
names.push('Bravo');// adds as last index in array
names.unshift('Edward');// adds as first index in array

var firstEntry = names.shift(); // shifts off and returns first entry
var lastEntry = names.pop(); // pops off and returns last entry

var allNames = names.join();// array returns as a string(opp. of .split method)
console.log(allNames);

names.reverse();// array index reversal 
console.log(names.join(" - "));
//sortNumeric will compare each argument, and only return numbers which can be subtracted by each other
var arrNumbers = [1000, 99, 20];
arrNumbers.sort(sortNumeric);

function sortNumeric(no1, no2){
  return no1 - no2;
}

console.log(arrNumbers.join("--"));


var str = "This is a sentence";

var arrayWords = str.split(' ');
var longest = arrayWords[0];
for (var i = 1; i < arrayWords.length; i++) {
  if (longest.length < arrayWords[i].length) {
    longest = arrayWords[i];

  };
};

 
console.log(longest);
// find out the longest word in this line of text and print it on the console




function square(num) {
  return num * num
};

var square5 = square(5);
console.log(square5);


function square(num){
if(num === undefined) {
  return 0;
}
  return num*num;
  }

  //Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and 
  //return the number of vowels the string contains (ie. "All cows eat grass" would return 5).

  var quote = "All cows eat grass";
  var vowels = ["a","e","i","o","u"];
  function vowel (quote) {
    var count = 0;
    quote = quote.toLowerCase();
    for (var i = 0; i < quote.length; i++) {
      var char = quote.charAt(i)
      if (vowels.indexOf(char)!= -1) {
        count++

      };
    };

    return count;
  }
   vowel(quote);

 
  