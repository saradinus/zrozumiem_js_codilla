var stickyMenu = function(){
	var menu = document.querySelector('.task.menu');
	var topHeader = document.querySelector('.main-header');

	if(menu.nextElementSibling.getBoundingClientRect().y - menu.offsetHeight < topHeader.offsetHeight){
		menu.classList.add('correct-sticky-menu');
	}
	else {
		menu.classList.remove('correct-sticky-menu');
	}
	
	
	var menuLinks = menu.getElementsByTagName('a');
	var newActiveLink;
	
	for(var i = 0; i < menuLinks.length; i++){
		menuLinks[i].classList.remove('active');
		
		if(document.querySelector(menuLinks[i].hash).getBoundingClientRect().y < topHeader.offsetHeight + menu.offsetHeight + 100){
			newActiveLink = menuLinks[i];
		}
	}
	
	if(newActiveLink) {
		newActiveLink.classList.add('active');
	}
};

window.addEventListener('scroll', stickyMenu);

var menuScroll = function(event){
	event.preventDefault();
	var clickedLink = this;
	var target = document.querySelector(clickedLink.hash);
	var menu = document.querySelector('.task.menu');
	var topHeader = document.querySelector('.main-header');
	
	var scrollTarget = menuScrollTarget = window.scrollY + target.getBoundingClientRect().y - (topHeader.offsetHeight + menu.offsetHeight);
	
	window.scroll({
		top: scrollTarget, 
		left: 0, 
		behavior: 'smooth' 
	});
};

var menuLinks = document.querySelector('.task.menu').getElementsByTagName('a');
for(var i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuScroll);
}
