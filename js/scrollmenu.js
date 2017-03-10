$(document).ready(function(){
	var h = $("#menu").offset().top;

	$(window).on("scroll", function(){
		if ( $(window).scrollTop() > h ){
			$("#menu").addClass("menu-fix");
		}
		else {
			$("#menu").removeClass("menu-fix");
		}
	});

});
