var scrollAnimationTimer;
var scrollAnimationValue;

var startScrollAnimation = function(event){
	event.preventDefault();
	scrollAnimationValue == window.scrollY;
    scrollAnimationTimer = setInterval(scrollAnimationStep, 25);
};

var scrollAnimationStep = function(){
		if(window.scrollY != 0) {
			setTimeout(function() {
			   window.scrollTo(0,window.scrollY-30);
				TopscrollTo();
            }, 100);
           }

};

var scrollToTopButtons = document.getElementsByClassName('button-top');
for(var i = 0; i < scrollToTopButtons.length; i++){
	scrollToTopButtons[i].addEventListener('click', startScrollAnimation);
}


if (document.body.scrollTop === 0) {
    return = false;
  }