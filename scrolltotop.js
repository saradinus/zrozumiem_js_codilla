var scrollAnimationTimer;
var scrollAnimationValue;

var startScrollAnimation = function(event){
	event.preventDefault();
	scrollAnimationValue = window.scrollY;
   scrollAnimationTimer = setInterval(scrollAnimationStep, 25);
};

var scrollAnimationStep = function() {
  window.scrollTo(0, scrollAnimationValue);
	scrollAnimationValue -= 100;

	if(scrollAnimationValue <= 0){

		clearInterval(scrollAnimationTimer);
	}
};

var scrollToTopButtons = document.getElementsByClassName('button-top');
for(var i = 0; i < scrollToTopButtons.length; i++){
	scrollToTopButtons[i].addEventListener('click', startScrollAnimation);
}
