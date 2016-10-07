//ADD JQUERY AND JQUERY UI BEFORE YOU WRITE YOUR JS CODE

function quiz() {

  var question1 = prompt("Which pokemon can travel 2 times the speed of light?");

  if (question1 === "Mega Pidgeot")
    alert("Absolutely correct!");

} //closing bracket for your question 1 function

$('.submit').click(function() {
  var answer = document.getElementById("textfield1").value.toLowerCase();
  
  if (answer === "mega pidgeot") {
    alert("Correct!");
  } else {
    alert("That is Incorrect");
  }
});