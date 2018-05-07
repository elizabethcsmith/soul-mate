document.addEventListener("DOMContentLoaded", function(event) {
  var element = document.getElementById("accept");
  console.log('this is the element', element);
  function callYourMate() {
    alert('415-896-0921');
  }
  element.addEventListener('click', callYourMate);
  console.log('is this linked?');
});




//document.getElementById("myBtn").addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "Hello World";
//});
