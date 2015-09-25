var p = document.getElementById("result");

var Utilities = {
  compare: function(obj1,obj2){
    if (obj1.title == obj2.title && obj1.price == obj2.price) {
        return true;
    } else {
      return false;
    }
  }
  //  return ( obj1.title == obj2.title && obj1.price == obj2.price );
};

function Book (title, price) {

this.title = title;
this.price = price;

}

var b1 = new Book("The Lost World", "50");
var b2 = new Book("Animal Farm", 30);
var b3 = new Book("The Lost World", "50");

if (Utilities.compare(b1,b2 )){
  p.innerHTML = "Book1 and Book2 are the same";
}

if (Utilities.compare(b1,b3)){

  p.innerHTML += "Book1 and Book3 are the same";
}