var button = document.getElementById("btncompute");
button.onclick = function() {
  var number = parseInt(document.getElementById("txbnum").value);

  if (number > 0) {
    document.getElementById("result").innerHTML = "Positive number";

  }

  else if ( number < 0) {

    document.getElementById("result").innerHTML = "Negative number";

  }
  else { 
    document.getElementById("result").innerHTML = "You entered Zero";

  }
}
