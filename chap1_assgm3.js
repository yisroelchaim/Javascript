var buttonClear = document.getElementById("buttonclear")
buttonclear.onclick = function() {

  document.getElementById("txb1").value = "";
  document.getElementById("txb2").value = "";
  document.getElementById("result").innerHTML = "";
}

var buttonCompute = document.getElementById("buttoncompute")
buttonCompute.onclick = function () {

  var value1 = document.getElementById("txb1").value;
  var value2 = document.getElementById("txb2").value;

//   if (value1 == "" || value2 == "" )
//   {
//     document.getElementById("result").innerHTML = "Please enter both values";


//   }  

//   else if (isNaN (value1) == false &&
//     isNaN(value2) == false)  {

//     document.getElementById("result").innerHTML =  parseInt(value1) + parseInt(value2);


// } 
// else if (isNaN(value1) == true && 
//   isNaN(value2) == true)  { 


//   document.getElementById("result").innerHTML = value1 + " " + value2;

// }  
// else {

//   document.getElementById("result").innerHTML = "Invalid input";
// }
   if (value1 != "" || value2 != "" )
    {
   
       if (isNaN (value1) == false &&
          isNaN(value2) == false)  {

          document.getElementById("result").innerHTML =  parseInt(value1) + parseInt(value2);


      } 
      else if (isNaN(value1) == true && 
        isNaN(value2) == true)  { 


        document.getElementById("result").innerHTML = value1 + " " + value2;

      }  
      else {

        document.getElementById("result").innerHTML = "Invalid input";
      }
  }
  else {

       document.getElementById("result").innerHTML = "Please enter both values";

  }

} // end of btncompute.onclick