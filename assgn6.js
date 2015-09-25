(function(){
  var btnSubmit = document.getElementById("btnsubmit");
  btnsubmit.onclick = function() {
  var name = document.getElementById("txbname").value;
  var div = document.getElementById("breakfastitems");
  var radios = div.getElementsByTagName("input");
  var result = document.getElementById("result");
  var selectedBreakfast = "";
for (var i = 0; i< radios.length; i++){
    if (radios[i].checked){
        selectedBreakfast = radios[i].value;

    }

}
switch(selectedBreakfast){
  case "Salad":
    result.innerHTML = "That's cool " + name + ", I like salads too!"
    break;
  case "Oats and Milk":
  result.innerHTML = name + " oats are good for your health. But eating them everyday can become tiresome."
    break;
  case "Hamburger and Fries":
  result.innerHTML = name + " is that your daily regimen? You best improve your habits."
    break;
  case "Pancakes":
  result.innerHTML = "That's nice " + name + " I hope you enjoyed them!"
    break;
    default:
    result.innerHTML = "Please select a breakfast item " + name + "."
      break;


}


};
})();
