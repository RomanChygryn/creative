$(document).ready(function(){
	$('.menu__toggle').click(function(){
		$(this).toggleClass('open');
		$('.nav__list').toggleClass('open');
	});

	$('.nav__link, .logo').click(function(){
		$('.menu__toggle, .nav__list').removeClass('open');
	});
});
