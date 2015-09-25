var btnSquare = document.getElementById("btnsquare");
var btnCube =document.getElementById("btncube");
var btnComputeSum = document.getElementById("btncomputesum");

btnSquare.onclick = function  () {
  var strNumbers = document.getElementById("txbinput").value;
  var arrayNumbers = strNumbers.split(",");
  var arrayResult = [];

  function computeSquares (val) { 
    arrayResult.push(Math.pow(val,2));
  }

  arrayNumbers.forEach(computeSquares);
  document.getElementById("txbresult").value = arrayResult.join(", ");

}

btnCube.onclick = function  () {
  var strNumbers = document.getElementById("txbinput").value;
  var arrayNumbers = strNumbers.split(",");
  var arrayResult = [];

  function computeCubes (val) { 
    arrayResult.push(Math.pow(val,3));
  }

  arrayNumbers.forEach(computeCubes);
  document.getElementById("txbresult").value = arrayResult.join(", ");

}

btnCube.onclick = function  () {
  var strNumbers = document.getElementById("txbinput").value;
  var arrayNumbers = strNumbers.split(",");
  var arrayResult = [];

  function computeCubes (val) { 
    arrayResult.push(Math.pow(val,3));
  }

  arrayNumbers.forEach(computeCubes);
  document.getElementById("txbresult").value = arrayResult.join(", ");

}

btnComputeSum.onclick = function  () {
  var strNumbers = document.getElementById("txbinput").value;
  var arrayNumbers = strNumbers.split(",");
  var sum = 0;

  function computeSums (val) { 
    sum += parseInt(val);
  }

  arrayNumbers.forEach(computeSums);
  document.getElementById("txbresult").value = sum;

}
