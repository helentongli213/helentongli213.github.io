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


	$("#midterm-link").click(function(){
		$('html, body').animate({
			scrollTop:$("#projects").position().top
		}, 1000);
		$("#modal-overlay").fadeIn(400, function(){
			$("#midterm-modal").show();
			$("#midterm-pic").show();
			$("#midterm-x").show();
		});
		$('html, body').css({
    		overflow: 'hidden',
    		height: '100%'
		});

	}); 


	$("#midterm-x").click(function(){
		$("#modal-overlay").fadeOut(400, function(){
			$("#midterm-modal").hide();
			$("#midterm-pic").show();
			$("#midterm-x").show();
		});
		$('html, body').css({
    		overflow: 'auto',
    		height: 'auto'
		});
	});

	$("#msp-link").click(function(){
		$('html, body').animate({
			scrollTop:$("#projects").position().top
		}, 1000);
		$("#modal-overlay").fadeIn(400, function(){
			$("#msp-modal").show();
			$("#msp-pic-one").show();
			$("#msp-pic-two").show();
			$("#msp-pic-three").show();
			$("#msp-x").show();
		});
		$('html, body').css({
    		overflow: 'hidden',
    		height: '100%'
		});

	}); 

	$("#msp-x").click(function(){
		$("#modal-overlay").fadeOut(400, function(){
			$("#msp-modal").hide();
			$("#msp-pic").show();
			$("#msp-x").show();
		});
		$('html, body').css({
    		overflow: 'auto',
    		height: 'auto'
		});
	});
	
})