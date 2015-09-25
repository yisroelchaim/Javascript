//OOP
//Object based programming- supports OOP and Functions(functions not part of an object);

//User defined functions (not part of an object)
function getSquare (no) {
  return no * no;
}
console.log("Square of 4 is: " + getSquare(4));

//(User defined) Method (part of an object) -object.method
var p1 = {
  fname: "Roger",
  lname: "Federrer",
  //Method Definition
  print: function(){
    console.log(this.fname+ " " + this.lname);
  },

  setName:function (firstName, lastName){
    this.fname = firstName;
    this.lname = lastName;

  }

};

p1.print(); // method invocation

//Prototype- Every object has a .prototype
//When an object property is used, it's checked if it contains that property.
//If it's not found, it's prototype is searched. If not found, it returns 'undefined'

function Employee (name,age,salary){
  this.name = name;
  this.age = age;
  this.salary = salary;

}

var e1 = mew Employee("Edward Evans", 22, 5000);
var e2 = new Employee("will smith", 23, 6300);

console.log(e1.name + " " + e1.age + " " + e1.salary);
console.log(e2.name + " " + e2.age + " " + e2.salary);

//Object with prototypes
var e3 = {
          name: "Charlie Brown",
          age: 24, 
          salary: 7000
          };
var e4 = Object.create(e3);
e4.name = "David Prague"
e4.age = 35;
e4.salary = 1000000;

console.log(e3.name + " " + e3.age + " " + e3.salary);
console.log(e4.name + " " + e4.age + " " + e4.salary);

function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}

var e1 = new Employee("edward evans", 22, 5000);
var e2 = new Employee("will smith", 23, 6200);

console.log(e2.toString()); // [object Object]
Employee.prototype.toString = function() {
  return this.name + "," + this.age + "," + this.salary;
}
console.log(e2.toString());


//Json object

var e3 = {
  name: "Charlie Brown",
  age:24,
  salary:7000
};

Object.getPrototypeOf(e3).toString = function(){
  return this.name + "," + this.age + "," + this.salary;
};

console.log(e3.toString());

//Enums ( and non enumerables-hidden property)

var e5 = {
    name: "Charlie Brown", 
    age: 24,
    salary: 7000
};

for (var i in e5){
  console.log( i + " : " + e5[i]);
}
// RETURNS 
//    name: "Charlie Brown";  
//    age: 24,
//    salary: 7000

// checking for "toString"
console.log('toString' in e5); // true

Object.defineProperty(e5,'contact',
              { enumerable:false,
                value: 900000
              }
            );
console.log(e5.contact);// diplayed
for(var i in e5) {
  console.log(i + " : " + e5[i]);
} // name, age, salary

//pg 7

//Polymorphism




