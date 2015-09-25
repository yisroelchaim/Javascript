var button = document.getElementById("btncompute");
button.onclick = function () { 
  // var cent = document.getElementById("txbsale").value;
  // var dollars = parseInt(cent) / 100;
  var dollars = document.getElementById("txbsale").value;
  dollars = parseFloat(dollars);
  if (dollars >= 10) {
    var discount = dollars * 10 / 100;
    var amountDue = dollars - discount;
    document.getElementById("txbamt").value = amountDue.toFixed(2);  

  } 
  else {
    document.getElementById("txbamt").value = dollars.toFixed(2);

  }
}

