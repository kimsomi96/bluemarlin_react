$(document).ready(function() {





/**/
$('ul.nav').hover(function() {
if ($(window).width() > 767) {
menuheight = $('.dropdown-menu').height();
$('.dropdown-menu-box').show().height(80+menuheight);
$('.dropdown-menu').show();

}
}, function() {
 //$('.dropdown-menu').hide();
 //$('.dropdown-menu-box').hide();
});


$('.dropdown-menu-box').hover(function() {
 //do nothing
 }, function() {
if ($(window).width() > 767) {
$('.dropdown-menu').hide();
$('.dropdown-menu-box').hide();
}
});
/**/





if ($("#splash").length) {
    $("#splash").flexslider({
      animation: "fade",
      controlNav: true,
      directionNav: true,
      slideshowSpeed: 7000,
      pauseOnHover: true
    });
}

/*related_site*/
$(".related_site select").change(function() {
var selected = $(this).children("option:selected").val(); 
if(selected!="nolink"){
        window.open(selected,'_blank');
        //window.location.href=selected;
    }
});
/* /related_site*/
});// /doc ready