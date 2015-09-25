var selectDays = document.createElement('select');

for (var i = 1; i <= 31; i++){
  var option = document.createElement('option');
  option.innerHTML = i; 
  selectDays.appendChild(option);

}

  document.body.appendChild(selectDays); 
  document.body.appendChild(document.createElement('br'))
  document.body.appendChild(document.createElement('br'))

var selectMonths = document.createElement('select');

  for (var m = 1; m<=12; m++){
  var optionMonths = document.createElement('option');
  optionMonths.innerHTML = m;
  selectMonths.appendChild(optionMonths);
 }

  document.body.appendChild(selectMonths);
  document.body.appendChild(document.createElement('br'))
  document.body.appendChild(document.createElement('br'))

var selectYears = document.createElement('select');
 for (var y = 1970; y <=2015; y++){
  var optionYears = document.createElement('option');
  optionYears.innerHTML = y;
  selectYears.appendChild(optionYears);

 }

  document.body.appendChild(selectYears);


/* 

var i = 1; 

while (i <=10) {
console.log(i);
i++;

}

do {
  
  console.log(i)
  i++;
}
while (i <= 10);


do { 
  console.log(i)
  i--; 

}
while (i >= 10);


for (var i = 3; i <= 30; i += 3) {
  console.log(i);
}


var total = 0;

for (var i = 1; i <= 10; i++){
total = total + i; 

}*/

