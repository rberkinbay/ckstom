/*Скрипт для адаптации */
var responsiveStyle = function () {
				
				var logo = document.getElementById("logo");
				var aboutShares = document.getElementById("about-shares");
				var currentShares = document.getElementById("current-shares");
				var callBackFormBlock = document.getElementById("callback-form-block");
				
				if ( window.innerWidth <= 960 ) {
					logo.style.margin = "0px 193px 44px 15px";
					aboutShares.style.background = "#fff";
					currentShares.style.margin = "65px 0 0 130px";
					callBackFormBlock.style.marginLeft = "70px";
				} else if (window.innerWidth <= 1130) {
					logo.style.margin = "0px 270px 44px 15px";
					aboutShares.style.background = "#fff";
					currentShares.style.margin = "65px 0px 0px 150px";
					callBackFormBlock.style.marginLeft = "120px";
				} else if ( window.innerWidth < 1200 ) {
					logo.style.margin = "0px 270px 44px 15px";
					aboutShares.style.background = "#fff";
					currentShares.style.margin = "65px 0px 0px 300px";
					callBackFormBlock.style.marginLeft = "100px";
				} else if ( window.innerWidth >= 1200 ) {
					logo.style.margin = "0px 310px 44px 15px";
					aboutShares.style.background = "url(images/about_shares_bg.jpg) right/contain no-repeat";
					currentShares.style.margin = "65px 0 0 120px";
					callBackFormBlock.style.marginLeft = "0";
				}
}