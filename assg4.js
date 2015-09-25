var btncompute = document.getElementById('btncompute');
btncompute.onclick = function  () {
  var salary = document.getElementById('txbsalary').value;
  var salBox = document.getElementById('seldesignation');
  var designation = salBox.options[salBox.selectedIndex].value;
  var incrmt = 0;

  switch (designation) {
    case "Executive": 
      incrmt = salary * 0.08;
      break;
    case "Team Leader":
      incrmt = salary * 0.12;
      break;
      case "Project Manager":
      incrmt = salary * 0.16;
      break;

  }
  console.log(salary + ":" + designation);

  var incrmtBox = document.getElementById('txbinc');
  incrmtBox.value = incrmt;


}
