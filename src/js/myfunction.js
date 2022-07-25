import $ from "jquery";
//
$(document).ready(function () {
//
//
//     /**/
//     $('ul.nav').hover(function () {
//         if ($(window).width() > 767) {
//             var menuheight = $('.dropdown-menu').height();
//             $('.dropdown-menu-box').show().height(80 + menuheight);
//             $('.dropdown-menu').show();
//         }
//     }, function () {
//         //$('.dropdown-menu').hide();
//         //$('.dropdown-menu-box').hide();
//     });


    // $('.dropdown-menu-box').hover(function () {
    //     //do nothing
    // }, function () {
    //     if ($(window).width() > 767) {
    //         $('.dropdown-menu').hide();
    //         $('.dropdown-menu-box').hide();
    //     }
    // });
//     /**/
//
//
// if ($("#splash").length) {
//     $("#splash").flexslider({
//       animation: "fade",
//       controlNav: true,
//       directionNav: true,
//       slideshowSpeed: 7000,
//       pauseOnHover: true
//     });
// }
//
//
//     /*related_site*/
//     $(".related_site select").change(function () {
//         var selected = $(this).children("option:selected").val();
//         if (selected !== "nolink") {
//             window.open(selected, '_blank');
//             //window.location.href=selected;
//         }
//     });
//     /* /related_site*/
});// /doc ready


// //Vanilla JS
// window.onload = function () { // 윈도우 로딩시
//     // var nav = document.querySelector("ul.nav");
//     // var navWidth = nav.offsetWidth;
//     // var dropdownMenu = document.querySelector(".dropdown-menu");
//     // var dropdownMenuBox = document.querySelector(".dropdown-menu-box");
//     // nav.addEventListener('mouseover', function () { // nav에 마우스오버되면
//     //     console.log("mouseover");
//     //     //if(navWidth > 767){ //만약 nav의 너비가 767 이하라면
//     //     var menuHeight = dropdownMenu.offsetWidth;
//     //     dropdownMenu.setAttribute("style", "display:block;");
//     //
//     // })
//
//
//     const splash = document.getElementById("#splash");
//
//
// }


/* 버튼 function */
// window.onload = function () {
//     document.querySelector('.slideBtn2').addEventListener('click', function () {
//         document.querySelector('.slides').style.transform = 'translate(-100vw)';
//     });
//     document.querySelector('.slideBtn1').addEventListener('click', function () {
//         document.querySelector('.slides').style.transform = 'translate(0vw)';
//     });
// }

window.onload = function () {

    function slide() {
        document.querySelector('.slides').style.transform = 'translate(-100vw)';
    }
    function slideBack() {
        document.querySelector('.slides').style.transform = 'translate(0vw)';
    }
    setInterval(slide, 7000);
    setInterval(slideBack, 14000);



    const nav = document.querySelector('ul.nav');
    const winWidth = window.innerWidth;
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownMenuBox = document.querySelector('.dropdown-menu-box');
    const menuHeight = dropdownMenu.clientHeight;



    function slideDown(){
        dropdownMenuBox.style.display = "block";
    }
    function slideUp(){
        dropdownMenuBox.style.display = "none";
    }

    if(winWidth < 767){
        slideUp();
        console.log("narrow");
    }else{
        nav.addEventListener('mouseover', slideDown);
        nav.addEventListener('mouseout',slideUp);
    }
}
