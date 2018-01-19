$(document).ready(function(){
	$("#contact-item").click(function(){
		$('html, body').animate({
			scrollTop:$("#contact").position().top - 100
		}, 1000);
	});

	$("#projects-item").click(function(){
		$('html, body').animate({
			scrollTop:$("#projects").position().top - 100
		}, 1000);
	});

	$("#work-item").click(function(){
		$('html, body').animate({
			scrollTop:$("#work").position().top - 100
		}, 1000);
	});

	$("#about-item").click(function(){
		$('html, body').animate({
			scrollTop:$("#about").position().top - 30
		}, 1000);
	});

	$("#home-item").click(function(){
		$('html, body').animate({
			scrollTop:$("#home").position().top - 100
		}, 1000);
	});
	
})