"use strict"

const cog1 = document.getElementById("cog1");
const cog2 = document.getElementById("cog2");
const cog3 = document.getElementById("cog3");
const cog4 = document.getElementById("cog4");

const card = document.getElementById("card");
const cog1t = cog1.style.top; 
const cog1l = cog1.style.left;

const cog2t = cog2.style.top; 
const cog2l = cog2.style.left;

const cog3t = cog3.style.top; 
const cog3l = cog3.style.left;

const cog4t = cog4.style.top; 
const cog4l = cog4.style.left;

const mediaQuery = window.matchMedia('(min-width: 576px)')

if (mediaQuery.matches) {
    card.addEventListener("mouseover", function () {
   
        cog1.style.top = cog1t + 60 + "px";
        cog1.style.left = cog1l - 40 + "px";
    
        cog2.style.top = cog2t + 60 + "px";
        cog2.style.left = cog2l + 160 + "px";
    
        cog3.style.top = cog3t + 390 + "px";
        cog3.style.left = cog3l - 255 + "px";
    
        cog4.style.top = cog4t + 390 + "px";
        cog4.style.left = cog4l - 41 + "px";
    
    });
    
    card.addEventListener("mouseleave", function () {
        cog1.style.top = cog1t;
        cog1.style.left = cog1t;
    
        cog2.style.top = cog2t;
        cog2.style.left = cog2t;
    
        cog3.style.top = cog3t;
        cog3.style.left = cog3l;
    
        cog4.style.top = cog4t;
        cog4.style.left = cog4l;
    
    });

} else {
    card.addEventListener("mouseover", function () {
   
        cog1.style.top = cog1t + 45 + "px";
        cog1.style.left = cog1l - 40 + "px";
    
        cog2.style.top = cog2t + 45 + "px";
        cog2.style.left = cog2l + 145 + "px";
    
        cog3.style.top = cog3t + 375 + "px";
        cog3.style.left = cog3l - 176 + "px";
    
        cog4.style.top = cog4t + 375 + "px";
        cog4.style.left = cog4l + 8 + "px";
    
    });
    
    card.addEventListener("mouseleave", function () {
        cog1.style.top = cog1t;
        cog1.style.left = cog1t;
    
        cog2.style.top = cog2t;
        cog2.style.left = cog2t;
    
        cog3.style.top = cog3t;
        cog3.style.left = cog3l;
    
        cog4.style.top = cog4t;
        cog4.style.left = cog4l;
    
    });
}

const mediaQuerySmall = window.matchMedia('(max-width: 360px)');

if (mediaQuerySmall.matches) {
    card.addEventListener("mouseover", function () {
   
        cog1.style.top = cog1t + 45 + "px";
        cog1.style.left = cog1l - 35 + "px";
    
        cog2.style.top = cog2t + 45 + "px";
        cog2.style.left = cog2l + 130 + "px";
    
        cog3.style.top = cog3t + 345 + "px";
        cog3.style.left = cog3l - 150 + "px";
    
        cog4.style.top = cog4t + 345 + "px";
        cog4.style.left = cog4l + 8 + "px";
    
    });
    
    card.addEventListener("mouseleave", function () {
        cog1.style.top = cog1t;
        cog1.style.left = cog1t;
    
        cog2.style.top = cog2t;
        cog2.style.left = cog2t;
    
        cog3.style.top = cog3t;
        cog3.style.left = cog3l;
    
        cog4.style.top = cog4t;
        cog4.style.left = cog4l;
    
    });
}





const projectCard = document.getElementsByClassName("project");
const projectTitle = document.getElementsByClassName("project-title");

for(let i = 0; i < projectCard.length; i++) {
    projectCard[i].addEventListener("mouseover", function() {
        projectTitle[i].style.visibility = "visible";
    });
    projectCard[i].addEventListener("mouseout", function() {
        projectTitle[i].style.visibility = "hidden";
    });
}

$(document).ready(function () {
    $(window).scroll(function () {
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).position().top + ($(this).outerHeight())/4;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1'
                }, 1500);
            }
        });
    });
});

const year = document.getElementById("year");

const yr = new Date();

year.textContent = yr.getFullYear();

// $(function() {
//     // Animate loader off screen
//     $(".preloader-container").setTimeout(() => {
//         $(".preloader-container").fadeout(5000)
//     }, 2000);
// });

document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
          "body").style.visibility = "hidden"; 
        document.querySelector( 
          ".preloader-container").style.visibility = "visible";
          document.querySelector( 
            ".preloader-container").style.top = "0px"; 
    } else { 
        document.querySelector( 
          ".preloader-container").style.top = "-100%"; 
        document.querySelector( 
          "body").style.visibility = "visible"; 
          document.querySelector( 
            ".preloader-container").style.visibility = "hidden";
    } 
};