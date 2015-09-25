
// index of Method
var line = "I live in Seattle";
var pos = line.indexOf('Seattle');
document.write(pos);

//Replace method
var line = "Please visit Microsoft.";
var newLine = line.replace("Microsoft", "Red Hat Linux");

// String Extraction
var string = "Apple, Banana, Orange";
var pull = str.slice(7,19); // or just (7)
var pull2 = str.substring(7,19) // ""
var pull3 = str.substr(7,6) // Banana

//String to Array
var line = "I live in Seattle";
var arrWords = line.split('');
document.write(arrWords[0]);

//Trim whitespace Method
var name = "  Johnny   "
var trim = name.trim();

//Parsing

string1 =  '500';
string2 = '200.5';

var num1 = parseInt(string1);
var num2 = parseFloat(string2);
// .toString()
var number = 200;
var str = number.toString();

//Truncating
var pi = Math.PI;
var truncate = pi.toFixed(2);

//Dates

new Date()
new Date(Milliseconds)
new Date(dateString)
new Date(year,month,day,milliseconds)



getDate()
setDate()
// (getMonth, getYear, getDay, getFullYear(), getHours(), getMilliseconds(), getMinutes(), getMonth(), getSeconds(), getTime()

//Comparing Dates
var today, someday, text;
today = new Date();  
someday = new Date();

//Math
var root = Math.sqrt(16);
var power = Math.pow(2,3); //8

var roundingDown = Math.floor(2.8) // 2
var roundingUp = Math.ceil(2.2) // 3
var rounding = Math.round(2.2)// 2
var randomNum = Math.random();
var randomNum2 = parseInt(Math.random() * 10); // 0-10

var pi = Math.PI // 3.14 etc.



