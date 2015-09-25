var button = document.getElementById("btncompute");
button.onclick = function(){
  var number = document.getElementById("txbnum").value;
  if (parseInt(number) % 2 == 0 )  {
    document.getElementById("result").innerHTML= number + " is even ";

  }
  else 
  {
    document.getElementById("result").innerHTML= number + " is odd ";

  }

}

