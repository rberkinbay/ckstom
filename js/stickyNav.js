/*Скрипт для фиксации навигации*/

$(function () {
	var navOffset = $("#navigation").offset();
	$(document).on("scroll", function () {
		var scrollTop = $(document).scrollTop();
		if (scrollTop > navOffset.top) {
			$("#navigation").addClass("fixed");
			$("#navigation ul li a").css({
				"height":"48px",
				"line-height": "48px"
			});
			$("#navigation ul li a").hover(
				function () {
					$(this).css(
						{
							"margin-top":"-6px",
							"padding":"5px 0", 
							"height":"44px", 
							"border-radius": "initial",
							"line-height": "48px"
						}
					)
				}, function () {
					$(this).css(
						{
							"margin-top":"0",
							"padding":"0",
							"height":"48px", 
							"border-radius": "3px",
							"line-height": "48px"
						}
					)
				}
			);			
		} else {
			$("#navigation").removeClass("fixed");
			$("#navigation ul li a").css({
				"height":"35px",
				"line-height": "35px"
			});
			$("#navigation ul li a").hover(
				function () {
					$(this).css(
						{
							"margin-top":"0",
							"padding":"0", 
							"height":"35px", 
							"border-radius": "3px",
							"line-height": "35px"
						}
					)
				},
				function () {
					$(this).css(
						{
							"margin-top":"0",
							"padding":"0", 
							"height":"35px", 
							"border-radius": "3px",
							"line-height": "35px"
						}
					)
				}
			);
		};
	});

/*Код, приведенный ниже, скопировал. Но адаптировал к моей разметке. */

	var excellenceServiceTop = $("#excellence-service").offset().top;
	var featuresTop = $("#features-wrapper").offset().top;
	var sharesTop = $("#shares").offset().top;
	var aboutUsTop = $("#about-us").offset().top;
	var contactsTop = $("#contacts").offset().top;

	$(document).on("scroll", function () {
		var scrollTop = $(document).scrollTop();
		var activeNav;
		if (scrollTop < excellenceServiceTop) {
			activeNav = $("#navigation li:nth-child(1)");
		} else if (scrollTop < featuresTop) {
			activeNav = $("#navigation li:nth-child(3)");
		} else if (scrollTop < sharesTop) {
			activeNav = $("#navigation li:nth-child(4)");
		} else if (scrollTop < aboutUsTop) {
			activeNav = $("#navigation li:nth-child(2)");
		} else if (scrollTop < contactsTop) {
			activeNav = $("#navigation li:nth-child(5)");
		}

		activeNav.addClass("active");
		$("#navigation li").not(activeNav).removeClass("active");
	});
});