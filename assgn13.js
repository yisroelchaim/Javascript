var button = document.getElementById("btnadd");
button.onclick = function  () {
  var taskText = document.getElementById("txbtask").value;
  var li = document.createElement('li');  
  li.innerHTML = taskText;
  var ul = document.getElementById("tasks");
  ul.appendChild(li);
  var txbtasks = document.getElementById("txbtask");
  txbtasks.value = "";  
}