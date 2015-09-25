var btnCompute = document.getElementById("btncompute");
btnCompute.onclick = function(){

  var num1 = document.getElementById("txbnum1").value;
  var num2 = document.getElementById("txbnum2").value;
  var result = parseInt(num1) + parseInt(num2);
  document.getElementById("txbresult").value=result;
}