var objectPerson = new Object();
objectPerson.fname = 'James';
objectPerson.lname = 'Gosling';
objectPerson['age'] = 65;

objectPerson.print = function(separator){
  if (separator == undefined)
    separator = '';
  console.log(this.fname + separator +
    this.lname + separator +
    this.age);

}

objectPerson.print();

var objectPerson = {
  fname: 'James',
  lname: 'Gosling',
  age: 65,
  contact: [08701],
  print:function(){
    console.log(
      this.fname + " " +
      this.lname + " " +
      this.age + " " +
      this.contact.join(" "));
  }
}

objectPerson.print();


//json object decleration
var objectPerson = {
  "fname": "James",
  "lname": "Gosling",
  "age": 65,
  "contact": ["08701"]
};

var utilities = {

  printPerson: function(person) {
    console.log(
      person.fname + " " +
      person.lname + " " +
      person.age + " " +
      person.contact.join(" "));
  },

  getFullName: function(person){
    return person.fname + ' ' + person.lname;
  },

  getAge: function(person){
    return person.age;
  },
  getContact: function(person){
    return person.contact;
  }
}
console.log( 'FullName:' + utilities.getFullName(objectPerson));
console.log( 'age:' + utilities.getAge(objectPerson));
console.log( 'contact:' + utilities.getContact(objectPerson));
utilities.printPerson(objectPerson);

//Defining a constructor method
var Person = function(fname, lname,age,contact){
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.contact = contact;

};

//create an intialize objects with values
var p1 = new Person('James', 'Gosling', 21, [08701]);
var p2 = new Person('Jon', 'Neuman', 24,[95204]);

console.log( 'FullName:' + utilities.getFullName(p1));
console.log( 'Age :' + utilities.getAge(p1));
utilities.printPerson(p2);

//
var allPersons = [p1,p2];
for (var i = 0; i < allPersons.length; i++) {
  utilities.printPerson(allPersons[i])
};

for(var i in objectPerson){

  console.log(i + " " + objectPerson[i]);
}

//assigning references to objects
var p3 = {fname:'Charlie', lname:'Higgins', age:21, contact:[08701]};
var p4 = p3
var p5 = {fname:'Jon', lname:'Neuman', age:21, contact:[08701]};
var p6 = {fname:'Charlie', lname: 'Higgins', age:21, contact:[08701]};
console.log(p3 == p4);
console.log(p3 == p6); // false (different objects, only data is the same).
console.log(p3 == p5); // false(diffetent objects).

// 1. new Object() & the dot notation to add properties and data
// 2. Javascript Object literal 
// it has properties and values 
// key:value pairs
// key - quoted/ non-quoted
// value - number, string, float, array , another object
// 3. Pure JSON
// property i.e. keys they are quoted
// values - numbers - as they are, strings should be quoted
// you cannot use functions inside of pure json
// 4. constructor way
// 5. Cloning ( using Object.create)
// ----------x---------
// 1. var obj = new Object();
// obj.propName = "abc";
// 2. var obj2 = { propName : "abc",
// propName2 : function(){...}
// }
// 3. var obj3 = {
// "a":1,
// "b":2,
// "c":3
}
---------x----------



