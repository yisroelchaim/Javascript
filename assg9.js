var button = document.getElementById("btngo");
button.onclick = function() {
    function redirect (action) {
      action();

    }

    function goToGoogle() {
      window.location = "http://www.google.com/"
      }

    function goToYahoo() {
      window.location = "http://www.yahoo.com/"
    }
    function goToBing() {
      window.location = "http://www.bing.com/"
  }
  var sellbox = document.getElementById("sellocations");

  var userSel = sellbox.options[sellbox.selectedIndex].value;

  switch (userSel){
    case "google":
    redirect(goToGoogle);
    break;
    case "yahoo":
    redirect(goToYahoo);
    break;
    case "bing":
    redirect(goToBing);
    break;
    
  }

}



