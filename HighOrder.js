//for each

var arrNums = [10,20,30];

arrNums.forEach( iterateElements ); // iterate elements == callback (executed for each element)


function iterateElements(val,idx,arr){
  console.log(val+ " " + idx);
}

var names = ["alpha","bravo", "charlie"];
function print(val,idx,arr){
  console.log((idx+1)+ ". " + val.toUpperCase());
}

names.forEach(print);

var allStudents = [
  {"name": "Alex", "Sub1":54, "Sub2":66, "Sub3":88 },
  {"name": "Bravo", "Sub1":77, "Sub2":84, "Sub3":76 },
  {"name": "Charlie", "Sub1":90, "Sub2":90, "Sub3":90 }
];

function printStudent(objStudent){
  console.log(objStudent.name.toUpperCase());
  console.log(objStudent.Sub1);
  console.log(objStudent.Sub2);
  console.log(objStudent.Sub3);
}

allStudents.forEach(printStudent);

//Filter
var nums = [1,2,3,4,5];
function filterEven(val){
  return val%2==0? true: false;
}

var evenNumbers = nums.filter(filterEven); // evenNumbers holds an array
console.log(evenNumbers.join(","));

var nums = [1,2,3,4,5];
function filterOdd(val){
  return val%2!=0? true: false;
}

var oddNumbers = nums.filter(filterOdd); // evenNumbers holds an array
console.log(oddNumbers.join(","));
//
var names = ["bob","tod","jeremy","nick","ben"]; // print names with only 3 letters

function filtercharacters(val){
  return val.length == 3? true:false;
}

var threeCharacterNames = names.filter(filtercharacters);
console.log(threeCharacterNames);

function printStudent(objStudent){
  console.log(objStudent.name.toUpperCase());
  console.log(objStudent.Sub1);
  console.log(objStudent.Sub2);
  console.log(objStudent.Sub3);
}

var allStudents = [
  {"name": "Alex", "Sub1":54, "Sub2":66, "Sub3":88 },
  {"name": "Bravo", "Sub1":77, "Sub2":84, "Sub3":76 },
  {"name": "Charlie", "Sub1":90, "Sub2":90, "Sub3":90 }
];

function printMeritorious (objStudent){
  if(objStudent.Sub1 >= 80 &&
     objStudent.Sub2 >= 80 &&
     objStudent.Sub3 >= 80     
    ){
    return true;
  } else {
    return false;
  }
}

var meritList = allStudents.filter(printMeritorious);
meritList.forEach(printStudent);