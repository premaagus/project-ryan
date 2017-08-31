// JavaScript Document
	$(document).ready(function() {
        $('a[href^="#"]').click(function(e){
			
			var target = $(this).attr('href');
			var strip = target.slice(1);
			var jangkar = $("div[id='" + strip + "']");
			var navbarh = $('nav').outerHeight();
			
			e.preventDefault();
			
			
			$('html, body').animate({
				scrollTop: jangkar.offset().top - navbarh
				
				},1000);
			
			});
    });