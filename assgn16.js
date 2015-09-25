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
  data.records.forEach(printCriminal);
})();