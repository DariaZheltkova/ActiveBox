$(function (){

   /* Fixed Header */

   let header = $("#header"); // объявляем переменную header; в ней будет храниться селектор header
   let intro = $("#intro");
   let introH = intro.innerHeight();;
   let scrollPos = $(window).scrollTop();
    
   checkScroll(scrollPos, introH)

   let nav = $("#nav");
   let navToggle = $("#navToggle");


   $(window).on("scroll resize", function() {
    
     introH = intro.innerHeight();

    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, introH);
   
    }
   );

   function checkScroll(scrollPos, introH) {
    if( scrollPos > introH ) {

        header.addClass("fixed");

    } else {
        header.removeClass("fixed");
    }
   }
   
   //header.addClass("fixed"); // придаем переменной класс "fixed" через метод addClass
    
   /* Smooth Scroll */

   $("[data-scroll]").on("click", function(event) {
    event.preventDefault(); // отменяем стандортное поведение при клике на ссылку
 
    let elementID = $(this).data('scroll');
    let elementOffset = $(elementID).offset().top;
     
    console.log(elementOffset);

    nav.removeClass("show");

    $("html, body").animate({
        scrollTop: elementOffset - 70
    }, 700);

   });

   /* Nav Toggle */

   navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");

   });

   /* Reviews */

   let slider = $("#reviewsSlider");

   slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true

  });
});