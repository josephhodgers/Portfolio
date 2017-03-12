// EVENTO CUANDO SE MUEVE EL SCROLL, EL MISMO APLICA TAMBIEN CUANDO SE RESIZA
var change= false;
$(window).scroll(function(){
    window_a = $(window).scrollTop(); // VALOR QUE SE HA MOVIDO DEL SCROLL
    scroll_a = parseInt($("#about").height()); // VALOR DE TU DIV
    if (window_a > scroll_a) { // SI EL SCROLL HA SUPERADO EL ALTO DE TU DIV
       // ACA MUESTRAS EL OTRO DIV Y EL OCULTAS EL DIV QUE QUIERES
       $("#about-click").addClass("active");
    } else {
      $("#about-click").removeClass("active");
    }
});
$(window).scroll(function(){
    window_p = $(window).scrollTop(); // VALOR QUE SE HA MOVIDO DEL SCROLL
    scroll_p = parseInt($("#portfolio").height()); // VALOR DE TU DIV
    if (window_p > scroll_p) { // SI EL SCROLL HA SUPERADO EL ALTO DE TU DIV
       // ACA MUESTRAS EL OTRO DIV Y EL OCULTAS EL DIV QUE QUIERES
       $("#portfolio-click").addClass("active");
    } else {
      $("#portfolio-click").removeClass("active");
    }
});
$(window).scroll(function(){
    window_c = $(window).scrollTop(); // VALOR QUE SE HA MOVIDO DEL SCROLL
    scroll_c = parseInt($("#contact").height()); // VALOR DE TU DIV
    if (window_c > scroll_c) { // SI EL SCROLL HA SUPERADO EL ALTO DE TU DIV
       // ACA MUESTRAS EL OTRO DIV Y EL OCULTAS EL DIV QUE QUIERES
       $("#contact-click").addClass("active");
    } else {
      $("#contact-click").removeClass("active");
    }
});
