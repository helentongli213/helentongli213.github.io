$(document).ready(function(){
	$("#about-button").click(function(){
		$("#modal-overlay").fadeIn(400, function(){
			$("#about-modal").show();
		});
	});

	$("#contact-button").click(function(){
		$("#modal-overlay").fadeIn(400, function(){
			$("#contact-modal").show();
		});
	});

	$("#x-about").click(function(){
		$("#modal-overlay").fadeOut(400, function(){
			$("#about-modal").hide();
		});
	});

	$("#x-contact").click(function(){
		$("#modal-overlay").fadeOut(400, function(){
			$("#contact-modal").hide();
		});
	});

	$("#about-button").hover(function(){
		$("#about-button").css("background-color", "#63A375")}, function(){
		$("#about-button").css("background-color", "#edc79b");
	});

	$("#contact-button").hover(function(){
		$("#contact-button").css("background-color", "#63A375")}, function(){
		$("#contact-button").css("background-color", "#edc79b");
	});

	$("#northbay").click(function(){
		$("#northnot").show();
	});

	$("#sfbay").click(function(){
		$("#sfnot").show();
	});

	$("#peninsulabay").click(function(){
		$("#peninsulanot").show();
	});
	
})