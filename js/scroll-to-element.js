// JQuery to scroll to the differents sections of the Portfolio
$(document).ready(function (){
  /**** Scroll to About section ******/
  $('.about-click').click(function() {
    $('body').animate({
        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 120)
    }, 1000);
    //Add the active class to About label on nav bar
    $("#portfolio-click").removeClass("active");
    $("#contact-click").removeClass("active");
    $("#about-click").addClass("active");
});
  /**** Scroll to Portfolio Section******/
  $('.portfolio-click').click(function() {
    $('body').animate({
        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 120)
    }, 1000);
    //Add the active class to Portfolio label on nav bar
    $("#about-click").removeClass("active");
    $("#contact-click").removeClass("active");
    $("#portfolio-click").addClass("active");
});
  /**** Scroll to Contact section******/
  $('.contact-click').click(function() {
    $('body').animate({
        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 120)
    }, 1000);
    //Add the active class to Contact label on nav bar
    $("#about-click").removeClass("active");
    $("#portfolio-click").removeClass("active");
    $("#contact-click").addClass("active");
});
});
