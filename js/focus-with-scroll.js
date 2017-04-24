var change= false;

//smoothscroll
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 800, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
});
/*
//funcion scroll
$(window).scroll(function(){
    window_a = $(window).scrollTop(); // altura de mi scroll
    scroll_a = parseInt($("#about").height()); // altura de mi section about
    scroll_p = parseInt($("#portfolio").height()); // altura de mi section portfolio
    scroll_c = parseInt($("#contact").height()); // altura de mi section contact

    if (window_a < scroll_a ){ // SI EL SCROLL HA SUPERADO EL ALTO DE TU DIV
       // ACA MUESTRAS EL OTRO DIV Y EL OCULTAS EL DIV QUE QUIERES
      $("#about-click").addClass("active");
      $("#portfolio-click").removeClass("active");
      $("#contact-click").removeClass("active");

    } else if ((window_a < scroll_p)||(window_a > scroll_c)){
      $("#portfolio-click").addClass("active");
      $("#about-click").removeClass("active");
      $("#contact-click").removeClass("active");

    } else if (window_a < scroll_c ){
      $("#contact-click").addClass("active");
      $("#about-click").removeClass("active");
      $("#portfolio-click").removeClass("active");
    }

});*/
