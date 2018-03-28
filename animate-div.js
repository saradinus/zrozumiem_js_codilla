var startAnimations = function(){
	var animationWrappers = document.getElementsByClassName('animate');
	for(var i = 0; i < animationWrappers.length; i++){
		if(animationWrappers[i].getBoundingClientRect().y < 300){
			animationWrappers[i].classList.add('animate-start');
		}
		else if(animationWrappers[i].getBoundingClientRect().y > window.innerHeight){
			animationWrappers[i].classList.remove('animate-start');
		}
	}
};

window.addEventListener('scroll', startAnimations);
