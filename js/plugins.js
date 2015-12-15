//Initialize tooltip plugin
$(".social li a").tooltip();

//Home page blog post slider
$(document).ready(function() {
    $("#blog-slider").owlCarousel({
        autoPlay: 3000,
        responsive:	true,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,2],
        itemsTablet : [768,2],
        itemsMobile: [479,1],
    });
});

//Mixitup Initialized
$(function(){
    $('.our-crews').mixItUp();
});