$(document).ready(function() {
	
	// Мобильная навигация 
	var navToggleButton = $('#navigation__button');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');

	 navToggleButton.on('click', function(e) {
	 	e.preventDefault();
	 	navBlock.toggleClass(navBlockOpen);

	 	if (navToggleButton.hasClass("active")) {
  	 		navToggleButton.removeClass("active");
  	 	}
     	else {
  	 		navToggleButton.addClass("active");
  	 	}

	 })

	 navLink.on('click', function(){
	 	if (navBlock.hasClass(navBlockOpen)) {

	 		if (navToggleButton.hasClass("active")) {
  	 		navToggleButton.removeClass("active");
  	 		}
      		else {
  	 		navToggleButton.addClass("active");
  	 		}

	 	}
	 	
	 	navBlock.removeClass(navBlockOpen);
	 })
	
});