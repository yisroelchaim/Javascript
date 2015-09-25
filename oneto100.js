console.log("start")
var button = document.getElementById("btncompute");
button.onclick = function () {
console.log("Inside Click Event")


  var percent = parseInt(document.getElementById("txbper").value);
  var message = "";
  if ( percent <0 || percent > 100){
    message = "Please enter a number 1-100";

  }
  else{ 

    if (percent >=75 ) {

    message = "You got Distinction";
    }
    else if (percent >= 60 ) {
    message = "You got first class";
    } 

    else if (percent >= 50) {
      message =  "You got second class";  
    }
    else if (percent >= 40) {
     message = "Pass class";
    }
    else {
      message = "You failed";
    }

    

  }
  document.getElementById("result").innerHTML = message;
}

