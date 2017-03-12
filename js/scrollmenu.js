// JQuery to put the navegation bar like a sticker
$(document).ready(function(){
	//capture the position of nav bar
	var h = $("#menu").offset().top;
	//function to add the class menu-fix if the
	//position of nav bar is less than top scroll
	$(window).on("scroll", function(){
		if ( $(window).scrollTop() > h ){
			$("#menu").addClass("menu-fix"); // add class menu-fix to nav bar
		}
		else {
			$("#menu").removeClass("menu-fix"); //remove class menu-fix from nav bar
		}
	});

});
