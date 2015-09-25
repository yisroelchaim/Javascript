var btnValidate = document.getElementById("btnvalidate");
btnValidate.onclick = function() {
  var age = document.getElementById("txbage").value;


  
  if(parseInt(age) >= 18) {
    document.getElementById("result").innerHTML="<br /> you can vote";
  }
  else {
    document.getElementById("result").innerHTML="<br /> you need to grow up to be able to vote";
  }


}