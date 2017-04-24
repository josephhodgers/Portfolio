// JQuery to put the navegation bar like a sticker
$(document).ready(function(){
	//capture the width of screen
	var w = screen.width;
  //capture the width of screen
  var h = screen.height;

  var minw = 370;
  var mediunw = 768;

	if (w < mediunw){
    $("#menu").removeClass("navbar-color");
    $("#menu").addClass("navbar-color-r");

		$("form>div>div>label").removeClass("text-right");
		$("form>div>div>label").addClass("text-left");
	}

  if (w < minw){
    $("#brandname").removeClass("navbar-brand");
    $("#brandname").addClass("navbar-brand-s");
	}
});
