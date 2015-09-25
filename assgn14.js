var button = document.getElementById("btnadd");
button.onclick = function  () {
  var taskText = document.getElementById("txbtask").value;
  var li = document.createElement('li');  
  var span = document.createElement('span');
  span.innerHTML = taskText;
  li.appendChild(span);
  var ul = document.getElementById("tasks");
  ul.appendChild(li);
  var txbtasks = document.getElementById("txbtask");
  txbtasks.value = "";
  var removeButton = document.createElement('input');
  removeButton.setAttribute("type","button");
  removeButton.setAttribute("value","Remove");
  li.appendChild(removeButton);
  removeButton.onclick = function() {
  var buttonParent = this.parentElement; // button parent == li
  ul.removeChild(buttonParent);


  };

}