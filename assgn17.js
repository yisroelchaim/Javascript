(function(){
  "use strict";
  function printCriminal(val,idx,arry){
    var p = document.createElement("p");
    p.innerHTML = val.name+"<br>";
    p.innerHTML += val.book_date+"<br>";
    p.innerHTML += val.details+"<br>";
    p.innerHTML += val.charges+"<br><hr>";
    document.body.appendChild(p);

  }
  function filterFemales(val){
    if (val.details[0][1] == "F"){
      return true;
    } else { 
      return false;
    }
  }
  var onlyFemales = data.records.filter(filterFemales);
  onlyFemales.forEach(printCriminal);
})();