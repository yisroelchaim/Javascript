//snippet : gi.sublime (generate document.getElement)
(function(){
  "use strict";

  var buttonSubmit = document.getElementById("btnsubmit");
  buttonSubmit.onclick = function  () {
  var name = document.getElementById("txbname").value;
  var div = document.getElementById("skillset");
  var chkSkillsets = document.getElementsByTagName("input");
  var skillsets = "";
  // Checks which skillsets are checked, and adds a string to the skillsets.
  for (var i = 0; i < chkSkillsets.length; i++){  
    if (chkSkillsets[i].checked == true ) {
      skillsets += chkSkillsets[i].value+ " ";
    };
  }

  //console.log(name);
  //console.log(skillsets);
  var result = document.getElementById("txaresult");
  result.value = "Name : " + name;
  result.value += "\r\n";
  result.value += "Skillset : " + skillsets;


};
})();
