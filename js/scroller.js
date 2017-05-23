/*Скрипт для плавного скроллинга*/

$( function() {
	$ ('#navigation a[href ^="#"]').click ( function (e) {
		var target = $(this).attr("href");
		var strip = "#" + target.slice(7);
		
		var anchor = $(strip);
		
		e.preventDefault();
		
		$ ("html, body").animate ({
			scrollTop: anchor.offset().top 
		},"slow"); 
	});
});