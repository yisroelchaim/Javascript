var button = document.getElementById("btnsubmit");
button.onclick = function  () {
  var fullname = document.getElementById("txtarea").value;
  var words = fullname.split(" ");
  var arrayResult = [];
  for (var i = 0; i < words.length; i++){
    var firstchar = words[i].charAt(0);
    firstchar = firstchar.toUpperCase();
    var restchar = words[i].substr(1);
    arrayResult.push(firstchar + restchar);

  }
  
  var result = document.getElementById("result");
  result.innerHTML = arrayResult.join(" ")

};







// 1. Get the fullname from the text area
// 2. Declare a variable called words and assign it to fullname.split(" ");
// 3. Create a new array called arrayResult
// 4. write a for loop to iterate the words
// 4.1 inside the for loop, extract the first character of the word 
// using charAt and then extract the rest of the letters ( excluding the firstchar) using substring or substr
// 4.2 push the firstLetter + restLetters to the new array arrResult
// 5. after the for loop ( outside of it ) get the label/p to show the output by id ( gi )
//  and assign its innerHTML to the arrayResult.join(" ");