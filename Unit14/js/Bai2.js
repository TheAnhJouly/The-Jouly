$(document).ready(function(){
	$('.plus').on('click', function(){
		$('.add').addClass('hide');
		$('.plus').removeClass('hide');
		$('.minus').addClass('hide');
		$(this).toggleClass('hide');
		$('.text').css({
			"color" : "white",
		}) 
		$(this).siblings('.minus').toggleClass('hide');
		$(this).siblings('.add').toggleClass('hide');
		$(this).siblings('.text').css({
			"color" : "#9AFF9A",
		})
})
	$('.minus').on('click', function(){
		$(this).toggleClass('hide');
		$(this).siblings('.plus').toggleClass('hide');	
		$(this).siblings('.add').toggleClass('hide');
		$(this).siblings('.text').css({
			"color" : "white",
		})
})
})