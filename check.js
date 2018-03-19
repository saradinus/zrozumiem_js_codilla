



var addText = function(textToAdd){
	var targetDiv = document.getElementById('basics-demo');
	targetDiv.innerHTML += '<br>' + textToAdd;
};

addText('To jest demo naszej pierwszej funkcji!');
var buttonHello = document.getElementById('say-hello');
document.getElementById("say-hello").addEventListener("click", function(event){
    event.preventDefault()
});
var firstTimePressed = false
var sayHello = function Greetings() {
  if (firstTimePressed == false) {
    var savedName = prompt('Jak masz na imię?');
    firstTimePressed = true
   addText('Cześć ' + savedName + '! Miło Cię poznać!');
}
    else {
            addText('No witaj ponownie');
    }
};

buttonHello.addEventListener('click', sayHello);






 
